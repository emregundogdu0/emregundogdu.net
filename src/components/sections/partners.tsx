"use client";

import Image from "next/image";
import { partners } from "@/lib/content";
import { useLocale } from "@/i18n/locale-provider";

export function PartnersMarquee() {
  const { ui } = useLocale();
  const loop = [...partners, ...partners];

  return (
    <section
      aria-label={ui.partnersAria}
      className="space-y-4 border-y border-white/8 bg-[#0d1018]/80 py-6 backdrop-blur-xl sm:space-y-5 sm:py-8"
    >
      <p className="px-4 text-center text-xs text-muted-foreground sm:text-sm">
        {ui.partnersLabel}
      </p>
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-8 px-6 sm:gap-12 sm:px-8">
          {loop.map((partner, index) => (
            <li
              key={`${partner.id}-${index}`}
              className="flex h-12 w-32 shrink-0 items-center justify-center sm:h-14 sm:w-40"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={220}
                height={64}
                className="max-h-9 w-auto object-contain opacity-80 sm:max-h-12"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
