import type { ResumeContent } from "./resume.types";

export const resumeKo: ResumeContent = {
  locale: "ko",
  header: {
    eyebrow: "이력서",
    name: "김상민",
    summary:
      "내가 만든 프로그램/서비스가 사람들에게 널리 사용되길 바라는 개발자 김상민입니다. 레거시 업무 시스템을 웹 플랫폼으로 전환하고 Linux/NixOS 인프라를 선언적으로 운영해 왔습니다. 엔지니어로 일하며 Platform Engineering 역량을 쌓았고 자동화와 모니터링에 집중했습니다.",
    motto: "“확실한 근거를 바탕으로 후회없는 결정을 내리자”",
  },
  sections: {
    skills: "기술",
    experience: "경력",
    projects: "프로젝트",
    education: "학력",
    activities: "학술 활동",
    languagesAndCertificates: "언어 및 자격증",
    languages: "언어",
    certificates: "자격증",
  },
  labels: {
    skillsSuffix: "기술 목록",
    githubRepository: "GitHub 저장소",
  },
  skills: [
    { category: "Cloud / Infra / Ops", items: ["Linux", "GitHub Actions", "Docker", "NixOS"] },
    { category: "Backend", items: ["Java", "Spring Boot"] },
    { category: "Database", items: ["PostgreSQL", "Oracle"] },
    { category: "Frontend", items: ["TypeScript", "React"] },
  ],
  experiences: [
    {
      period: "2025.04 ~",
      role: "데이터 엔지니어 / AX 엔지니어",
      org: "케이미트",
      points: [
        "ERP 현대화 · 이력 추적 플랫폼 · 데이터 모델링 · 풀스택 개발",
        "축산도매유통 DX 및 데이터 파이프라인 설계 및 구현",
      ],
    },
    {
      period: "2024.07 - 2024.12",
      role: "개발팀 총괄",
      org: "Unpeil",
      points: [
        "SPETTRUM 어플리케이션 총괄 - 신규 기능 도입 및 유지보수",
        "생성형 AI (Stable Diffusion) 신기술 데모 및 테스트 환경 구축 - GPU 서버 관리",
        "개발팀 인사 관리",
      ],
    },
    {
      period: "2023.06 - 2024.06",
      role: "백엔드 개발",
      org: "Unpeil",
      points: [
        "SPETTRUM 어플리케이션 백엔드 개발 - 초기 기능 구현",
        "Serverless API Endpoint를 활용해 비동기 AI 이미지 생성 파이프라인 구축",
        "회원, 주문, 이미지/모델 생성 기능 담당",
      ],
    },
    {
      period: "2018.04 - 2020.01",
      role: "통역병",
      org: "대한민국 해군",
      points: ["2018년 해군 순항훈련 통역병 - 13개국 해외순방", "2019년 청해부대 29진 통역병"],
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
      tagline: "NixOS로 구축·운영하는 개인 인프라 플랫폼",
      github: "https://github.com/smg1024/homelab",
      points: [
        "Nix Flake를 single source of truth로 삼아 3개 호스트의 OS 설정, 서비스, 사용자 환경, 암호화된 secrets를 선언적으로 관리",
        "GitHub Actions, Tailscale, SSH로 merge 이후 각 노드에서 nixos-rebuild switch를 실행하는 CD 파이프라인 구성",
        "Cloudflare Tunnel, Caddy, Tailscale로 ingress 구조를 설계하고 외부 트래픽과 내부 백엔드 트래픽을 분리",
        "Beszel, VictoriaLogs, Uptime Kuma로 모니터링 및 상태 확인 체계 운영",
      ],
    },
    {
      name: "jamye-plz",
      period: "2026.06 ~",
      stack: ["Python", "FastAPI", "Alembic", "Uvicorn", "Svelte", "Bun", "PWA"],
      tagline: "폐쇄형 그룹에서 토픽별로 썰을 푸는 웹앱",
      github: "https://github.com/jamye-plz/jamye-plz",
      points: [
        "FastAPI 백엔드와 SvelteKit PWA 프런트엔드를 Nix Flake로 패키징",
        "NixOS 모듈을 작성해 PostgreSQL, Alembic 마이그레이션, Uvicorn 백엔드, Caddy 리버스 프록시를 systemd 서비스로 선언하고 배포",
        "Homelab의 aarch cloud node에 배포하고 public ingress는 별도 edge node의 Cloudflare Tunnel/Caddy 구조에 위임",
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
        "나의 반려동물 사진과 프롬프트로 AI 이미지를 생성하는 반려동물 AI 온라인 스튜디오 어플",
      points: [
        "Stable Diffusion으로 반려동물 AI 이미지 생성 파이프라인 구축",
        "비동기 이미지 생성 요청 처리 구조 설계 및 Spring Boot 백엔드 연동",
        "GPU Serverless API를 Dockerize해 온프레미스 GPU 서버 운영 대비 비용 절감",
        "GitHub Actions, Docker Compose, Nginx로 CI/CD 및 무중단 Blue/Green 배포 구성",
      ],
    },
  ],
  education: [
    {
      period: "2017.03 - 2025.02",
      institution: "중앙대학교",
      points: ["전자전기공학 학사 졸업"],
    },
  ],
  activities: [
    {
      period: "2024.06 - 2025.01",
      title: "CES 2025 Eureka Park 참여",
      detail: "컴퓨터 비전으로 개별 반려동물을 디지털화하는 파인튜닝 모델 및 코딩 시스템, Pawframe",
      link: { label: "기술 소개 페이지", href: "https://unpeil.github.io/" },
    },
    {
      period: "2024.03 - 2024.11",
      title: "학생창업유망 300+ 성장트랙 장려상",
      detail: "AI 펫로스 미술치료 프로그램",
    },
    {
      period: "2023.11.28",
      title: "X-corps+ 페스티벌 과기부장관상",
      detail:
        "블록체인 기반 배터리 관리 시스템 데이터를 관리·배포해 IoT 연계를 확장하는 비즈니스 모델 연구",
      link: {
        label: "교내 기사 링크",
        href: "http://isrc.cau.ac.kr/2023-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%AF%B8%EB%9E%98%EC%9D%B8%EC%9E%AC-%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-2023-x-corps-plus-festival/",
      },
    },
    {
      period: "2023.03 - 2023.11",
      title: "학생창업유망 300+ 예비트랙 인기상",
      detail: "반려동물 AI 온라인 스튜디오 SPETTRUM",
    },
    {
      period: "2022.10 - 2023.02",
      title: "멀티캠퍼스 백엔드 개발자 취업캠프 수료",
      detail: "KDT 훈련과정 - Java Spring 백엔드 과정 수강",
    },
    {
      period: "2021.08.13",
      title: "중앙대-두산인프라코어 캡스톤 디자인 대회 우수상",
      detail: "중앙대학교 100주년 기념관 지도 키오스크",
    },
  ],
  languages: [
    { name: "한국어", level: "원어민" },
    { name: "영어", level: "원어민" },
    { name: "중국어", level: "능숙" },
  ],
  certificates: [
    { name: "OPIc AL", date: "2026.07.16 취득" },
    { name: "HSK 6급", date: "2015.01.10 취득" },
  ],
};
