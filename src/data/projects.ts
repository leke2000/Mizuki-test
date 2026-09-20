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
		id: "ejet-screen",
		title: "ejet 数据可视化大屏",
		description:
			"企业级数据可视化大屏的前端开发与维护。基于 Vue 3 + TypeScript + Vite 构建，使用 ECharts、DataV 实现多类图表与动效，Pinia 管理全局状态，Axios 封装数据请求，适配多种分辨率的大屏展示场景。",
		image: "",
		category: "web",
		techStack: [
			"Vue 3",
			"TypeScript",
			"Vite",
			"Pinia",
			"Vue Router",
			"Element Plus",
			"ECharts",
			"DataV",
			"Axios",
		],
		status: "in-progress",
		startDate: "2025-01-01",
		featured: true,
		tags: ["数据可视化", "大屏", "前端"],
	},
	{
		id: "ejet-screen-management",
		title: "ejet-screen-management 接口服务",
		description:
			"为数据可视化大屏提供数据支撑的后端接口服务，基于 Java 17 + Spring Boot 开发。负责接口设计与实现、数据聚合、服务维护，保障大屏数据的稳定获取与实时展示。",
		image: "",
		category: "other",
		techStack: ["Java 17", "Spring Boot", "RESTful API"],
		status: "in-progress",
		startDate: "2025-01-01",
		featured: true,
		tags: ["后端", "Java", "接口服务"],
	},
	{
		id: "mizuki-blog",
		title: "我的个人博客",
		description:
			"基于 Astro 搭建的个人博客，支持深色模式、全文搜索、文章目录、响应式布局与多语言。用于记录技术笔记与生活，源码开放，通过 Vercel 自动部署，任何人都可以访问。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Svelte", "Tailwind CSS", "Vercel"],
		status: "completed",
		sourceCode: "https://github.com/leke2000/Mizuki-test",
		visitUrl: "https://mizuki-test.vercel.app/",
		liveDemo: "https://mizuki-test.vercel.app/",
		startDate: "2026-02-26",
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
