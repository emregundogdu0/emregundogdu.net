"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/components/motion/easing";

const CLIP = {
  bottom: ["inset(100% 0 0 0)", "inset(0 0 0 0)"],
  left: ["inset(0 100% 0 0)", "inset(0 0 0 0)"],
  right: ["inset(0 0 0 100%)", "inset(0 0 0 0)"],
} as const;

type ImageWipeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  origin?: keyof typeof CLIP;
};

export function ImageWipe({
  children,
  className,
  delay = 0,
  origin = "bottom",
}: ImageWipeProps) {
  const [from, to] = CLIP[origin];

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: from }}
      whileInView={{ clipPath: to }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}
