import type { ResumeContent } from "./resume.types";

export const resumeEn: ResumeContent = {
  locale: "en",
  header: {
    eyebrow: "Résumé",
    name: "Sangmin Kim",
    summary:
      "I analyze business workflows and turn them into web systems and data flows. At KMEAT, I clarify business rules across departments and handle system design, development, and feedback from adoption. I use AI and external APIs where they help build practical tools for the people doing the work.",
    motto: "Business systems development · Data integration · Applied AI",
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
    {
      category: "Backend",
      items: ["Primary: Java, Spring Boot, Python", "Project experience: Rust, Axum"],
    },
    {
      category: "Database / Data",
      items: ["PostgreSQL", "Oracle", "Data modeling", "API integration"],
    },
    {
      category: "Frontend / Mobile",
      items: ["Working experience: React, TypeScript", "Project experience: React Native, Expo"],
    },
    {
      category: "Infra / Ops",
      items: ["Linux", "NixOS", "Docker", "GitHub Actions"],
    },
  ],
  experiences: [
    {
      period: "Apr 2025 - Present",
      role: "Data Engineer / AX Engineer",
      org: "KMEAT",
      points: [
        "Handle seven concurrent initiatives spanning finance, purchasing, receivables, logistics, imports, field data, and internal training, from stakeholder interviews through system design, development, deployment, and adoption feedback.",
        "Work with business stakeholders and legacy ERP experts to clarify rules and exceptions, align scope, responsibilities, and schedules, and lead sprints.",
      ],
      initiatives: [
        {
          title: "Unstructured shipping requests and ERP inventory matching",
          status: "Pilot operation and improvement with the logistics team",
          points: [
            "Independently handled requirements discovery, design, development, deployment, and the pilot with the logistics team.",
            "Analyzed how logistics staff interpret unstructured Slack shipping requests from sales and find ERP inventory, then designed the flow from request interpretation to reviewing inventory candidates.",
            "Built a Slack app combining AI-based message classification with ERP candidate comparison to handle product and customer aliases that regular expressions and rules alone could not reliably cover.",
            "Designed automatic confirmation and staff review paths based on matching scores and candidate counts, and refined the workflow using pilot feedback from logistics.",
          ],
        },
        {
          title: "ERP-connected finance portal",
          status: "Built and in operation",
          points: [
            "Implemented portal queries and Excel exports for payment processing and monthly customer receivables reports previously downloaded from the ERP by the finance team.",
            "Replaced three per-row subqueries in the monthly customer receivables query with CTEs and joins, improving query performance while preserving the existing ERP calculation rules.",
            "Provided query tools used by employees and the finance team in their daily work, incorporating adoption feedback.",
          ],
        },
        {
          title: "Legacy ERP migration to the web",
          status:
            "Preparing the import screens for their first production release, planned for the week of Nov 9, 2026",
          points: [
            "Designed SKU/Lot-based inventory traceability and validated an MVP in the initial Backbone effort, but identified constraints that made changing the existing database structure impractical with the current staffing and environment.",
            "Established a phased approach: preserve the existing database while moving the PowerBuilder ERP to the web and defining each department’s actual business logic, then pursue larger database changes including SKU/Lot adoption.",
            "Proposed the web migration and obtained approval from my mentor and management. Aligned scope and designed and implemented the import screens using the legacy ERP expert’s screen and SQL analysis and the trade team’s business rules.",
          ],
        },
        {
          title: "Other work",
          points: [
            "Develop and improve receivables management and implement collection and queries for market, customs, inventory, and profit-and-loss data to support purchasing decisions.",
            "Develop field temperature data collection and a Slack-based job-training system while preparing field validation and pilot operation.",
          ],
        },
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
      name: "Unpeil / SPETTRUM",
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
        "A startup project I joined during university: an online studio app for AI-generated pet images",
      points: [
        "Backend Developer (Jun 2023–Jun 2024) → Development Team Lead (Jul 2024–Dec 2024)",
        "Built SPETTRUM’s initial backend and account, order, and image/model generation features, then led new feature development and maintenance.",
        "Built a Stable Diffusion pipeline for AI-generated pet images.",
        "Designed asynchronous image-generation request handling using a serverless API endpoint and integrated it with the Spring Boot backend.",
        "Dockerized the GPU serverless API to reduce costs compared with operating an on-premises GPU server.",
        "Implemented CI/CD and zero-downtime blue-green deployment with GitHub Actions, Docker Compose, and Nginx.",
        "Built demos and test environments for new generative AI technologies and managed GPU servers and development team staffing.",
      ],
    },
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
      stack: [
        "Rust",
        "Axum",
        "React Native",
        "Expo",
        "TypeScript",
        "PostgreSQL",
        "SQLite",
        "WebSocket",
      ],
      tagline: "A service for sharing topic-based stories within private groups",
      github: "https://github.com/jamye-plz/jamye-plz",
      points: [
        "Migrating the existing FastAPI/SvelteKit web PWA to a separate Rust/Axum backend and React Native/Expo mobile app.",
        "Implemented a SQLite-backed outgoing queue, WebSocket communication, and synchronization to recover missed events after mobile disconnections and restarts.",
        "Manage app/server integration against the server API contract, implementing and validating core features incrementally while preparing for app store release.",
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
      link: {
        label: "Overview",
        href: "https://unpeil.github.io/",
      },
    },
    {
      period: "Mar 2024 - Nov 8, 2024",
      title:
        "Encouragement Award, Promising Student Startup 300+ Growth Track (Korea Entrepreneurship Foundation)",
      detail: "AI art therapy program for pet loss",
      link: {
        label: "Team overview",
        href: "http://www.u300.kr/cms/process/team/view.asp?c_show_no=144&c_check_no=97&c_relation=996&c_relation2=1014&c_no=25401&s_field=team_name&s_text=%EC%96%B8%ED%8E%98%EC%9D%BC&page=1",
      },
    },
    {
      period: "Nov 28, 2023",
      title: "Grand Prize, X-corps+ Festival (Ministry of Science and ICT)",
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
      detail: "KDT course in Java and Spring backend development (784 hours)",
    },
    {
      period: "Aug 13, 2021",
      title:
        "Excellence Award, Chung-Ang University - Doosan Infracore Capstone Design Competition",
      detail: "Map kiosk for Chung-Ang University's 100th Anniversary Hall",
    },
  ],
  languages: [
    {
      name: "Korean",
      level: "Native",
    },
    {
      name: "English",
      level: "Native",
    },
    {
      name: "Chinese",
      level: "Proficient",
    },
  ],
  certificates: [
    {
      name: "OPIc AL",
      date: "Jul 11, 2026",
    },
    {
      name: "HSK Level 6",
      date: "Jan 10, 2015",
    },
  ],
};
