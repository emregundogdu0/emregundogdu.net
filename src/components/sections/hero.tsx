"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/layout/social-icons";
import { useLocale } from "@/i18n/locale-provider";

export function HeroSection() {
  const { site, ui } = useLocale();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] min-h-[100dvh] overflow-hidden"
    >
      <Image
        src="/photos/hero-cover.png"
        alt={ui.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[28%_center] sm:object-[22%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-black/55 to-black/25 sm:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-black/25 to-black/70 sm:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-end justify-end px-4 pb-[max(3rem,env(safe-area-inset-bottom))] pt-24 sm:px-6 sm:pb-16 lg:items-center lg:px-8 lg:pb-0 lg:pt-20">
        <div className="w-full max-w-xl lg:max-w-lg">
          <h1 className="font-heading text-[2.35rem] leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-100 sm:mt-4 sm:text-base">
            {site.role}
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-200 sm:mt-5 sm:text-[0.95rem] sm:leading-7">
            {site.summary}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href={site.cta.primary.href} />}
              className="h-11 w-full bg-white px-5 text-sm text-zinc-950 hover:bg-zinc-200 sm:w-auto"
            >
              {site.cta.primary.label}
              <ArrowDownRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={<a href={site.cta.secondary.href} />}
              className="h-11 w-full border-white/30 bg-black/40 px-5 text-sm text-white hover:bg-black/55 sm:w-auto"
            >
              {site.cta.secondary.label}
            </Button>
          </div>
          <SocialIcons links={site.social} className="mt-6 flex flex-wrap gap-3" />
        </div>
      </div>
    </section>
  );
}
