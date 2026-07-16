export type ResumeLocale = "ko" | "en";

interface ResumeLink {
  label: string;
  href: string;
}

interface ResumeSkillGroup {
  category: string;
  items: readonly string[];
}

interface ResumeExperience {
  period: string;
  role: string;
  org: string;
  points: readonly string[];
}

interface ResumeProject {
  name: string;
  period: string;
  stack: readonly string[];
  tagline: string;
  points: readonly string[];
  github?: string;
}

interface ResumeEducation {
  period: string;
  institution: string;
  points: readonly string[];
}

interface ResumeActivity {
  period: string;
  title: string;
  detail: string;
  link?: ResumeLink;
}

interface ResumeLanguage {
  name: string;
  level: string;
}

interface ResumeCertificate {
  name: string;
  date: string;
}

export interface ResumeContent {
  locale: ResumeLocale;
  header: {
    eyebrow: string;
    name: string;
    summary: string;
    motto: string;
  };
  sections: {
    skills: string;
    experience: string;
    projects: string;
    education: string;
    activities: string;
    languagesAndCertificates: string;
    languages: string;
    certificates: string;
  };
  labels: {
    skillsSuffix: string;
    githubRepository: string;
  };
  skills: readonly ResumeSkillGroup[];
  experiences: readonly ResumeExperience[];
  projects: readonly ResumeProject[];
  education: readonly ResumeEducation[];
  activities: readonly ResumeActivity[];
  languages: readonly ResumeLanguage[];
  certificates: readonly ResumeCertificate[];
}
