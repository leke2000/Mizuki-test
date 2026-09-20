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
	// Frontend Skills
	{
		id: "vue",
		name: "Vue 3",
		description:
			"主力前端框架，熟悉 Composition API、组件化开发与自定义封装，用于数据可视化大屏项目的日常开发。",
		icon: "logos:vue",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["ejet-screen"],
		color: "#4FC08D",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"日常主力开发语言，熟悉类型系统、泛型与类型体操，用于提升大屏项目的代码健壮性与可维护性。",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 3 },
		projects: ["ejet-screen", "mizuki-blog"],
		color: "#3178C6",
	},
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"扎实的 JavaScript 基础，熟悉 ES6+ 语法、异步编程、原型链与模块化开发。",
		icon: "logos:javascript",
		category: "frontend",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: ["ejet-screen"],
		color: "#F7DF1E",
	},
	{
		id: "echarts",
		name: "ECharts",
		description:
			"熟练使用 ECharts 实现折线图、柱状图、地图、关系图等各类数据可视化图表，处理大屏高频数据刷新与交互。",
		icon: "simple-icons:apacheecharts",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["ejet-screen"],
		color: "#AA344D",
	},
	{
		id: "element-plus",
		name: "Element Plus",
		description:
			"基于 Element Plus 进行后台与大屏配套页面开发，熟悉主题定制与二次封装。",
		icon: "logos:element",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["ejet-screen"],
		color: "#409EFF",
	},
	{
		id: "vite",
		name: "Vite",
		description:
			"使用 Vite 作为大屏项目构建工具，熟悉插件机制、环境配置与构建优化。",
		icon: "logos:vitejs",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["ejet-screen"],
		color: "#646CFF",
	},
	{
		id: "pinia",
		name: "Pinia",
		description:
			"使用 Pinia 管理大屏全局状态，熟悉模块化 store 设计与状态持久化方案。",
		icon: "logos:pinia",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["ejet-screen"],
		color: "#FFD859",
	},
	{
		id: "vue-router",
		name: "Vue Router",
		description:
			"熟悉路由配置、导航守卫、动态路由与权限控制等 SPA 路由开发。",
		icon: "material-symbols:route",
		category: "frontend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["ejet-screen"],
		color: "#42B883",
	},
	{
		id: "datav",
		name: "DataV",
		description:
			"使用 DataV 大屏组件库快速搭建边框、装饰、轮播表等可视化元素，提升大屏视觉表现力。",
		icon: "material-symbols:monitoring",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["ejet-screen"],
		color: "#3FB6E0",
	},
	{
		id: "axios",
		name: "Axios",
		description:
			"封装 Axios 请求实例、拦截器与错误处理，统一大屏项目的数据请求与鉴权逻辑。",
		icon: "material-symbols:api",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["ejet-screen"],
		color: "#5A29E4",
	},
	{
		id: "html-css",
		name: "HTML5 / CSS3",
		description:
			"熟悉语义化 HTML、Flex/Grid 布局、CSS 动画与响应式适配，能够还原复杂的大屏设计稿。",
		icon: "logos:html-5",
		category: "frontend",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: ["ejet-screen"],
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
		description:
			"借助 Tailwind CSS 快速构建响应式页面，本博客即基于 Tailwind 进行样式开发。",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 7 },
		projects: ["mizuki-blog"],
		color: "#06B6D4",
	},

	// Backend Skills
	{
		id: "java",
		name: "Java 17",
		description:
			"使用 Java 17 进行后端接口服务开发，熟悉面向对象设计、集合框架、Stream API 与多线程基础。",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["ejet-screen-management"],
		color: "#ED8B00",
	},
	{
		id: "spring",
		name: "Spring Boot",
		description:
			"基于 Spring Boot 开发并维护 ejet-screen-management 接口服务，熟悉 RESTful 接口设计、依赖注入与常用 Starter 整合。",
		icon: "logos:spring-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["ejet-screen-management"],
		color: "#6DB33F",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"日常使用 Git 进行版本管理与团队协作，熟悉分支管理、冲突解决与 GitHub 工作流。",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 2, months: 6 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "前端日常主力编辑器，熟悉常用插件配置与开发效率定制。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#007ACC",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description: "Java 后端开发主力 IDE，熟悉调试、Maven/Gradle 项目管理与效率插件。",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["ejet-screen-management"],
		color: "#FE315D",
	},
	{
		id: "pnpm",
		name: "pnpm",
		description: "使用 pnpm 管理前端依赖与 Monorepo 工作区，熟悉脚本编排与锁版本管理。",
		icon: "simple-icons:pnpm",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#F69220",
	},
	{
		id: "linux",
		name: "Linux",
		description: "掌握常用 Linux 命令与基础运维，能够在服务器上部署、排查日志与维护服务运行。",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		color: "#FCC624",
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
