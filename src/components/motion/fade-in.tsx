"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/components/motion/easing";

type FadeInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  delay?: number;
  y?: number;
  children: ReactNode;
};

export function FadeIn({
  className,
  children,
  delay = 0,
  y = 24,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: EASE_EXPO }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
