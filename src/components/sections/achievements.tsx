"use client";

import { Gamepad2, Trophy } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GlowCard } from "@/components/effects/glow-card";
import { Section } from "@/components/layout/section";
import { useLocale } from "@/i18n/locale-provider";

const icons = {
  trophy: Trophy,
  gamepad: Gamepad2,
};

export function AchievementsSection() {
  const { achievements, ui } = useLocale();

  return (
    <Section
      id="achievements"
      eyebrow={ui.achievementsEyebrow}
      title={ui.achievementsTitle}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.id} delay={index * 0.08}>
              <GlowCard tilt={false}>
                <article className="rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-xl">
                  <Icon className="size-6 text-cyan-300" aria-hidden="true" />
                  <p className="mt-4 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    {item.date}
                  </p>
                  <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </GlowCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
