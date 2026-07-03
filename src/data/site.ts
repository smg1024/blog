export const SITE = {
	name: 'Dev with Min',
	author: 'Min',
	url: 'https://blog.ridewithmin.com',
	description:
		'A personal developer journal about homelab infrastructure, DevOps, AI agent workflows, computer science ideas, projects, setup, and the lived process of learning technology.',
} as const;

export const mainNav = [
	{ label: 'Writing', href: '/writing' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Timeline', href: '/timeline' },
	{ label: 'Profile', href: '/profile' },
	{ label: 'CV', href: '/cv' },
	{ label: 'Uses', href: '/uses' },
] as const;

export const writingSections = [
	{
		key: 'light-notes',
		title: 'Light Notes',
		navLabel: 'Notes',
		href: '/notes',
		intensity: 'Light',
		description:
			'Shorter observations, setup details, quick lessons, tools, keyboards, and low-pressure notes that are still worth keeping.',
		examples: ['laptop setup', 'keyboards', 'tools I tried', 'small debugging notes'],
	},
	{
		key: 'field-logs',
		title: 'Field Logs',
		navLabel: 'Logs',
		href: '/logs',
		intensity: 'Medium',
		description:
			'Experience-based records from experiments, migrations, incidents, deployments, and learning sessions.',
		examples: ['homelab incidents', 'deployment notes', 'build journals', 'learning records'],
	},
	{
		key: 'deep-dives',
		title: 'Deep Dives',
		navLabel: 'Deep Dives',
		href: '/deep-dives',
		intensity: 'Heavy',
		description:
			'Long-form technical and philosophical writing about DevOps, AI agents, systems, and computer science ideas.',
		examples: ['DevOps architecture', 'AI agent utilization', 'CS philosophy', 'hard-earned lessons'],
	},
] as const;

export const writingUtilities = [
	{ title: 'Series', href: '/series', description: 'Long-running connected topics and study paths.' },
	{ title: 'Archive', href: '/archive', description: 'A complete index by date, type, intensity, and tag.' },
] as const;

export const identitySections = [
	{
		title: 'Projects',
		href: '/projects',
		description: 'Portfolio-style records of systems, tools, and experiments I have built.',
	},
	{
		title: 'Profile',
		href: '/profile',
		description: 'Developer profile, interests, values, and current direction.',
	},
	{
		title: 'CV',
		href: '/cv',
		description: 'A more formal career and skills page for professional context.',
	},
	{
		title: 'Timeline',
		href: '/timeline',
		description: 'A chronological history of my developer experience.',
	},
	{
		title: 'Uses',
		href: '/uses',
		description: 'Laptop, keyboards, editor, terminal, homelab, and daily tools.',
	},
] as const;

export const currentFocus = [
	'Homelab on NixOS',
	'Astro content workflow',
	'DevOps from practical experience',
	'AI agent utilization',
] as const;

export const projectSeeds = [
	{
		title: 'Homelab',
		status: 'Living system',
		description:
			'NixOS server infrastructure, services, deployment patterns, and the operational lessons behind them.',
		tags: ['NixOS', 'DevOps', 'self-hosting'],
	},
	{
		title: 'Dev with Min',
		status: 'In progress',
		description:
			'This blog as a durable writing system, static site, and deployable artifact for my homelab.',
		tags: ['Astro', 'Nix', 'writing'],
	},
	{
		title: 'AI Agent Workflow',
		status: 'Research log',
		description:
			'Experiments in using coding agents, prompts, reviews, and automation in everyday development.',
		tags: ['AI', 'developer workflow', 'automation'],
	},
] as const;

export const timelineSeeds = [
	{
		period: 'Now',
		title: 'Building Dev with Min',
		description: 'Creating the home base for my developer history, writing, projects, and notes.',
	},
	{
		period: 'Homelab era',
		title: 'Running infrastructure for myself',
		description:
			'Learning operations through NixOS, self-hosted services, networking, deployments, and maintenance.',
	},
	{
		period: 'Ongoing',
		title: 'From tools to principles',
		description:
			'Turning daily development experience into durable notes about systems, tradeoffs, and philosophy.',
	},
] as const;

export const usesCategories = [
	{
		title: 'Workstation',
		items: ['Laptop setup', 'Keyboard rotation', 'Desk and input devices'],
	},
	{
		title: 'Development',
		items: ['Editor', 'Terminal', 'Shell', 'Git workflow'],
	},
	{
		title: 'Infrastructure',
		items: ['Homelab hardware', 'NixOS', 'Networking', 'Deployment flow'],
	},
] as const;
