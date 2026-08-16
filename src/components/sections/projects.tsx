"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BentoGrid, bentoSpanClass } from "@/components/effects/bento-grid";
import { GlowCard } from "@/components/effects/glow-card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { useLocale } from "@/i18n/locale-provider";
import type { ProjectItem } from "@/types/content";

function ProjectCard({
  project,
  index,
  detailsLabel,
  openSiteLabel,
}: {
  project: ProjectItem;
  index: number;
  detailsLabel: string;
  openSiteLabel: string;
}) {
  return (
    <Reveal delay={index * 0.06} className={bentoSpanClass(project.span)}>
      <Dialog>
        <GlowCard className="h-full">
          <article className="flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-white/8 bg-white/4 p-5 backdrop-blur-xl sm:min-h-[220px] sm:p-6">
            <div>
              <p className="text-xs text-zinc-500">{project.subtitle}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.summary}
              </p>
            </div>
            <div className="mt-6">
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-white/10 bg-white/5 text-foreground/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <DialogTrigger
                render={
                  <Button
                    variant="outline"
                    className="h-10 border-white/15 bg-transparent"
                  />
                }
              >
                {detailsLabel}
                <ArrowUpRight className="size-4" />
              </DialogTrigger>
            </div>
          </article>
        </GlowCard>
        <DialogContent className="max-w-lg bg-[#0d1018] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.subtitle}</DialogDescription>
          </DialogHeader>
          <p className="text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          {project.href ? (
            <Button
              nativeButton={false}
              render={
                <a href={project.href} target="_blank" rel="noopener noreferrer" />
              }
              className="h-10 bg-cyan-300 text-slate-950 hover:bg-cyan-200"
            >
              {openSiteLabel}
              <ArrowUpRight className="size-4" />
            </Button>
          ) : null}
        </DialogContent>
      </Dialog>
    </Reveal>
  );
}

export function ProjectsSection() {
  const { projects, ui } = useLocale();

  return (
    <Section
      id="projects"
      eyebrow={ui.projectsEyebrow}
      title={ui.projectsTitle}
      description={ui.projectsDescription}
    >
      <BentoGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            detailsLabel={ui.projectDetails}
            openSiteLabel={ui.openSite}
          />
        ))}
      </BentoGrid>
    </Section>
  );
}
