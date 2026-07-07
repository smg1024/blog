export const SITE = {
  name: "Dev with Min",
  author: "Min",
  url: "https://blog.ridewithmin.com",
  locale: "en_US",
  image: "/images/logo.png",
  imageAlt: "Dev with Min logo showing a bear face framed by code brackets.",
  description:
    "Homelab infrastructure, DevOps practice, AI-agent workflows, systems thinking, practical learning logs.",
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
    description: "Setup notes, quick lessons, tools, keyboards, debugging fragments.",
    examples: ["laptop setup", "keyboard notes", "tool trials", "debugging fragments"],
  },
  {
    key: "field-logs",
    title: "Field Logs",
    navLabel: "Logs",
    href: "/blog/logs",
    intensity: "Medium",
    description: "Experiments, migrations, incidents, deployments, learning records.",
    examples: ["homelab incidents", "deployment notes", "build journals", "learning records"],
  },
  {
    key: "deep-dives",
    title: "Deep Dives",
    navLabel: "Deep Dives",
    href: "/blog/deep-dives",
    intensity: "Heavy",
    description: "DevOps architecture, AI agents, systems thinking, computer science.",
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
    description: "Topics, tools, recurring ideas.",
  },
  {
    title: "Series",
    href: "/series",
    description: "Connected threads, study paths, long arcs.",
  },
  {
    title: "Archive",
    href: "/archive",
    description: "Dates, sections, intensity, tags.",
  },
] as const;

export const identitySections = [
  {
    title: "Projects",
    href: "/projects",
    visible: sectionVisibility.projects,
    description: "Systems, tools, experiments, outcomes.",
  },
  {
    title: "Profile",
    href: "/profile",
    visible: sectionVisibility.profile,
    description: "Interests, values, direction, focus.",
  },
  {
    title: "CV",
    href: "/cv",
    visible: sectionVisibility.cv,
    description: "Career, skills, roles, professional context.",
  },
  {
    title: "Timeline",
    href: "/timeline",
    visible: sectionVisibility.timeline,
    description: "Milestones, systems, shifts, learning history.",
  },
  {
    title: "Uses",
    href: "/uses",
    visible: sectionVisibility.uses,
    description: "Laptop, keyboards, editor, terminal, homelab.",
  },
] as const;

export const projectSeeds = [
  {
    title: "Homelab",
    status: "Living system",
    description: "NixOS services, deployment patterns, operational lessons.",
    tags: ["NixOS", "DevOps", "self-hosting"],
  },
  {
    title: "Dev with Min",
    status: "In progress",
    description: "Durable publishing system, static site, homelab artifact.",
    tags: ["Astro", "Nix", "blog"],
  },
  {
    title: "AI Agent Workflow",
    status: "Research log",
    description: "Agent prompts, code review, automation practice.",
    tags: ["AI", "developer workflow", "automation"],
  },
] as const;

export const timelineSeeds = [
  {
    period: "Now",
    title: "Building Dev with Min",
    description: "Developer history, blog posts, project trail.",
  },
  {
    period: "Homelab era",
    title: "Running infrastructure for myself",
    description: "NixOS, self-hosting, networking, deploys, maintenance.",
  },
  {
    period: "Ongoing",
    title: "From tools to principles",
    description: "Systems, tradeoffs, durable notes, philosophy.",
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
