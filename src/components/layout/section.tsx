"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ClipText, SplitHeadline } from "@/components/motion/clip-text";
import { Reveal } from "@/components/motion/reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Section({
  id,
  children,
  className,
  eyebrow,
  title,
  description,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 px-4 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20 lg:px-8 lg:py-28",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || description) && (
          <header className="mb-12 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-sm text-zinc-500">
                <ClipText>{eyebrow}</ClipText>
              </p>
            ) : null}
            {title ? (
              <SplitHeadline
                text={title}
                className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
              />
            ) : null}
            {description ? (
              <Reveal delay={0.12} y={28}>
                <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </Reveal>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
