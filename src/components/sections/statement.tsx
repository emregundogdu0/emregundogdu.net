"use client";

import { ClipText, SplitHeadline } from "@/components/motion/clip-text";
import { useLocale } from "@/i18n/locale-provider";

export function StatementBand() {
  const { ui } = useLocale();

  return (
    <section
      aria-label={ui.statementAria}
      className="relative overflow-hidden border-y border-white/8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm tracking-[0.2em] text-zinc-500 uppercase">
          <ClipText>{ui.statementEyebrow}</ClipText>
        </p>
        <SplitHeadline
          key={ui.statementText}
          text={ui.statementText}
          className="font-heading max-w-5xl text-[2rem] leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        />
      </div>
    </section>
  );
}
