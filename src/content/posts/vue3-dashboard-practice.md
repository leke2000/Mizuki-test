---
title: Vue 3 数据可视化大屏开发实践：我的技术选型与经验
published: 2026-09-20
description: 记录我在数据可视化大屏项目中的前端技术选型（Vue 3 + TypeScript + Vite + ECharts + DataV）、自适应方案、图表封装、前后端联调与性能优化经验。
tags: [Vue 3, 数据可视化, ECharts, 大屏, TypeScript]
category: 技术
draft: false
pinned: true
---

数据可视化大屏是我日常工作中最核心的一块业务。本文简单梳理一下我在大屏项目中的技术选型和一些实战经验，既是给自己做总结，也希望能给刚接触大屏开发的同学一点参考。

## 技术选型

大屏项目对**视觉效果、实时数据和多分辨率适配**的要求都比较高，我们的整体技术栈如下：

- **框架**：Vue 3 + TypeScript + Vite
- **状态管理 / 路由**：Pinia + Vue Router
- **UI 与可视化**：Element Plus + ECharts + DataV
- **网络请求**：Axios（统一封装）
- **后端**：Java 17 + Spring Boot（接口服务 `ejet-screen-management`）

选择 Vue 3 主要是看中 Composition API 在复杂页面下的组织能力，配合 TypeScript 可以让图表配置、接口数据这类结构复杂的对象更可控；Vite 的冷启动和热更新速度也能明显提升大屏这种页面组件繁多的项目的开发体验。

## 一、多分辨率自适应

大屏最常见的坑就是设计稿（通常是 1920×1080 或更大）和实际展示屏幕分辨率不一致。我采用的是 **transform: scale() 整体缩放** 方案：

```ts
// 根据设计稿尺寸计算缩放比例
function useScreenScale(designWidth = 1920, designHeight = 1080) {
	const scaleX = window.innerWidth / designWidth;
	const scaleY = window.innerHeight / designHeight;
	// 等比缩放，避免画面拉伸变形
	return Math.min(scaleX, scaleY);
}
```

几个实践要点：

- 优先使用**等比缩放**（取宽高比例的较小值），宁可留边也不要拉伸变形；
- 监听 `resize` 事件时加 **防抖**，避免拖拽窗口时频繁重排；
- 缩放容器内的字体、间距全部按设计稿 px 书写，无需手动换算 rem。

## 二、ECharts 图表的组件化封装

大屏里图表数量多、配置项长，我会把常用图表封装成统一的基础组件：

- 通过 `props` 接收**数据**和少量**样式配置**，把通用的 `grid`、`tooltip`、`legend`、颜色主题收敛到组件内部；
- 在 `onMounted` 中初始化实例，`onBeforeUnmount` 中调用 `dispose()` 防止内存泄漏；
- 容器尺寸变化时调用 `chart.resize()`，配合全局缩放保证不错位；
- 数据更新时优先使用 `setOption(option, { notMerge: false })` 增量更新，而不是重复初始化。

对于边框、装饰、滚动表格这类"大屏味"很浓的元素，直接使用 **DataV** 组件库可以省下大量手写 SVG/CSS 的时间。

## 三、实时数据与性能优化

大屏经常需要轮询或定时刷新数据，性能上有几个比较关键的点：

1. **轮询接口做合并**：尽量让后端一个接口返回一个看板区域所需的全部数据（我们的 `ejet-screen-management` 就是按大屏模块设计聚合接口），避免前端同时发出几十个请求；
2. **定时器统一管理**：页面销毁时清除所有定时器，切走页面（`visibilitychange`）时暂停轮询；
3. **数据量大时开 ECharts 渐进式渲染 / 抽样**：折线图数据点过千时考虑降采样，动画时长适当缩短甚至关闭；
4. **动画做降级**：在性能一般的机器上减少 CSS 滤镜、模糊和水波纹这类高开销特效。

## 四、前后端联调

前端通过封装过的 Axios 实例访问 Spring Boot 接口：

- 请求拦截器统一注入 token、设置超时时间；
- 响应拦截器统一处理业务错误码，并对大屏场景做静默处理（数据失败时展示"暂无数据"而不是弹窗打断整屏展示）；
- 接口层用 TypeScript 定义好响应类型，和后端的 DTO 保持一致，联调时能少踩很多字段名的坑。

## 小结

大屏开发看起来是"画页面"，实际上对**工程化、性能和数据链路**都有要求：前端要 Hold 住复杂的图表与适配，后端要提供稳定、聚合合理的数据接口。Vue 3 + ECharts + Spring Boot 这套组合在我目前的项目里运转得不错。

后续我会继续把大屏开发中遇到的具体问题（地图可视化、3D 图表、WebSocket 实时推送等）整理成文章，欢迎在 [GitHub](https://github.com/leke2000) 上关注我，也可以通过 [邮箱](mailto:1793023565@qq.com) 和我交流。
