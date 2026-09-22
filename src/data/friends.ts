// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	// ===== 我的站点 =====
	{
		id: 1,
		title: "GitHub · leke2000",
		imgurl: "https://github.com/leke2000.png",
		desc: "我的全部开源项目都在这里，欢迎 Star 和 Follow",
		siteurl: "https://github.com/leke2000",
		tags: ["我的站点", "GitHub"],
	},
	{
		id: 2,
		title: "实施工程师排障手记",
		imgurl: "https://github.com/leke2000.png",
		desc: "Arthas 火焰图、tcpdump/Wireshark 抓包、EMR 同步手册——来自真实生产环境的排障笔记",
		siteurl: "https://leke2000.github.io/blog/",
		tags: ["我的站点", "技术博客"],
	},
	{
		id: 3,
		title: "anime-mall 在线演示",
		imgurl: "https://github.com/leke2000.png",
		desc: "SpringBoot + Vue3 二次元资源商城演示站（演示账号 admin/admin123）",
		siteurl: "https://leke2000.github.io/anime-mall/",
		tags: ["我的站点", "全栈项目"],
	},
	{
		id: 4,
		title: "初音社 · Vocaloid 创作社区",
		imgurl: "https://github.com/leke2000.png",
		desc: "零框架原生 JS 实现的创作社区演示站，部署在 Cloudflare Pages",
		siteurl: "https://miku-club.pages.dev/",
		tags: ["我的站点", "前端项目"],
	},
	{
		id: 5,
		title: "尼古喵喵：房租大作战",
		imgurl: "https://github.com/leke2000.png",
		desc: "ヤニねこ 同人跑酷小游戏，单文件 HTML，打开即玩",
		siteurl: "https://leke2000.github.io/nicomeow-rent-dash/",
		tags: ["我的站点", "小游戏"],
	},
	// ===== 构建本站用到的工具与平台 =====
	{
		id: 10,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "本站使用的内容驱动型 Web 框架",
		siteurl: "https://astro.build",
		tags: ["框架", "Framework"],
	},
	{
		id: 11,
		title: "Vercel",
		imgurl: "https://avatars.githubusercontent.com/u/14985020?v=4&s=640",
		desc: "本站托管与自动部署平台，push main 即发布",
		siteurl: "https://vercel.com",
		tags: ["托管", "Hosting"],
	},
	{
		id: 12,
		title: "Cloudflare Pages",
		imgurl: "https://avatars.githubusercontent.com/u/314135?v=4&s=640",
		desc: "初音社等前端小项目的托管平台，全球 CDN",
		siteurl: "https://pages.cloudflare.com",
		tags: ["托管", "CDN"],
	},
	{
		id: 13,
		title: "Tailwind CSS",
		imgurl: "https://avatars.githubusercontent.com/u/67109815?v=4&s=640",
		desc: "本站使用的原子化 CSS 框架",
		siteurl: "https://tailwindcss.com",
		tags: ["CSS", "框架"],
	},
	{
		id: 14,
		title: "MDN Web Docs",
		imgurl: "https://avatars.githubusercontent.com/u/7565578?v=4&s=640",
		desc: "最权威的 Web 开发参考文档",
		siteurl: "https://developer.mozilla.org",
		tags: ["文档", "Docs"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
