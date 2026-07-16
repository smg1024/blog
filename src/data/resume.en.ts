import type { ResumeContent } from "./resume.types";

export const resumeEn: ResumeContent = {
  locale: "en",
  header: {
    eyebrow: "Résumé",
    name: "Sangmin Kim",
    summary:
      "I want the softwares and services I build to be widely used. I have modernized legacy business systems by moving them to web platforms and managed Linux/NixOS infrastructure through declarative configuration. My platform engineering work focuses on automation and monitoring.",
    motto: '"Make decisions based on solid evidence, without regret."',
  },
  sections: {
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    activities: "Awards & Activities",
    languagesAndCertificates: "Languages & Certifications",
    languages: "Languages",
    certificates: "Certifications",
  },
  labels: {
    skillsSuffix: "skills",
    githubRepository: "GitHub repository",
  },
  skills: [
    { category: "Cloud / Infra / Ops", items: ["Linux", "GitHub Actions", "Docker", "NixOS"] },
    { category: "Backend", items: ["Java", "Spring Boot"] },
    { category: "Database", items: ["PostgreSQL", "Oracle"] },
    { category: "Frontend", items: ["TypeScript", "React"] },
  ],
  experiences: [
    {
      period: "Apr 2025 - Present",
      role: "Data Engineer / AX Engineer",
      org: "KMEAT",
      points: [
        "ERP modernization · Traceability platform development · Data modeling · Full-stack development",
        "Designed and implemented data pipelines to support the digital transformation of livestock wholesale distribution",
      ],
    },
    {
      period: "Jul 2024 - Dec 2024",
      role: "Development Team Lead",
      org: "Unpeil",
      points: [
        "Led development and maintenance of SPETTRUM, including the rollout of new features",
        "Built a Stable Diffusion demo and test environment and managed the GPU servers",
        "Managed HR for the development team",
      ],
    },
    {
      period: "Jun 2023 - Jun 2024",
      role: "Backend Developer",
      org: "Unpeil",
      points: [
        "Implemented SPETTRUM's initial backend features",
        "Built an asynchronous AI image generation pipeline using a serverless API endpoint",
        "Developed account, order, and image/model generation features",
      ],
    },
    {
      period: "Apr 2018 - Jan 2020",
      role: "Military Interpreter",
      org: "Republic of Korea Navy",
      points: [
        "Served as an interpreter during the 2018 ROK Navy Cruise Training deployment across 13 countries",
        "Served as an interpreter with the 29th Escort Task Group in 2019",
      ],
    },
  ],
  projects: [
    {
      name: "Homelab",
      period: "May 2026 - Present",
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
      tagline: "Personal infrastructure platform built and operated on NixOS",
      github: "https://github.com/smg1024/homelab",
      points: [
        "Used a single Nix Flake to declaratively manage OS configuration, services, user environments, and encrypted secrets across three hosts",
        "Built a CD pipeline with GitHub Actions, Tailscale, and SSH that runs nixos-rebuild switch on each node after a merge",
        "Separated public traffic from internal backend traffic with an ingress architecture built on Cloudflare Tunnel, Caddy, and Tailscale",
        "Set up monitoring and status checks with Beszel, VictoriaLogs, and Uptime Kuma",
      ],
    },
    {
      name: "jamye-plz",
      period: "Jun 2026 - Present",
      stack: ["Python", "FastAPI", "Alembic", "Uvicorn", "Svelte", "Bun", "PWA"],
      tagline: "Web app for sharing topic-based stories within private groups",
      github: "https://github.com/jamye-plz/jamye-plz",
      points: [
        "Packaged FastAPI backend and SvelteKit PWA frontend with a Nix Flake",
        "Wrote a NixOS flake module that declares and deploys PostgreSQL, Alembic migrations, the Uvicorn backend, and the Caddy reverse proxy as systemd services",
        "Deployed the app to Homelab's aarch cloud node and routed public traffic through Cloudflare Tunnel and Caddy on a separate edge node",
      ],
    },
    {
      name: "SPETTRUM",
      period: "Jun 2023 - Dec 2024",
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
        "Online AI studio that generates images of a user's pet and train custom lightweight models from photos and text prompt",
      points: [
        "Built a Stable Diffusion pipeline for generating LoRA models and AI images of users' pets",
        "Designed an asynchronous request flow for image generation and integrated it with the Spring Boot backend",
        "Dockerized the GPU serverless API and reduced costs compared with running an on-premises GPU server",
        "Implemented CI/CD and zero-downtime blue-green deployments with GitHub Actions, Docker Compose, and Nginx",
      ],
    },
  ],
  education: [
    {
      period: "Mar 2017 - Feb 2025",
      institution: "Chung-Ang University",
      points: ["Bachelor's degree in Electrical and Electronics Engineering"],
    },
  ],
  activities: [
    {
      period: "Jun 2024 - Jan 2025",
      title: "Participated in CES 2025 Eureka Park",
      detail:
        "Pawframe: a fine-tuning model and coding system that uses computer vision to digitize individual pets",
      link: { label: "Overview", href: "https://unpeil.github.io/" },
    },
    {
      period: "Mar 2024 - Nov 2024",
      title: "Encouragement Award, Promising Student Startup 300+ Growth Track",
      detail: "AI art therapy program for pet loss",
    },
    {
      period: "Nov 28, 2023",
      title: "Minister of Science and ICT Award, X-corps+ Festival",
      detail:
        "Researched a business model that uses blockchain to manage and distribute BMS data and extend IoT integration",
      link: {
        label: "Article",
        href: "http://isrc.cau.ac.kr/2023-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%AF%B8%EB%9E%98%EC%9D%B8%EC%9E%AC-%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-2023-x-corps-plus-festival/",
      },
    },
    {
      period: "Mar 2023 - Nov 2023",
      title: "Popularity Award, Promising Student Startup 300+ Preliminary Track",
      detail: "SPETTRUM, an online AI pet studio",
    },
    {
      period: "Oct 2022 - Feb 2023",
      title: "Completed the Multicampus Backend Developer Bootcamp",
      detail: "KDT course in Java and Spring backend development",
    },
    {
      period: "Aug 13, 2021",
      title:
        "Excellence Award, Chung-Ang University - Doosan Infracore Capstone Design Competition",
      detail: "Map kiosk for Chung-Ang University's 100th Anniversary Hall",
    },
  ],
  languages: [
    { name: "Korean", level: "Native" },
    { name: "English", level: "Native" },
    { name: "Chinese", level: "Proficient" },
  ],
  certificates: [
    { name: "OPIc AL", date: "Jul 16, 2026" },
    { name: "HSK Level 6", date: "Jan 10, 2015" },
  ],
};
