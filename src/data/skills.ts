// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Backend Skills
	{
		id: "java",
		name: "Java",
		description:
			"主力后端开发语言。从医院实施转岗自学，用于开发 EMR 数据同步服务、Spring Boot 全栈项目，并深入学习 JUC 并发与线程池源码。",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["anime-mall", "ejet-screen-management"],
		color: "#ED8B00",
	},
	{
		id: "spring-boot",
		name: "Spring Boot",
		description:
			"主力后端框架。用于 anime-mall 全栈项目与 ejet-screen-management 工作项目，熟悉自动配置原理、Starter 整合与 REST API 设计，正在自研 starter。",
		icon: "logos:spring-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["anime-mall", "ejet-screen-management"],
		color: "#6DB33F",
	},
	{
		id: "spring-mvc",
		name: "SpringMVC",
		description:
			"熟悉 SpringMVC 请求处理流程、拦截器、参数绑定与异常处理，用于构建 RESTful 接口。",
		icon: "logos:spring-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["anime-mall"],
		color: "#6DB33F",
	},
	{
		id: "mybatis",
		name: "MyBatis",
		description:
			"持久层框架，用于 anime-mall 与工作项目的数据访问层，熟悉 Mapper 代理、动态 SQL 与多数据源配置。",
		icon: "logos:mybatis",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["anime-mall", "ejet-screen-management"],
		color: "#FF6F00",
	},
	{
		id: "maven",
		name: "Maven",
		description: "熟悉 Maven 多模块项目结构、依赖管理与构建生命周期。",
		icon: "logos:apache-maven",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["anime-mall"],
		color: "#C71A36",
	},
	{
		id: "jwt",
		name: "JWT 鉴权",
		description:
			"在 anime-mall 中实现 JWT 拦截器 + 登录上下文，熟悉令牌签发、校验与无状态鉴权方案。",
		icon: "material-symbols:key",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["anime-mall"],
		color: "#000000",
	},

	// Frontend Skills
	{
		id: "vue",
		name: "Vue 3",
		description:
			"全栈项目的首选前端框架。在 anime-mall 中用 Vue 3 + Element Plus 构建商城前台与管理后台，熟悉 Composition API 与组件化开发。",
		icon: "logos:vue",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["anime-mall"],
		color: "#4FC08D",
	},
	{
		id: "element-plus",
		name: "Element Plus",
		description:
			"在 anime-mall 中基于 Element Plus 构建管理后台，熟悉表单、表格、对话框等组件与主题定制。",
		icon: "logos:element",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["anime-mall"],
		color: "#409EFF",
	},
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"扎实的前端基础，熟悉 ES6+ 语法、异步编程与 DOM 操作。擅长用原生 JS 写单文件 HTML 应用（duo-games 等游戏合集均零依赖实现）。",
		icon: "logos:javascript",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["duo-games", "mizuki-blog"],
		color: "#F7DF1E",
	},
	{
		id: "html5-canvas",
		name: "HTML5 Canvas",
		description:
			"自研光线投射 FPS 引擎与程序化贴图，在单文件 HTML 内实现 3 关卡 / 4 武器的毁灭战士致敬版，以及泰拉像素沙盒的程序化地形生成。",
		icon: "logos:html-5",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["duo-games"],
		color: "#E34F26",
	},
	{
		id: "astro",
		name: "Astro",
		description:
			"使用 Astro 搭建个人博客，熟悉内容集合、岛屿架构与静态站点生成，并通过 Vercel 自动部署。",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 7 },
		projects: ["mizuki-blog"],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description: "借助 Tailwind CSS 快速构建响应式页面，本博客即基于 Tailwind 开发。",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 7 },
		projects: ["mizuki-blog"],
		color: "#06B6D4",
	},
	{
		id: "jekyll",
		name: "Jekyll",
		description:
			"用 Jekyll + GitHub Pages 搭建实施工程师排障手记博客，熟悉 Markdown 内容组织与自定义样式。",
		icon: "simple-icons:jekyll",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["blog"],
		color: "#CC0000",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"主力关系型数据库，用于 anime-mall 与工作项目，熟悉 SQL 优化与多数据源配置。",
		icon: "logos:mysql",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["anime-mall", "ejet-screen-management"],
		color: "#4479A1",
	},
	{
		id: "sqlserver",
		name: "SQLServer",
		description:
			"医院 EMR / HIS 系统最常见的后端数据库，在一线实施中完成多医院、多平台的数据同步与排障。",
		icon: "logos:microsoft-sql-server",
		category: "database",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: ["ejet-screen-management"],
		color: "#CC2927",
	},
	{
		id: "oracle",
		name: "Oracle",
		description:
			"医院信息系统中广泛使用，熟悉 EMR 数据同步链路上的 Oracle 数据源实施与验证。",
		icon: "logos:oracle",
		category: "database",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["ejet-screen-management"],
		color: "#F80000",
	},
	{
		id: "postgresql",
		name: "PostgreSQL",
		description:
			"EMR 多数据源同步场景之一，熟悉其在医疗信息化项目中的部署与数据校验。",
		icon: "logos:postgresql",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["ejet-screen-management"],
		color: "#4169E1",
	},

	// Tools & Ops
	{
		id: "python",
		name: "Python",
		description:
			"用于造工程工具：qq-capture 基于 UIA 无障碍树抓取 QQ 聊天记录，archive-helper 自动化解压归档，game-launcher 管理本地游戏。熟悉 tkinter 桌面应用开发。",
		icon: "logos:python",
		category: "tools",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["qq-capture", "archive-helper", "game-launcher"],
		color: "#3776AB",
	},
	{
		id: "uia",
		name: "Windows UI Automation",
		description:
			"qq-capture 的核心技术。逆向 QQ NT 无障碍树结构，解决 Chromium 内核拒绝消息投递的滚动难题，实现零侵入、无封号风险的聊天记录抓取。",
		icon: "material-symbols:accessibility",
		category: "tools",
		level: "advanced",
		experience: { years: 1, months: 0 },
		projects: ["qq-capture"],
		color: "#0078D4",
	},
	{
		id: "wireshark",
		name: "Wireshark",
		description:
			"一线实施最常用的抓包工具，用于定位 EMR / HIS 接口故障。在排障手记博客中沉淀了真实抓包案例与 pcap 文件。",
		icon: "logos:wireshark",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: ["ejet-screen-management", "blog"],
		color: "#1679A7",
	},
	{
		id: "arthas",
		name: "Arthas",
		description:
			"Java 应用线上诊断利器。熟悉火焰图分析、trace/watch 实战，在排障手记中沉淀了 Arthas IDEA 插件教程。",
		icon: "logos:arthas",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["blog"],
		color: "#FF6B6B",
	},
	{
		id: "tcpdump",
		name: "tcpdump",
		description: "Linux 环境下的命令行抓包工具，配合 Wireshark 分析 EMR 同步链路故障。",
		icon: "material-symbols:terminal",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["blog"],
		color: "#663399",
	},
	{
		id: "tomcat",
		name: "Tomcat",
		description:
			"医院生产环境常用中间件，熟悉部署、调优与排障，具备 Windows / Linux 双平台机房值守经验。",
		icon: "logos:apache-tomcat",
		category: "tools",
		level: "intermediate",
		experience: { years: 3, months: 0 },
		projects: ["ejet-screen-management"],
		color: "#F8DC75",
	},
	{
		id: "docker",
		name: "Docker",
		description: "用于 anime-mall 等项目的一键部署，熟悉镜像构建与容器编排。",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["anime-mall"],
		color: "#2496ED",
	},
	{
		id: "git",
		name: "Git",
		description:
			"日常版本管理与团队协作工具，熟悉分支管理、冲突解决与 GitHub Actions 工作流。GitHub 累计 13 个公开仓库。",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 2, months: 6 },
		color: "#F05032",
	},
	{
		id: "github-actions",
		name: "GitHub Actions",
		description: "用于博客与项目的自动化部署（GitHub Pages / Vercel），熟悉 workflow 编排。",
		icon: "logos:github-actions",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#2088FF",
	},
	{
		id: "powershell",
		name: "PowerShell",
		description:
			"熟练编写 Windows 自动化脚本：gameshelf 用 NTFS junction 整合多盘游戏目录，日常也用于部署、批量处理与系统排障，兼容 Windows PowerShell 5.1 与 PowerShell 7。",
		icon: "material-symbols:terminal",
		category: "tools",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["gameshelf"],
		color: "#5391FE",
	},
	{
		id: "cloudflare-pages",
		name: "Cloudflare Pages",
		description:
			"用 Wrangler CLI 将原生前端项目部署到 Cloudflare Pages 全球 CDN（初音社等），熟悉自定义域名与 Web Analytics 配置。",
		icon: "simple-icons:cloudflarepages",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["miku-club"],
		color: "#F38020",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate")
			.length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
