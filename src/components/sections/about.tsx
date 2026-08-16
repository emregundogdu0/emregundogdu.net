"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SplineScene } from "@/components/ui/splite";
import { useLocale } from "@/i18n/locale-provider";

export function AboutSection() {
  const { about, site } = useLocale();

  return (
    <Section
      id="about"
      eyebrow={about.eyebrow}
      title={about.title}
      description={about.intro}
    >
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="relative aspect-[4/5] w-full sm:aspect-[5/5] sm:min-h-[420px] lg:aspect-auto lg:h-[560px]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="absolute inset-0 bg-transparent"
          />
        </div>

        <div className="min-w-0 space-y-5 sm:space-y-6">
          {about.focus.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="border-t border-white/10 pt-5">
                <h3 className="text-lg font-medium sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400 sm:text-base">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="relative mt-2 flex h-14 items-center sm:mt-4 sm:h-16">
              <Image
                src="/brand/logo.svg"
                alt={site.name}
                width={173}
                height={171}
                className="h-10 w-auto object-contain opacity-90 sm:h-12"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
