"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { PartnerSlot } from "@/content/partners";

export interface PartnerGridProps {
  partners: PartnerSlot[];
  className?: string;
}

export function PartnerGrid({ partners, className }: PartnerGridProps) {
  const reduce = useReducedMotion();

  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {partners.map((p) => (
        <li key={p.id}>
          <motion.div
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl",
              "aspect-[5/3]",
            )}
          >
            {p.imageSrc ? (
              <Image
                src={p.imageSrc}
                alt={p.imageAlt ?? "Partner logo"}
                fill
                className={cn("object-contain p-4", p.id === "imo" && "rounded-[28px]")}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center px-3">
                <span className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground-soft">
                  Partner Logo
                </span>
              </div>
            )}
          </motion.div>
        </li>
      ))}
    </ul>
  );
}
