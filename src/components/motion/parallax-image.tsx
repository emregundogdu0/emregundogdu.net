"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/components/motion/easing";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  delay?: number;
};

export function ParallaxImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  delay = 0,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.02]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, delay, ease: EASE_EXPO }}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
