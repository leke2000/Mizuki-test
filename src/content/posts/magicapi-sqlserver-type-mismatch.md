---
title: 一条日志牵出四层问题：MagicAPI + SQL Server 视图 + Java 实体类型排障实录
published: 2026-09-23
description: 住院数据同步接口从报错到跑通，连续修掉了 SQL 方言、视图名、过滤条件和 BeanUtil 类型转换四类问题。复盘完整排查链路与定位技巧。
tags: [Java, SQL Server, MagicAPI, 数据同步, 排障]
category: 技术
draft: false
pinned: false
---

做 EMR 住院数据同步时，一个接口从"完全报错"到"正常返回数据"，中间不是一个 bug，而是**叠在一起的四层问题**。这篇复盘完整的排查链路——从一条日志开始，怎么一层层剥到根因。

核心链路：**MagicAPI 脚本 + SQL Server 视图 + Java 实体类型不匹配**。

## 一、SQL 方言问题：MySQL 语法打到了 SQL Server

**现象**

```text
'DATE_FORMAT' is not a recognized built-in function name.
```

**原因**：SQL 写的是 MySQL 函数，但连接的是 SQL Server。方言不匹配，函数根本不存在。

常用函数对照：

| MySQL | SQL Server |
|---|---|
| `NOW()` | `GETDATE()` |
| `DATE_SUB(NOW(), INTERVAL 3 DAY)` | `DATEADD(DAY, -3, GETDATE())` |
| `DATE_FORMAT(x, '%Y%m%d%H%i%s')` | 不需要，直接比较日期 |

**修复**

```sql
WHERE discharge_time IS NULL
   OR discharge_time > DATEADD(DAY, -30, GETDATE())
```

教训：**先确认当前连接的是哪种数据库，再写函数**。多数据源项目里尤其容易犯——上一个脚本连 MySQL 抄过来的片段，这一个脚本已经在 SQL Server 上执行了。

## 二、对象名错误：报错里的名字和真实对象对不上

**现象**

```text
Invalid object name 'v_inpatient_visit'.
```

**原因**：脚本里写的是 `v_inpatient_visit`，数据库里实际叫 `V_ZHYL2_inpatient_visit`。

**修复**

```sql
-- 改前
FROM v_inpatient_visit
-- 改后
FROM dbo.V_ZHYL2_inpatient_visit
```

**关键教训**：报错信息里那个对象名，和数据库里实际存在的对象名，必须逐个对上。而且光改主脚本没用——要确认**真正执行 SQL 的那个子脚本**也改了，否则主脚本看着对了，运行时还是旧名字。

## 三、过滤条件过严：视图有 89068 条，接口返回空数组

**现象**：数据库视图里明明有 89068 条数据，接口却返回 `data: []`。

**原因**：`discharge_time` 的过滤条件（未出院，或最近 30 天内出院）把数据全部过滤掉了——存量数据的出院时间普遍早于 30 天。

```sql
WHERE discharge_time IS NULL
   OR discharge_time > DATEADD(DAY, -30, GETDATE())
```

**修复思路（先想清楚同步语义）**

- 做**全量同步**：去掉这个时间条件；
- 做**增量同步**：保留条件，此时空结果是正常的（最近 30 天确实没有新出院数据）。

教训：`[]` 不代表程序错了，要回到 WHERE 条件上算一遍——**视图的总行数和过滤后的行数，分别 count 一次**，差距一目了然。

## 四、Java 实体类型不匹配：最主要的一串

数据查出来之后，`BeanUtil.copyProperties` 拷贝时，数据库字段类型和 Java 实体字段类型对不上，开始逐个报错。

| 字段 | 数据库类型 | 实体类型 | 报错 | 修复方式 |
|---|---|---|---|---|
| `nursingLevel` | 字符串 `"二级护理"` | `Integer` | `Unparseable number` | 用 map 做中文 → code 映射 |
| `admissionTime` | `Timestamp` | `LocalDateTime` | `NoSuchMethodException` | `LocalDateTime.ofInstant(...)` 转换 |
| `dischargeTime` | `Timestamp` | `LocalDateTime` | 同上 | 同上 |
| `gender` | `Integer` | `String` | `NoSuchMethodException` | `.toString()` |
| `birthday` | `Timestamp` | `Date` | 无 | `Timestamp` 本就是 `Date` 子类，直接传 |

典型的两处转换写法：

```java
// Timestamp → LocalDateTime
LocalDateTime admissionTime = ts == null ? null
        : LocalDateTime.ofInstant(ts.toInstant(), ZoneId.systemDefault());

// 护理等级中文 → 编码（枚举值集中管理，别散落在代码里）
Integer nursingLevel = NURSING_LEVEL_MAP.get(rs.getString("nursingLevel"));
```

**最终方案：放弃 `BeanUtil.copyProperties`，改为手动逐个 setter 赋值。**

原因：自动拷贝在类型完全一致时很省事，但一旦跨类型（字符串↔数字、Timestamp↔LocalDateTime），它的隐式转换要么抛异常、要么静默得到错误值。手动 setter 虽然啰嗦，但**每个字段怎么转的一目了然**，后续维护的人（包括三个月后的自己）不用再猜 BeanUtil 对这个字段做了什么。

> 为什么不用 BeanUtil？建议直接在脚本头部写清楚这个决定，避免后来人"好心"重构回自动拷贝，再把同一批坑踩一遍。

## 五、这次用到的关键定位技巧

1. **看 `Caused by` 那一行**——最底层的 `Caused by` 才是根因，上面那一长串调用栈只是异常传播的路径。
2. **按行号定位脚本**：日志里的 `MagicScript_7.ms:22`、`MagicScript_13.ms:22` 直接指向具体脚本和具体行，不用全局瞎翻。
3. **分清两条独立链路**：
   - `/test1/sync_test` → MagicScript 接口链路（手工触发）
   - `InpatientOrderProcessor` → Java 定时任务链路（调度触发）

   两者互相独立，改一个不影响另一个。排查时先确认报错来自哪条链路，别改错地方。
4. **用 grep 找残留**（改完视图名后确认没有漏网之鱼）：

   ```bash
   grep -rn "v_inpatient_visit" /home/ejet/emr-wisdom-sync/ | grep -v "V_ZHYL2"
   ```

5. **tail -f 加过滤，避免无关日志刷屏**：

   ```bash
   sudo tail -f xxx.log | grep -v "TLSv1 was negotiated"
   ```

## 六、遗留事项

1. 核对 `NursingLevelEnum` 的 code，确认 map 里 1/2/3/4 与业务定义一致；
2. `InpatientOrderProcessor` 定时任务仍提示"未找到任何同步任务"，需确认任务表的写入链路；
3. TLSv1 警告不影响业务，但建议后续在 SQL Server 端和 JDBC 连接串中强制 TLS 1.2；
4. 在 MagicAPI 脚本头部注释说明"为何手动 set 而不用 `BeanUtil.copyProperties`"。

## 一句话总结

**接口从报错到跑通，改了四层：SQL 方言（`DATE_FORMAT` → `DATEADD`）、视图名（`v_inpatient_visit` → `V_ZHYL2_inpatient_visit`）、过滤条件（按全量/增量语义决定去留）、Java 类型转换（手动 setter 代替 BeanUtil）。**

多层问题叠在一起时，不要试图一次改完——**让每一层的报错单独暴露出来，修一层、验一层，再看下一层**。
