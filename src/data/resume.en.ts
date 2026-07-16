import type { ResumeContent } from "./resume.types";

export const resumeEn: ResumeContent = {
  locale: "en",
  header: {
    eyebrow: "Résumé",
    name: "Sangmin Kim",
    summary:
      "I am Sangmin Kim, a developer who wants the programs and services I build to be widely used. I am an engineer who has built expertise in platform engineering centered on automation and monitoring by transforming legacy business systems into web-based platforms and operating Linux/NixOS infrastructure declaratively.",
    motto: "“Make regret-free decisions based on solid evidence.”",
  },
  sections: {
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    activities: "Academic Activities",
    languagesAndCertificates: "Languages & Certificates",
    languages: "Languages",
    certificates: "Certificates",
  },
  labels: {
    skillsSuffix: "skills",
    githubRepository: "GitHub repository",
  },
  skills: [
    { category: "Cloud / Infra / Ops", items: ["Linux", "NixOS", "GitHub Actions", "Docker"] },
    { category: "Backend", items: ["Java", "Spring Boot"] },
    { category: "Database", items: ["PostgreSQL", "Oracle"] },
    { category: "Frontend", items: ["TypeScript", "React"] },
  ],
  experiences: [
    {
      period: "2025.04 ~",
      role: "Data Engineer / AX Engineer",
      org: "케이미트",
      points: [
        "ERP Modernization · Traceability Platform · Data Modeling · Full-stack Development",
        "Livestock Wholesale Distribution DX and Data Pipeline Design and Implementation",
      ],
    },
    {
      period: "2024.07 - 2024.12",
      role: "Development Team Lead",
      org: "Unpeil",
      points: [
        "Led the SPETTRUM application - introduced new features and maintained the application",
        "Built a technology demo and test environment for Generative AI (Stable Diffusion) - managed GPU servers",
        "Managed development team HR",
      ],
    },
    {
      period: "2023.06 - 2024.06",
      role: "Backend Developer",
      org: "Unpeil",
      points: [
        "Developed the initial backend features for the SPETTRUM application",
        "Built an asynchronous AI image generation pipeline using a Serverless API Endpoint",
        "Responsible for member, order, and image/model generation features",
      ],
    },
    {
      period: "2018.04 - 2020.01",
      role: "Interpreter",
      org: "Republic of Korea Navy",
      points: [
        "Interpreter for the 2018 ROK Navy Cruise Training - 13-country overseas tour",
        "Interpreter for the 29th Cheonghae Unit in 2019",
      ],
    },
  ],
  projects: [
    {
      name: "Homelab",
      period: "2026.05 ~",
      stack: [
        "Nix",
        "NixOS",
        "Bash",
        "Caddy",
        "Tailscale",
        "Beszel",
        "VictoriaLogs",
        "Uptime Kuma",
      ],
      tagline: "Built and operated a personal infrastructure platform based on NixOS",
      github: "https://github.com/smg1024/homelab",
      points: [
        "Used Nix Flake as the single source of truth to declaratively manage OS configurations, services, user environments, and encrypted secrets across 3 hosts",
        "Built a CD pipeline using GitHub Actions, Tailscale, and SSH to run nixos-rebuild switch on each node after merge",
        "Designed an ingress architecture based on Cloudflare Tunnel, Caddy, and Tailscale, separating public traffic from internal backend traffic",
        "Operated a monitoring and status-checking system based on Beszel, VictoriaLogs, and Uptime Kuma",
      ],
    },
    {
      name: "jamye-plz",
      period: "2026.06 ~",
      stack: ["Python", "FastAPI", "Alembic", "Uvicorn", "Svelte", "Bun", "PWA"],
      tagline: "A topic-based storytelling web app for private groups",
      github: "https://github.com/jamye-plz/jamye-plz",
      points: [
        "Packaged a FastAPI backend and SvelteKit PWA frontend with Nix Flake",
        "Created a NixOS module to declaratively deploy PostgreSQL, Alembic migrations, the Uvicorn backend, and a Caddy reverse proxy as systemd services",
        "Deployed to Homelab's aarch cloud node and delegated public ingress to the Cloudflare Tunnel/Caddy setup on a separate edge node",
      ],
    },
    {
      name: "SPETTRUM",
      period: "2023.06 - 2024.12",
      stack: [
        "Spring Boot",
        "Java 17",
        "Python",
        "Runpod Serverless API",
        "Docker",
        "Nginx",
        "GitHub Actions",
      ],
      tagline:
        "An online AI pet studio app that generates prompt-based AI images in the likeness of a user's pet",
      points: [
        "Built a Stable Diffusion-based AI pet image generation pipeline",
        "Designed an asynchronous image generation request-processing architecture and integrated it with the Spring Boot backend",
        "Reduced costs compared with operating an on-premises GPU server by Dockerizing the GPU Serverless API",
        "Set up CI/CD and zero-downtime Blue/Green deployment with GitHub Actions, Docker Compose, and Nginx",
      ],
    },
  ],
  education: [
    {
      period: "2017.03 - 2025.02",
      institution: "Chung-Ang University",
      points: ["Bachelor's Degree in Electrical and Electronics Engineering"],
    },
  ],
  activities: [
    {
      period: "2024.06 - 2025.01",
      title: "Participated in CES 2025 Eureka Park",
      detail:
        "Pawframe, a fine-tuning model and coding system for digitizing individual pets using computer vision",
      link: { label: "Technology Overview", href: "https://unpeil.github.io/" },
    },
    {
      period: "2024.03 - 2024.11",
      title: "Encouragement Award, Promising Student Startup 300+ Growth Track",
      detail: "AI art therapy program for pet loss",
    },
    {
      period: "2023.11.28",
      title: "Minister of Science and ICT Award, X-corps+ Festival",
      detail:
        "Research on an IoT-linked business model expansion through the management and distribution of blockchain-based Battery Management System data",
      link: {
        label: "Campus Article",
        href: "http://isrc.cau.ac.kr/2023-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%AF%B8%EB%9E%98%EC%9D%B8%EC%9E%AC-%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-2023-x-corps-plus-festival/",
      },
    },
    {
      period: "2023.03 - 2023.11",
      title: "Popularity Award, Promising Student Startup 300+ Preliminary Track",
      detail: "SPETTRUM, an online AI pet studio",
    },
    {
      period: "2022.10 - 2023.02",
      title: "Completed the Multicampus Backend Developer Employment Camp",
      detail: "Completed the KDT Java Spring backend training course",
    },
    {
      period: "2021.08.13",
      title: "Excellence Award, Chung-Ang University–Doosan Infracore Capstone Design Competition",
      detail: "Map kiosk for Chung-Ang University's 100th Anniversary Hall",
    },
  ],
  languages: [
    { name: "Korean", level: "Native speaker" },
    { name: "English", level: "Native speaker" },
    { name: "Chinese", level: "Proficient speaker" },
  ],
  certificates: [
    { name: "OPIc AL", date: "Obtained 2026.07.16" },
    { name: "HSK Level 6", date: "Obtained 2015.01.10" },
  ],
};
