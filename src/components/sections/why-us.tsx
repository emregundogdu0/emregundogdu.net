"use client";

import { motion, useReducedMotion } from "framer-motion";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { whyItems } from "@/content/why";

export function WhySection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="why-heading"
          title="Neden Emy Software Studios?"
          subtitle="Kurumların ihtiyaç duyduğu disiplinle, girişimlerin ihtiyaç duyduğu hız ve esnekliği bir araya getiriyoruz. Sade görünen ama arkasında güçlü mimari, iyi planlama ve ölçülebilir çıktı olan dijital ürünler geliştiriyoruz."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {whyItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.06}>
                <motion.article
                  className="group relative h-full transition-colors duration-300"
                  whileHover={
                    reduce ? undefined : { y: -4, transition: { duration: 0.2 } }
                  }
                >
                  <div className="h-full border-l border-white/10 p-6">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/25 text-accent ring-1 ring-border transition-colors group-hover:ring-accent-electric/35">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
