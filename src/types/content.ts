export type SocialLink = {
  id: "github" | "linkedin" | "huggingface" | "email";
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SiteContent = {
  name: string;
  role: string;
  bio: string;
  summary: string;
  email: string;
  location: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  social: SocialLink[];
};

export type AboutContent = {
  title: string;
  eyebrow: string;
  intro: string;
  focus: { title: string; body: string }[];
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string | null;
  highlights: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  tech: string[];
  featured: boolean;
  span: "sm" | "md" | "lg";
  href: string | null;
};

export type AchievementItem = {
  id: string;
  title: string;
  date: string;
  icon: "trophy" | "gamepad";
  body: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type PartnerItem = {
  id: string;
  name: string;
  src: string;
};

export type TechItem = {
  id: string;
  name: string;
  src: string;
};

export type EducationItem = {
  id: string;
  school: string;
  program: string;
  period: string;
  location: string;
  logo: string;
  body: string;
};

export type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
};
