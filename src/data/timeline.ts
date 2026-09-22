// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "bachelor-degree",
		title: "本科 · 计算机科学与技术（软件开发方向）",
		description:
			"系统学习计算机基础与软件开发。毕业设计为《基于 SpringBoot 和 Vue 的校园招聘管理系统设计与实现》，独立完成从需求分析、数据库设计、前后端编码到论文撰写的完整流程，也是 SpringBoot + Vue 全栈技术路线的起点。",
		type: "education",
		startDate: "2022-09-01",
		endDate: "2026-06-30",
		position: "本科生",
		skills: ["Java", "Spring Boot", "Vue", "MySQL", "毕业设计"],
		achievements: [
			"完成毕业设计《基于 SpringBoot 和 Vue 的校园招聘管理系统设计与实现》",
			"掌握前后端分离架构的完整开发流程",
		],
		icon: "material-symbols:school",
		color: "#0EA5E9",
		featured: true,
	},
	{
		id: "hospital-implementation",
		title: "医院信息化一线实施",
		description:
			"在医院机房从事 EMR / HIS 系统的实施与交付，覆盖多医院、多平台（C/S 架构 + Web）、多数据库环境。从这一段经历里练出了对生产环境的敏感度——后来写代码时，这种生产 sense 成了我最大的差异化优势。",
		type: "work",
		startDate: "2023-01-01",
		endDate: "2025-06-01",
		position: "医疗信息化实施工程师",
		skills: ["SQLServer", "Oracle", "MySQL", "PostgreSQL", "Tomcat", "Wireshark"],
		achievements: [
			"完成多医院 EMR 系统的部署与上线",
			"负责 SQLServer / Oracle / MySQL / PostgreSQL 多数据源 EMR 数据同步的实施、排障与验证",
			"用 Wireshark 抓包定位接口故障，积累 Windows / Linux 双平台机房值守经验",
		],
		icon: "material-symbols:local-hospital",
		color: "#0EA5E9",
		featured: true,
	},
	{
		id: "ejet-screen-management",
		title: "ejet-screen-management 医院 EMR 智慧同步套件开发",
		description:
			"从一线实施转向 Java 开发，参与私有工作项目 ejet-screen-management：Java 17 Maven 多模块后端（emr / system / infra）+ Vue 3 管理端 + ECharts 屏幕监控，基于多数据源架构，支撑多家医院上线。把实施阶段的排障经验沉淀成代码。",
		type: "work",
		startDate: "2025-06-01",
		position: "Java 后端开发",
		skills: ["Java", "Spring Boot", "MyBatis", "MySQL", "SQLServer", "Oracle"],
		achievements: [
			"开发并维护医院 EMR 智慧同步套件",
			"把多年实施经验抽象成可复用的数据同步代码",
			"支撑多家医院上线运行",
		],
		icon: "logos:java",
		color: "#ED8B00",
		featured: true,
	},
	{
		id: "open-source-tools",
		title: "开源工具与全栈项目",
		description:
			"白天在医院排障，晚上把生产经验做成开源工具和全栈项目。围绕「把运维痛点工具化」的思路，陆续发布了 anime-mall 全栈商城、qq-capture 零侵入 QQ 聊天记录抓取器、archive-helper 解压归档助手，以及多个单文件 HTML 游戏作品。",
		type: "project",
		startDate: "2026-06-01",
		skills: ["Java", "Spring Boot", "Vue 3", "Python", "JavaScript"],
		achievements: [
			"anime-mall：SpringBoot + Vue3 全栈商城，附演示模式与 Docker 部署",
			"qq-capture：基于 UIA 的零侵入 QQ 记录抓取工具",
			"archive-helper：伪装压缩包自动识别 / 还原 / 解压 / 归档",
			"duo-games：单文件 HTML 游戏合集，含自研光线投射 FPS 引擎",
		],
		links: [
			{
				name: "GitHub 主页",
				url: "https://github.com/leke2000",
				type: "website",
			},
		],
		icon: "logos:github-icon",
		color: "#181717",
		featured: true,
	},
	{
		id: "troubleshooting-blog",
		title: "实施工程师排障手记上线",
		description:
			"把从实施工程师转向 Java 开发过程中的学习笔记整理成博客，每一篇都来自真实环境的实操：亲手跑过的命令、真实截图、可复现的步骤。内容含 Arthas 火焰图、tcpdump + Wireshark 抓包、EMR 同步手册、住院回写时序图等。",
		type: "project",
		startDate: "2026-09-16",
		skills: ["Jekyll", "Arthas", "Wireshark", "tcpdump", "Mermaid"],
		achievements: [
			"完成 Arthas 火焰图实战分析等多篇排障文章",
			"沉淀 EMR 同步内训周执行手册",
			"发布住院回写时序图合集",
		],
		links: [
			{
				name: "访问排障手记",
				url: "https://leke2000.github.io/blog/",
				type: "website",
			},
			{
				name: "GitHub 源码",
				url: "https://github.com/leke2000/blog",
				type: "project",
			},
		],
		icon: "material-symbols:edit-note",
		color: "#CC0000",
		featured: true,
	},
	{
		id: "personal-blog",
		title: "个人博客（本站）上线",
		description:
			"基于 Astro 搭建个人博客「我若心安好」，用于记录 Java 后端、医疗信息化、EMR 数据同步的实战笔记与生活。全站静态化，通过 Vercel 自动部署，任何人都可以公开访问，源码开放在 GitHub。",
		type: "project",
		startDate: "2026-09-20",
		skills: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
		achievements: [
			"完成博客个性化定制与内容建设",
			"配置 Vercel 自动部署与公开访问",
		],
		links: [
			{
				name: "访问博客",
				url: "https://mizuki-test.vercel.app/",
				type: "website",
			},
			{
				name: "GitHub 源码",
				url: "https://github.com/leke2000/Mizuki-test",
				type: "project",
			},
		],
		icon: "material-symbols:rocket-launch",
		color: "#7C3AED",
		featured: true,
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
