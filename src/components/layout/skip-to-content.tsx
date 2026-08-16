"use client";

import { useLocale } from "@/i18n/locale-provider";

export function SkipToContent() {
  const { ui } = useLocale();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-zinc-950"
    >
      {ui.skipToContent}
    </a>
  );
}
