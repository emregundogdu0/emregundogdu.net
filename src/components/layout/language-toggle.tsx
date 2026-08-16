"use client";

import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, ui } = useLocale();

  return (
    <div
      role="group"
      aria-label={ui.langSwitch}
      className={cn(
        "inline-flex items-center rounded-lg border border-white/15 bg-black/30 p-0.5 text-xs font-medium",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLocale("tr")}
        aria-pressed={locale === "tr"}
        className={cn(
          "rounded-md px-2.5 py-1.5 transition",
          locale === "tr"
            ? "bg-white text-zinc-950"
            : "text-zinc-400 hover:text-white",
        )}
      >
        {ui.langTr}
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "rounded-md px-2.5 py-1.5 transition",
          locale === "en"
            ? "bg-white text-zinc-950"
            : "text-zinc-400 hover:text-white",
        )}
      >
        {ui.langEn}
      </button>
    </div>
  );
}
