"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/components/motion/easing";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  x = 0,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y, x, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.9, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}
