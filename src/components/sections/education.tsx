"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { useLocale } from "@/i18n/locale-provider";

export function EducationSection() {
  const { education, ui } = useLocale();

  return (
    <Section
      id="education"
      eyebrow={ui.educationEyebrow}
      title={ui.educationTitle}
      description={ui.educationDescription}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/4 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/5 p-2 sm:size-20">
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    width={96}
                    height={96}
                    className="max-h-14 w-auto object-contain sm:max-h-16"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {item.period}
                    <span className="mx-2 text-white/20">·</span>
                    {item.location}
                  </p>
                  <h3 className="mt-2 text-lg font-medium sm:text-xl">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-200/90">{item.program}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-zinc-400">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
