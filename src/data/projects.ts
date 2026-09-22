// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "anime-mall",
		title: "二次元资源商场 anime-mall",
		description:
			"基于 SpringBoot 2.7 + Vue 3 + Element Plus 的二次元资源（壁纸/插画/音乐/视频/漫画/素材）商城系统，支持钱包余额模拟支付、收藏、评分评论与管理后台。前后端分离，附 GitHub Pages 演示模式（无需后端即可体验）与 Docker 一键部署。",
		image: "",
		category: "web",
		techStack: [
			"Java",
			"Spring Boot",
			"SpringMVC",
			"MyBatis",
			"Vue 3",
			"Element Plus",
			"JWT",
			"Docker",
		],
		status: "completed",
		liveDemo: "https://leke2000.github.io/anime-mall/",
		visitUrl: "https://leke2000.github.io/anime-mall/",
		sourceCode: "https://github.com/leke2000/anime-mall",
		startDate: "2026-07-01",
		featured: true,
		tags: ["全栈", "SpringBoot", "Vue3", "电商"],
	},
	{
		id: "ejet-screen-management",
		title: "ejet-screen-management 医院 EMR 智慧同步套件（工作项目）",
		description:
			"私有工作项目，支撑多家医院上线的 EMR 智慧同步套件，由后端服务、Web 管理端与屏幕监控组成。后端基于 Java 17 的 Maven 多模块架构（screen-server 启动模块 + screen-module-emr / system / infra 业务模块 + screen-framework 框架层），管理端 ejet-ui-admin-vue3 基于 Vue 3 + TypeScript + Vite + Element Plus，并用 ECharts 实现监控可视化。覆盖 SQLServer / Oracle / MySQL / PostgreSQL 多数据源 EMR 数据同步的开发、实施、排障与验证。",
		image: "",
		category: "other",
		techStack: [
			"Java 17",
			"Spring Boot",
			"Maven 多模块",
			"MyBatis",
			"Vue 3",
			"TypeScript",
			"Vite",
			"Element Plus",
			"ECharts",
			"SQLServer",
			"Oracle",
			"MySQL",
			"PostgreSQL",
		],
		status: "in-progress",
		startDate: "2025-01-01",
		featured: true,
		tags: ["医疗信息化", "EMR", "数据同步", "全栈", "工作项目"],
	},
	{
		id: "qq-capture",
		title: "QQ 聊天记录自动抓取器 qq-capture",
		description:
			"零侵入的 QQ(NT) 桌面版聊天记录抓取与归档工具。基于 Windows UI Automation（UIA）无障碍接口，把屏幕上已加载的聊天消息实时解析入库，并支持指定会话的历史消息回溯抓取。只读取界面树，不注入进程、不解密数据库、不模拟点击消息，对 QQ 完全无感知，无封号风险。",
		image: "",
		category: "desktop",
		techStack: ["Python", "UIA", "SQLite", "Windows"],
		status: "completed",
		sourceCode: "https://github.com/leke2000/qq-capture",
		startDate: "2026-09-01",
		featured: true,
		tags: ["Python", "工具", "UIA", "逆向"],
	},
	{
		id: "archive-helper",
		title: "通用解压归档助手 archive-helper",
		description:
			"把「下载 → 识别伪装 → 还原 → 校验 → 解压 → 分类归档」串成一步的桌面工具。很多资源站会把压缩包伪装成视频/图片文件来规避审查，还会拆成分卷、加密码，手动处理繁琐——这个工具把整套流程自动化了，支持伪装包结构识别、分卷解压、多候选密码、嵌套解压与抢救式解压。",
		image: "",
		category: "desktop",
		techStack: ["Python", "tkinter", "7-Zip"],
		status: "completed",
		sourceCode: "https://github.com/leke2000/archive-helper",
		startDate: "2026-09-15",
		featured: false,
		tags: ["Python", "工具", "自动化"],
	},
	{
		id: "gameshelf",
		title: "GameShelf 游戏架整合工具",
		description:
			"散落在 C / D / G / H 各盘的游戏，不移动一个字节就能合并成一个可浏览的分类目录——基于 NTFS 目录联接（junction）构建，应用程序完全无感知：游戏照常启动、存档不失效、快捷方式不变，整个游戏架零占用。CLI 可分类、移动 / 复制、备份还原存档（支持 Ludusavi / Playnite 数据），另附 Xbox 风格的 GameShelf Launcher 图形启动器。无需管理员权限。",
		image: "",
		category: "desktop",
		techStack: ["PowerShell", "NTFS Junction", "WPF/WinForms"],
		status: "in-progress",
		sourceCode: "https://github.com/leke2000/gameshelf",
		startDate: "2026-09-20",
		featured: false,
		tags: ["PowerShell", "工具", "NTFS", "游戏"],
	},
	{
		id: "game-launcher",
		title: "游戏启动管理器 game-launcher",
		description:
			"一键扫描、管理并启动电脑里所有游戏的桌面工具。Python + tkinter 实现，零第三方依赖，Windows 即开即用。",
		image: "",
		category: "desktop",
		techStack: ["Python", "tkinter"],
		status: "completed",
		sourceCode: "https://github.com/leke2000/game-launcher",
		startDate: "2026-09-07",
		featured: false,
		tags: ["Python", "工具", "游戏"],
	},
	{
		id: "duo-games",
		title: "手机双人游戏机 13 合 1 duo-games",
		description:
			"单文件 HTML 的游戏合集：13 合 1 双人对战游戏机 + 毁灭战士 1993 致敬版 FPS + 泰拉像素沙盒。零依赖零联网，GitHub Pages 即开即玩。包含自研光线投射 FPS 引擎（3 关卡 / 4 武器）、程序化贴图与 BGM、键鼠 + 触屏双输入。",
		image: "",
		category: "web",
		techStack: ["JavaScript", "HTML5 Canvas", "光线投射引擎"],
		status: "completed",
		sourceCode: "https://github.com/leke2000/duo-games",
		startDate: "2026-09-15",
		featured: false,
		tags: ["游戏", "前端硬核", "单文件 HTML"],
	},
	{
		id: "nicomeow-rent-dash",
		title: "尼古喵喵：房租大作战",
		description:
			"ヤニねこ 同人跑酷小游戏，单文件 HTML 实现，包含程序化生成的美术与音乐。已部署到 GitHub Pages，打开即玩。",
		image: "",
		category: "web",
		techStack: ["JavaScript", "HTML5 Canvas", "程序化生成"],
		status: "completed",
		liveDemo: "https://leke2000.github.io/nicomeow-rent-dash/",
		visitUrl: "https://leke2000.github.io/nicomeow-rent-dash/",
		sourceCode: "https://github.com/leke2000/nicomeow-rent-dash",
		startDate: "2026-09-10",
		featured: false,
		tags: ["游戏", "同人", "单文件 HTML"],
	},
	{
		id: "miku-club",
		title: "初音社 · Vocaloid 创作社区",
		description:
			"纯原生 HTML / CSS / JavaScript 实现的 Vocaloid 创作社区演示站：作品广场、分类浏览、点赞收藏与评论交互，无需任何框架，已部署在 Cloudflare Pages 全球 CDN 上。附 Supabase（Postgres + Auth + Storage）后端接入方案与完整部署文档。",
		image: "",
		category: "web",
		techStack: ["原生 JavaScript", "HTML5", "CSS3", "Cloudflare Pages", "Supabase"],
		status: "completed",
		liveDemo: "https://miku-club.pages.dev/",
		visitUrl: "https://miku-club.pages.dev/",
		sourceCode: "https://github.com/leke2000/miku-club",
		startDate: "2026-09-15",
		featured: false,
		tags: ["前端", "Cloudflare", "Vocaloid", "社区"],
	},
	{
		id: "blog",
		title: "实施工程师排障手记",
		description:
			"从实施工程师转向 Java 开发的学习笔记博客。每一篇都来自真实环境的实操：亲手跑过的命令、真实截图、可复现的步骤。内容含 Arthas 火焰图实战、Arthas IDEA 插件教程、tcpdump + Wireshark 抓包分析、排障方法论、EMR 同步内训手册、住院回写时序图合集。",
		image: "",
		category: "web",
		techStack: ["Jekyll", "Markdown", "Mermaid", "GitHub Pages"],
		status: "in-progress",
		liveDemo: "https://leke2000.github.io/blog/",
		visitUrl: "https://leke2000.github.io/blog/",
		sourceCode: "https://github.com/leke2000/blog",
		startDate: "2026-09-16",
		featured: true,
		tags: ["博客", "排障", "Arthas", "Wireshark"],
	},
	{
		id: "mizuki-blog",
		title: "我的个人博客（本站）",
		description:
			"基于 Astro 搭建的个人博客「我若心安好」，用于记录技术笔记与生活。全站静态化，通过 Vercel 自动部署，任何人都可以公开访问，源码开放在 GitHub。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Svelte", "Tailwind CSS", "Vercel"],
		status: "completed",
		sourceCode: "https://github.com/leke2000/Mizuki-test",
		visitUrl: "https://mizuki-test.vercel.app/",
		liveDemo: "https://mizuki-test.vercel.app/",
		startDate: "2026-09-20",
		featured: true,
		tags: ["博客", "Astro", "开源"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
