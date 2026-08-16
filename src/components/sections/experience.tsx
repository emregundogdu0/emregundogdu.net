"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { useLocale } from "@/i18n/locale-provider";

export function ExperienceSection() {
  const { experience, ui } = useLocale();

  return (
    <Section
      id="experience"
      eyebrow={ui.experienceEyebrow}
      title={ui.experienceTitle}
      description={ui.experienceDescription}
    >
      <ol className="relative space-y-5">
        {experience.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 0.07} y={24}>
              <article className="grid gap-4 rounded-2xl border border-white/8 bg-zinc-950/55 p-4 backdrop-blur-sm sm:grid-cols-[132px_1fr] sm:p-6">
                <div className="flex h-14 w-full max-w-[7.25rem] items-center justify-center rounded-xl border border-white/8 bg-white/4 p-2 sm:h-16">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={112}
                      height={48}
                      className="max-h-10 max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs text-zinc-500">
                      {item.company.slice(0, 3).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-medium sm:text-lg">{item.role}</h3>
                      <p className="text-sm text-zinc-300">{item.company}</p>
                    </div>
                    <p className="shrink-0 text-xs text-zinc-500 sm:text-right sm:text-sm">
                      {item.period}
                      <span className="mx-2 text-white/20">·</span>
                      {item.location}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
                    {item.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
