"use client";

import { ArrowUpRight, BarChart3, Boxes, Cpu, Workflow } from "lucide-react";
import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/content/projects";

const solutionGraph = [
  { label: "Veri", value: "CRM, ERP, form, API", icon: Boxes },
  { label: "Ürün", value: "Web, mobil, panel", icon: Workflow },
  { label: "AI", value: "LLM, chatbot, voice", icon: Cpu },
  { label: "Büyüme", value: "Raporlama, otomasyon", icon: BarChart3 },
] as const;

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="projects-heading"
          title="Gerçek İhtiyaçlar İçin Dijital Ürünler"
          subtitle="Markanın görünen yüzünü, operasyonun arka planını ve yapay zeka destekli iş akışlarını birlikte düşünürüz. Böylece proje yalnızca yayınlanan bir ekran değil, ölçülebilir fayda üreten bir sistem haline gelir."
        />
        <div className="mb-7 opacity-100">
          <div className="grid gap-4 md:grid-cols-4">
            {solutionGraph.map((item) => (
              <div
                key={item.label}
                className="relative overflow-hidden border-l border-accent/30 p-4"
              >
                <item.icon className="size-5 text-accent" aria-hidden />
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.title} className="h-full">
              <FadeIn delay={i * 0.05} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-px shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-shadow duration-300 hover:shadow-[0_0_48px_-12px_rgba(124,58,237,0.45)]">
                  <div className="flex h-full flex-col rounded-[15px] bg-gradient-to-b from-background/40 via-card/90 to-background/90 p-6 backdrop-blur-md">
                    <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-background">
                      <Image
                        src={project.mockImage}
                        alt=""
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent-electric/25 mix-blend-overlay"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.05)_50%,transparent_65%)]"
                        aria-hidden
                      />
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <Button
                      nativeButton={false}
                      render={<a href="#contact" />}
                      variant="ghost"
                      size="sm"
                      className="mt-5 w-fit gap-1 px-0 text-accent hover:text-foreground"
                    >
                      Detayları Gör
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Button>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
