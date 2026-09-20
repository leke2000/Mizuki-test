---
title: 从医院机房到 Java 开发：我的 EMR 多数据源同步实战经验
published: 2026-09-20
description: 记录我从医院一线实施转向 Java 开发的过程，以及在 EMR 多数据源同步（SQLServer/Oracle/MySQL/PostgreSQL）中积累的排障思路、抓包定位方法与工具化实践。
tags: [Java, 医疗信息化, EMR, 数据同步, Wireshark]
category: 技术
draft: false
pinned: true
---

我先做了多年的医院信息化实施，再转向 Java 开发。这篇文章不讲某个具体框架，而是聊聊我从机房一线带出来的一种工作方式——**遇到问题先抓现场，再写代码**。

## 一、为什么 EMR 多数据源同步这么难

医院里很少只有一套数据库。一个 EMR 系统可能同时对接：

- **SQLServer**：HIS 主库，老牌 C/S 架构
- **Oracle**：部分院区财务 / 住院结算
- **MySQL**：新上的 Web 端应用
- **PostgreSQL**：某些厂商的数据中台

要把一条病人数据在这些库之间同步，难点不是写 SQL，而是：

1. **字段语义不一致**：同一个"住院号"，在 A 库是字符串、在 B 库是数字、在 C 库还带前缀；
2. **时序错位**：HIS 先写主库，EMR 再读，中间有几秒到几分钟延迟，直接全量比对永远对不上；
3. **网络抖动**：医院内网常常是老旧交换机 + 多层 VPN，接口偶发超时，但日志里什么都不留。

## 二、排障的第一步：抓现场

很多人一遇到数据不一致就盯着代码看，我习惯反过来——**先抓现场，再回到代码**。

### 1. 用 tcpdump / Wireshark 看真实链路

当某个接口偶发超时、但应用日志只有"连接失败"时，抓包是最快的定位手段：

```bash
# 在服务器上抓目标端口的流量
tcpdump -i any port 1433 -w emr_sync.pcap
# 拿回本地用 Wireshark 分析
```

在 Wireshark 里我重点看三件事：

- **TCP 重传（Retransmission）**：说明链路丢包，多半是网络层问题，不是应用层；
- **RST**：对端主动拒绝，可能是连接数打满或防火墙策略；
- **应用层响应时延**：从 SYN 到第一个数据包的时间，能区分是网络慢还是数据库慢。

这一套思路我在 [排障手记](https://leke2000.github.io/blog/2026/09/17/tcpdump-wireshark/) 里详细写过，都是从真实环境跑出来的。

### 2. 用 Arthas 看应用内部

到了应用层，Arthas 是 Java 线上诊断的利器。我最常用 `trace` 和 `watch`：

```bash
# 看某个同步方法到底卡在哪一步
trace com.xxx.EmrSyncService doSync '#cost > 200'
# 直接观察方法入参出参，不用改代码加日志
watch com.xxx.EmrSyncService doSync "{params, returnObj}" -x 2
```

火焰图（`profiler start` + `profiler stop --format flamegraph`）则适合定位"整体慢"但说不清是哪一段的问题。这部分我也在 [Arthas 火焰图实战](https://leke2000.github.io/blog/2026/09/16/arthas-flame-graph-analysis/) 里整理过。

## 三、把排障经验沉淀成代码

做过实施的人写代码，有一个本能反应：**凡是在机房里被坑过的地方，程序里都要兜底**。

举几个我在 ejet-emr-wisdom 里贯彻的原则：

1. **同步前先校验**：不信任源端字段类型，全部走一层归一化，避免"住院号带字母"这类坑；
2. **按时间窗口增量比对**：而不是全量 diff，避免时序错位带来的"假不一致"；
3. **每次同步留痕**：记录源端主键、目标端主键、耗时、异常，出问题能一键回放；
4. **失败可重试、可补偿**：医院网络不可靠，同步任务必须能从断点继续，而不是从头重来。

这些不是高深的技术，但都是从真实上线事故里"交学费"换来的。

## 四、工具化：把运维痛点做成开源项目

我还有个习惯——**凡是重复做过三遍的运维操作，就写工具**。于是有了几个开源项目：

- **[qq-capture](https://github.com/leke2000/qq-capture)**：基于 Windows UIA 的零侵入 QQ 聊天记录抓取器，纯只读、不注入进程；
- **[archive-helper](https://github.com/leke2000/archive-helper)**：伪装压缩包自动识别 / 还原 / 解压 / 归档；
- **[anime-mall](https://github.com/leke2000/anime-mall)**：SpringBoot + Vue3 全栈商城，用来验证全栈工程化能力。

对我来说，开源不是炫技，是把生产痛点抽象成通用解法的过程。

## 小结

从医院实施转 Java 开发，表面上是换岗位，实际上是换一种方式解决同一类问题。**生产 sense** 是这段经历给我的最大礼物——它让我写代码时，脑子里始终装着"这玩意上线了会不会炸"。

如果你也在做医疗信息化、EMR 数据同步，或者在从运维 / 实施转开发，欢迎在 [GitHub](https://github.com/leke2000) 上找我聊聊，也可以发 [邮件](mailto:1793023565@qq.com) 给我。更详细的排障手记我持续更新在 [实施工程师排障手记](https://leke2000.github.io/blog/) 这个博客里。
