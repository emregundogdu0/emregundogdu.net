"use client";

import { Stagger, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="process-heading"
          title="Nasıl Çalışıyoruz?"
          subtitle="Fikirden yayına kadar şeffaf, ölçülebilir ve sürdürülebilir bir geliştirme süreci izliyoruz. Her projede önce doğru problemi buluyor, sonra tasarım, yazılım, entegrasyon ve yayını aynı ritimde ilerletiyoruz."
        />

        <div className="relative mt-4">
          <div
            className="absolute left-[19px] top-3 bottom-3 hidden w-px bg-gradient-to-b from-accent-electric/45 via-border to-transparent lg:left-0 lg:right-0 lg:top-[22px] lg:bottom-auto lg:h-px lg:w-full lg:bg-gradient-to-r"
            aria-hidden
          />

          <Stagger className="relative grid gap-7 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
                  <div
                    className="relative z-[1] flex size-10 shrink-0 items-center justify-center rounded-full border border-accent-electric/40 bg-background font-mono text-sm font-semibold text-accent shadow-[0_0_22px_-6px_rgba(124,58,237,0.55)] lg:mx-auto"
                    aria-hidden
                  >
                    {step.step}
                  </div>
                  <div className="min-w-0 pt-0.5 lg:pt-4">
                    <h3 className="text-base font-semibold leading-snug text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
