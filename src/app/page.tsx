import { AboutSection } from "@/components/sections/about";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { PartnersMarquee } from "@/components/sections/partners";
import { PhotoReel } from "@/components/sections/photo-reel";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { StatementBand } from "@/components/sections/statement";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <HeroSection />
      <PartnersMarquee />
      <AboutSection />
      <PhotoReel />
      <StatementBand />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

