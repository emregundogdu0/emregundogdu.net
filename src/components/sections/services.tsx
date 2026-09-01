"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { ServiceCard } from "@/components/service-card";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/content/services";

const capabilityRows = [
  {
    label: "Web ve uygulama",
    value:
      "Kurumsal vitrinlerden yönetim panellerine kadar modern, hızlı ve bakımı kolay arayüzler.",
  },
  {
    label: "AI ve otomasyon",
    value:
      "LLM, chatbot, voice assistant ve sosyal medya AI akışlarını markanın operasyonuna entegre ederiz.",
  },
  {
    label: "İş sistemleri",
    value:
      "CRM, ERP, API ve veri akışlarını tek merkezden yönetilebilir, ölçülebilir sistemlere dönüştürürüz.",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="services-heading"
          title="Neler Geliştiriyoruz?"
          subtitle="Web sitelerinden yapay zeka entegrasyonlarına, CRM/ERP sistemlerinden voice assistant ve chatbot kurulumlarına kadar uçtan uca yazılım çözümleri üretiyoruz."
        />

        <div className="mb-7 grid gap-3 lg:max-w-3xl">
          {capabilityRows.map((row) => (
            <div
              key={row.label}
              className="border-l border-accent/35 py-2 pl-4"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {row.label}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {row.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
          {services.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.04}
              className={item.spanClass}
            >
              <ServiceCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                mockStrip={item.mockStrip}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
