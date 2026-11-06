import type { ResumeContent } from "./resume.types";

export const resumeKo: ResumeContent = {
  locale: "ko",
  header: {
    eyebrow: "이력서",
    name: "김상민",
    summary:
      "현업의 업무를 분석해 웹 시스템과 데이터 흐름으로 구현하는 엔지니어 김상민입니다. 케이미트에서 여러 부서의 업무 규칙을 정리하고, 시스템 설계·개발부터 도입 피드백 반영까지 담당하고 있습니다. 필요한 곳에 AI와 외부 API를 활용해 실무자가 사용하는 업무 도구를 만듭니다.",
    motto: "업무 시스템 개발 · 데이터 연계 · AI 활용",
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
    {
      category: "Backend",
      items: ["주력: Java, Spring Boot, Python", "프로젝트 경험: Rust, Axum"],
    },
    {
      category: "Database / Data",
      items: ["PostgreSQL", "Oracle", "데이터 모델링", "API 연계"],
    },
    {
      category: "Frontend / Mobile",
      items: ["사용 경험: React, TypeScript", "프로젝트 경험: React Native, Expo"],
    },
    {
      category: "Infra / Ops",
      items: ["Linux", "NixOS", "Docker", "GitHub Actions"],
    },
  ],
  experiences: [
    {
      period: "2025.04 ~",
      role: "데이터 엔지니어 / AX 엔지니어",
      org: "케이미트",
      points: [
        "재무·구매·채권·물류·수입 업무와 현장 데이터·사내교육을 아우르는 7개 과제를 병행하며, 현업 인터뷰부터 시스템 설계·개발·배포와 도입 피드백 반영까지 담당.",
        "현업 담당자 및 기존 ERP 전문가와 업무 규칙·예외를 정리하고, 기능 범위와 역할·일정을 조율하며 스프린트를 주도.",
      ],
      initiatives: [
        {
          title: "비정형 출고 요청 해석·ERP 재고 매칭",
          status: "물류팀 대상 시범운영·개선 중",
          points: [
            "요구사항 파악부터 설계·개발·배포와 실제 물류팀 대상 시범운영까지 단독 수행.",
            "영업팀의 비정형 Slack 출고 요청을 물류 담당자가 해석하고 ERP 재고를 찾는 업무를 분석해, 요청 해석부터 재고 후보 확인까지의 흐름을 설계.",
            "정규식·규칙만으로 처리하기 어려운 품목·거래처 별칭에 대응하기 위해 AI 기반 메시지 분류와 ERP 후보 비교를 결합한 Slack 앱을 구현.",
            "매칭 점수와 후보 수에 따라 자동 확정과 담당자 확인을 구분하는 흐름을 설계하고, 물류팀의 시범운영 피드백을 반영해 개선.",
          ],
        },
        {
          title: "ERP 데이터 연계 재무 포털",
          status: "구축·운영",
          points: [
            "재무팀이 ERP에서 내려받던 입금처리·월거래처별채권현황을 포털에서 조회하고 Excel로 추출하는 기능을 구현.",
            "월거래처별채권현황 쿼리의 행별 서브쿼리 3개를 CTE·조인으로 재구성해, 기존 ERP의 계산 규칙을 유지하면서 조회 성능을 개선.",
            "직원과 재무팀이 실제 업무에서 사용하는 조회 도구를 제공하고, 도입 피드백을 반영.",
          ],
        },
        {
          title: "레거시 ERP 웹 전환",
          status: "수입 화면 첫 운영 배포 준비 중 · 2026-11-09 주 배포 예정",
          points: [
            "Backbone 1차 시도에서 SKU·Lot 기반 재고 이력 추적 구조를 설계하고 MVP를 검증했으나, 현재 인력·환경에서는 기존 DB 구조 변경이 어렵다는 제약을 확인.",
            "기존 DB를 보존한 채 PowerBuilder ERP를 웹으로 전환하며 부서별 실제 업무 로직을 정의하고, 이후 SKU·Lot 도입을 포함한 대규모 DB 구조 변경을 추진하는 단계적 접근을 수립.",
            "웹 전환 방안을 제안해 사수·상부 승인을 받고, 기존 ERP 전문가의 화면·SQL 분석과 무역팀의 업무 규칙을 바탕으로 기능 범위를 조율하며 수입 화면을 설계·구현.",
          ],
        },
        {
          title: "그 밖의 업무",
          points: [
            "채권 관리 기능을 개발·개선하고, 구매 판단을 위한 시장·통관·재고·손익 데이터 수집·조회를 구현.",
            "현장 온도 데이터 축적과 Slack 기반 직무교육 시스템을 개발하며 현장 검증·시범운영을 준비.",
          ],
        },
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
      name: "Unpeil / SPETTRUM",
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
        "대학 재학 중 참여한 창업 프로젝트로, 반려동물 AI 이미지를 생성하는 온라인 스튜디오 앱",
      points: [
        "백엔드 개발 (2023.06–2024.06) → 개발팀 총괄 (2024.07–2024.12)",
        "SPETTRUM 초기 백엔드와 회원·주문·이미지/모델 생성 기능 개발, 이후 신규 기능 도입 및 유지보수 총괄",
        "Stable Diffusion 기반 반려동물 AI 이미지 생성 파이프라인 구축",
        "Serverless API Endpoint를 활용한 비동기 이미지 생성 요청 처리 구조 설계 및 Spring Boot 백엔드 연동",
        "GPU Serverless API의 Dockerize로 온프레미스 GPU 서버 운영 대비 비용 절감",
        "GitHub Actions, Docker Compose, Nginx 기반 CI/CD 및 무중단 Blue/Green 배포 구성",
        "Generative AI 신기술 데모·테스트 환경 구축, GPU 서버 및 개발팀 인력 관리",
      ],
    },
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
      tagline: "폐쇄형 그룹 내 토픽 기반 이야기 공유 서비스",
      github: "https://github.com/jamye-plz/jamye-plz",
      points: [
        "기존 FastAPI·SvelteKit 기반 웹 PWA를 Rust·Axum 백엔드와 React Native·Expo 모바일 앱으로 분리·전환 중",
        "모바일 연결 중단과 재시작에 대응하는 SQLite 기반 전송 대기열, WebSocket 통신과 누락 이벤트 복구 동기화 구현",
        "서버 API 계약을 기준으로 앱·서버 연동을 관리하며 주요 기능을 단계적으로 구현·검증하고 스토어 배포를 준비",
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
      link: {
        label: "기술 소개 페이지",
        href: "https://unpeil.github.io/",
      },
    },
    {
      period: "2024.03 - 2024.11.08",
      title: "학생창업유망 300+ 성장트랙 장려상 (한국청년기업가정신재단)",
      detail: "AI 펫로스 미술치료 프로그램",
      link: {
        label: "팀 소개 페이지",
        href: "http://www.u300.kr/cms/process/team/view.asp?c_show_no=144&c_check_no=97&c_relation=996&c_relation2=1014&c_no=25401&s_field=team_name&s_text=%EC%96%B8%ED%8E%98%EC%9D%BC&page=1",
      },
    },
    {
      period: "2023.11.28",
      title: "X-corps+ 페스티벌 대상 (과학기술정보통신부)",
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
      detail: "KDT 훈련과정 - Java Spring 백엔드 과정 수강 (784시간)",
    },
    {
      period: "2021.08.13",
      title: "중앙대-두산인프라코어 캡스톤 디자인 대회 우수상",
      detail: "중앙대학교 100주년 기념관 지도 키오스크",
    },
  ],
  languages: [
    {
      name: "한국어",
      level: "원어민",
    },
    {
      name: "영어",
      level: "원어민",
    },
    {
      name: "중국어",
      level: "능숙",
    },
  ],
  certificates: [
    {
      name: "OPIc AL",
      date: "2026.07.11",
    },
    {
      name: "HSK 6급",
      date: "2015.01.10",
    },
  ],
};
