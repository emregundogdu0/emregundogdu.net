"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

import { HeroWebGLShader } from "@/components/hero-webgl-shader";

const Hero3DCanvas = dynamic(
  () => import("@/components/hero-3d-canvas").then((m) => m.Hero3DCanvas),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-full min-h-[320px] w-full items-center justify-center"
        role="status"
        aria-label="Loading Emy Software Studios 3D scene"
      >
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    ),
  },
);

const studioCapabilities = [
  "Modern web sites",
  "Web and mobile applications",
  "CRM / ERP systems",
  "AI integrations",
  "LLM solutions",
  "Voice assistants",
  "Chatbot setup",
  "Social media AI automation",
] as const;

export function EmyStudioHero() {
  return (
    <section
      id="home"
      aria-labelledby="emy-studio-heading"
      className="overflow-x-clip border-b border-white/10 bg-black"
    >
      <div className="relative min-h-[620px] overflow-hidden lg:min-h-[720px]">
        <div className="absolute inset-0">
          <HeroWebGLShader className="z-0" />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_44%,transparent_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.68)_100%)]"
            aria-hidden
          />
          <Hero3DCanvas className="pointer-events-none relative z-10 h-[390px] w-full sm:h-[520px] lg:h-[620px]" />
        </div>

        <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-4 pb-12 pt-[360px] sm:px-6 sm:pt-[470px] lg:min-h-[720px] lg:px-8 lg:pt-[540px]">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Emy Software Studios
            </p>
            <h2
              id="emy-studio-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              Building Intelligent, Scalable and Future-Ready Software Solutions
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              Emy Software Studios develops modern digital products, AI-powered
              systems, automation tools, CRM/ERP platforms and custom software
              solutions inside the ODTÜ Northern Cyprus KALTEV ecosystem.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {studioCapabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-foreground-soft"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-[radial-gradient(circle_at_78%_30%,rgba(167,139,250,0.42),transparent_38%),linear-gradient(135deg,rgba(5,5,8,0.96),rgba(28,18,58,0.92)_52%,rgba(9,7,18,0.96))] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_34px_-14px_rgba(167,139,250,0.85)] transition-transform hover:-translate-y-0.5"
            >
              Talk about a software project
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="relative z-20 flex h-14 items-center overflow-hidden border-t border-white/10 bg-black">
          <div className="animate-marquee-right flex min-w-max items-center gap-10 whitespace-nowrap px-10">
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className="text-sm font-semibold uppercase tracking-[0.28em] text-white"
              >
                Emy Software Studios
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
