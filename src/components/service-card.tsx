"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  mockStrip?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
  mockStrip,
}: ServiceCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn("group h-full", className)}
      whileHover={
        reduce ? undefined : { y: -4, transition: { duration: 0.2 } }
      }
    >
      <div
        className={cn(
          "relative flex h-full flex-col gap-4",
        )}
      >
        <div
          className={cn(
            "relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border-l border-white/10 p-5 outline outline-1 outline-white/10",
          )}
        >
          {mockStrip ? (
            <div className="relative -mx-5 -mt-5 mb-1 h-16 w-[calc(100%+2.5rem)] shrink-0">
              <Image
                src={mockStrip}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/35 to-card/95"
                aria-hidden
              />
            </div>
          ) : null}
          <div className="flex size-11 items-center justify-center text-accent">
            <Icon className="size-5" aria-hidden />
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
