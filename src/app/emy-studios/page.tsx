import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { EmyAboutSection } from "@/components/sections/emy-about";
import { EmyContactSection } from "@/components/sections/emy-contact";
import { EmyPartnersSection } from "@/components/sections/emy-partners";
import { EmyStudioHero } from "@/components/sections/emy-studio-hero";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { SystemVisualsSection } from "@/components/sections/system-visuals";
import { TechnologiesSection } from "@/components/sections/technologies";
import { TrustBarSection } from "@/components/sections/trust-bar";
import { WhySection } from "@/components/sections/why-us";

export const metadata: Metadata = {
  title: "Emy Software Studios",
  description:
    "Modern web siteleri, uygulamalar, CRM/ERP sistemleri ve yapay zeka entegrasyonları geliştiren Emy Software Studios sayfası.",
};

export default function EmyStudiosPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-background text-foreground">
        <EmyStudioHero />
        <TrustBarSection />
        <EmyAboutSection />
        <ServicesSection />
        <SystemVisualsSection />
        <FeaturedProjectsSection />
        <EmyPartnersSection />
        <TechnologiesSection />
        <WhySection />
        <ProcessSection />
        <EmyContactSection />
      </main>
      <Footer />
    </>
  );
}
