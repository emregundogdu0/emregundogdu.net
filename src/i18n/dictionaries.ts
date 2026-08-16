import aboutTr from "@/data/about.json";
import achievementsTr from "@/data/achievements.json";
import educationTr from "@/data/education.json";
import experienceTr from "@/data/experience.json";
import navTr from "@/data/nav.json";
import photosTr from "@/data/photos.json";
import projectsTr from "@/data/projects.json";
import siteTr from "@/data/site.json";
import skills from "@/data/skills.json";
import partners from "@/data/partners.json";
import technologies from "@/data/technologies.json";

import aboutEn from "@/data/en/about.json";
import achievementsEn from "@/data/en/achievements.json";
import educationEn from "@/data/en/education.json";
import experienceEn from "@/data/en/experience.json";
import navEn from "@/data/en/nav.json";
import photosEn from "@/data/en/photos.json";
import projectsEn from "@/data/en/projects.json";
import siteEn from "@/data/en/site.json";

import type {
  AboutContent,
  AchievementItem,
  EducationItem,
  ExperienceItem,
  NavItem,
  PartnerItem,
  PhotoItem,
  ProjectItem,
  SiteContent,
  SkillGroup,
  TechItem,
} from "@/types/content";
import { uiEn, uiTr, type Locale, type UiCopy } from "@/i18n/ui";

export type Dictionary = {
  locale: Locale;
  ui: UiCopy;
  site: SiteContent;
  nav: NavItem[];
  about: AboutContent;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  skills: SkillGroup[];
  technologies: TechItem[];
  partners: PartnerItem[];
  photos: PhotoItem[];
};

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    locale: "tr",
    ui: uiTr,
    site: siteTr as SiteContent,
    nav: navTr as NavItem[],
    about: aboutTr as AboutContent,
    education: educationTr as EducationItem[],
    experience: experienceTr as ExperienceItem[],
    projects: projectsTr as ProjectItem[],
    achievements: achievementsTr as AchievementItem[],
    skills: skills as SkillGroup[],
    technologies: technologies as TechItem[],
    partners: partners as PartnerItem[],
    photos: photosTr as PhotoItem[],
  },
  en: {
    locale: "en",
    ui: uiEn,
    site: siteEn as SiteContent,
    nav: navEn as NavItem[],
    about: aboutEn as AboutContent,
    education: educationEn as EducationItem[],
    experience: experienceEn as ExperienceItem[],
    projects: projectsEn as ProjectItem[],
    achievements: achievementsEn as AchievementItem[],
    skills: skills as SkillGroup[],
    technologies: technologies as TechItem[],
    partners: partners as PartnerItem[],
    photos: photosEn as PhotoItem[],
  },
};
