import aboutJson from "@/data/about.json";
import achievementsJson from "@/data/achievements.json";
import educationJson from "@/data/education.json";
import experienceJson from "@/data/experience.json";
import navJson from "@/data/nav.json";
import partnersJson from "@/data/partners.json";
import photosJson from "@/data/photos.json";
import projectsJson from "@/data/projects.json";
import siteJson from "@/data/site.json";
import skillsJson from "@/data/skills.json";
import technologiesJson from "@/data/technologies.json";
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

export const site = siteJson as SiteContent;
export const nav = navJson as NavItem[];
export const about = aboutJson as AboutContent;
export const education = educationJson as EducationItem[];
export const experience = experienceJson as ExperienceItem[];
export const projects = projectsJson as ProjectItem[];
export const achievements = achievementsJson as AchievementItem[];
export const skills = skillsJson as SkillGroup[];
export const technologies = technologiesJson as TechItem[];
export const partners = partnersJson as PartnerItem[];
export const photos = photosJson as PhotoItem[];
