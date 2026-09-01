"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { trustBadges } from "@/content/trust";

export function TrustBarSection() {
  return (
    <section
      aria-label="Institutional credibility"
      className="border-y border-border-subtle bg-card/30 py-6 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-sm font-medium text-foreground-soft sm:text-base">
            ODTÜ Kuzey Kıbrıs KALTEV ekosistemiyle bağlantılı modern yazılım stüdyosu
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {trustBadges.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background/60 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-md sm:text-sm"
              >
                <Icon className="size-3.5 shrink-0 text-accent sm:size-4" />
                {label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
