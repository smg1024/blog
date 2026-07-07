export const SITE = {
  name: "Dev with Min",
  author: "Min",
  url: "https://blog.ridewithmin.com",
  locale: "en_US",
  image: "/images/logo.png",
  imageAlt: "Dev with Min logo showing a bear face framed by code brackets.",
  description:
    "A personal developer journal about homelab infrastructure, DevOps, AI agent workflows, computer science ideas, and the lived process of learning technology through blog posts.",
} as const;

// Disabled section pages are also prefixed with "_" in src/pages so Astro does not publish them.
export const sectionVisibility = {
  blog: true,
  projects: false,
  timeline: false,
  profile: false,
  cv: false,
  uses: false,
} as const;

export const mainNav = [
  { label: "Blog", href: "/blog", visible: sectionVisibility.blog },
  { label: "Projects", href: "/projects", visible: sectionVisibility.projects },
  { label: "Timeline", href: "/timeline", visible: sectionVisibility.timeline },
  { label: "Profile", href: "/profile", visible: sectionVisibility.profile },
  { label: "CV", href: "/cv", visible: sectionVisibility.cv },
  { label: "Uses", href: "/uses", visible: sectionVisibility.uses },
] as const;

export const blogSections = [
  {
    key: "light-notes",
    title: "Light Notes",
    navLabel: "Notes",
    href: "/blog/notes",
    intensity: "Light",
    description:
      "Shorter observations, setup details, quick lessons, tools, keyboards, and low-pressure notes that are still worth keeping.",
    examples: ["laptop setup", "keyboards", "tools I tried", "small debugging notes"],
  },
  {
    key: "field-logs",
    title: "Field Logs",
    navLabel: "Logs",
    href: "/blog/logs",
    intensity: "Medium",
    description:
      "Experience-based records from experiments, migrations, incidents, deployments, and learning sessions.",
    examples: ["homelab incidents", "deployment notes", "build journals", "learning records"],
  },
  {
    key: "deep-dives",
    title: "Deep Dives",
    navLabel: "Deep Dives",
    href: "/blog/deep-dives",
    intensity: "Heavy",
    description:
      "Long-form technical and philosophical essays about DevOps, AI agents, systems, and computer science ideas.",
    examples: [
      "DevOps architecture",
      "AI agent utilization",
      "CS philosophy",
      "hard-earned lessons",
    ],
  },
] as const;

export const blogUtilities = [
  {
    title: "Tags",
    href: "/tags",
    description: "Browse posts by recurring tools, topics, and ideas.",
  },
  {
    title: "Series",
    href: "/series",
    description: "Long-running connected topics and study paths.",
  },
  {
    title: "Archive",
    href: "/archive",
    description: "A complete index by date, type, intensity, and tag.",
  },
] as const;

export const identitySections = [
  {
    title: "Projects",
    href: "/projects",
    visible: sectionVisibility.projects,
    description: "Portfolio-style records of systems, tools, and experiments I have built.",
  },
  {
    title: "Profile",
    href: "/profile",
    visible: sectionVisibility.profile,
    description: "Developer profile, interests, values, and current direction.",
  },
  {
    title: "CV",
    href: "/cv",
    visible: sectionVisibility.cv,
    description: "A more formal career and skills page for professional context.",
  },
  {
    title: "Timeline",
    href: "/timeline",
    visible: sectionVisibility.timeline,
    description: "A chronological history of my developer experience.",
  },
  {
    title: "Uses",
    href: "/uses",
    visible: sectionVisibility.uses,
    description: "Laptop, keyboards, editor, terminal, homelab, and daily tools.",
  },
] as const;

export const currentFocus = [
  "Homelab on NixOS",
  "Astro content workflow",
  "DevOps from practical experience",
  "AI agent utilization",
] as const;

export const projectSeeds = [
  {
    title: "Homelab",
    status: "Living system",
    description:
      "NixOS server infrastructure, services, deployment patterns, and the operational lessons behind them.",
    tags: ["NixOS", "DevOps", "self-hosting"],
  },
  {
    title: "Dev with Min",
    status: "In progress",
    description:
      "This blog as a durable publishing system, static site, and deployable artifact for my homelab.",
    tags: ["Astro", "Nix", "blog"],
  },
  {
    title: "AI Agent Workflow",
    status: "Research log",
    description:
      "Experiments in using coding agents, prompts, reviews, and automation in everyday development.",
    tags: ["AI", "developer workflow", "automation"],
  },
] as const;

export const timelineSeeds = [
  {
    period: "Now",
    title: "Building Dev with Min",
    description:
      "Creating the home base for my developer history, blog posts, projects, and notes.",
  },
  {
    period: "Homelab era",
    title: "Running infrastructure for myself",
    description:
      "Learning operations through NixOS, self-hosted services, networking, deployments, and maintenance.",
  },
  {
    period: "Ongoing",
    title: "From tools to principles",
    description:
      "Turning daily development experience into durable notes about systems, tradeoffs, and philosophy.",
  },
] as const;

export const usesCategories = [
  {
    title: "Workstation",
    items: ["Laptop setup", "Keyboard rotation", "Desk and input devices"],
  },
  {
    title: "Development",
    items: ["Editor", "Terminal", "Shell", "Git workflow"],
  },
  {
    title: "Infrastructure",
    items: ["Homelab hardware", "NixOS", "Networking", "Deployment flow"],
  },
] as const;
