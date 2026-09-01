"use client";

import { createElement, type ElementType, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/components/motion/easing";

type ClipTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export function ClipText({
  children,
  className,
  delay = 0,
  duration = 0.95,
}: ClipTextProps) {
  return (
    <span
      className={cn(
        "inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom",
        className,
      )}
    >
      <motion.span
        className="inline-block will-change-transform"
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration, delay, ease: EASE_EXPO }}
      >
        {children}
      </motion.span>
    </span>
  );
}

type SplitHeadlineProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export function SplitHeadline({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: SplitHeadlineProps) {
  const words = text.split(" ");

  return createElement(
    Tag,
    { className },
    words.map((word, index) => (
        <ClipText
          key={`${word}-${index}`}
          delay={delay + index * 0.07}
          className="mr-[0.28em] last:mr-0"
        >
          {word}
        </ClipText>
      )),
  );
}

type ClipLineProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ClipLine({ children, className, delay = 0 }: ClipLineProps) {
  return (
    <div className="overflow-hidden">
      <motion.p
        className={cn("will-change-transform", className)}
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.95, delay, ease: EASE_EXPO }}
      >
        {children}
      </motion.p>
    </div>
  );
}
