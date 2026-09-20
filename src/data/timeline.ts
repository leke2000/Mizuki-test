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
		id: "dashboard-dev",
		title: "数据可视化大屏开发",
		description:
			"负责项目的数据可视化大屏前端开发，基于 Vue 3 + TypeScript + Vite 技术栈，使用 ECharts、DataV 实现业务数据的可视化呈现；同时基于 Java 17 + Spring Boot 开发维护 ejet-screen-management 后端接口服务，为大屏提供数据支撑。",
		type: "work",
		startDate: "2025-01-01",
		position: "大屏前端 / Java 后端开发",
		skills: [
			"Vue 3",
			"TypeScript",
			"Vite",
			"ECharts",
			"DataV",
			"Java 17",
			"Spring Boot",
		],
		achievements: [
			"负责大屏前端的开发与持续维护",
			"设计并实现大屏所需的后端数据接口",
			"保障大屏数据的稳定获取与展示",
		],
		icon: "material-symbols:monitoring",
		color: "#3B82F6",
		featured: true,
	},
	{
		id: "personal-blog",
		title: "个人博客上线",
		description:
			"基于 Astro Mizuki 主题搭建个人博客「我若心安好」，用于记录技术笔记与生活。全站静态化，通过 Vercel 自动部署，任何人都可以公开访问，源码开放在 GitHub。",
		type: "project",
		startDate: "2026-02-26",
		skills: ["Astro", "TypeScript", "Svelte", "Tailwind CSS", "Vercel"],
		achievements: [
			"完成博客个性化定制与内容建设",
			"配置 Vercel 自动部署与自定义域名",
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

// 提示：可以按照上面的格式继续添加教育、工作、项目或成就时间线条目

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
