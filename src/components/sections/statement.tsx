"use client";

import { ClipText, SplitHeadline } from "@/components/motion/clip-text";

export function StatementBand() {
  return (
    <section
      aria-label="Odak"
      className="relative overflow-hidden border-y border-white/8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm tracking-[0.2em] text-zinc-500 uppercase">
          <ClipText>Odak</ClipText>
        </p>
        <SplitHeadline
          text="Araştırma değil. Canlıya çıkan sistemler."
          className="font-heading max-w-5xl text-[2rem] leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        />
      </div>
    </section>
  );
}
