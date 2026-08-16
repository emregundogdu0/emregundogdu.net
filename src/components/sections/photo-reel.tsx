"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { photos } from "@/lib/content";
import { EASE_EXPO } from "@/components/motion/easing";

function ReelRow({
  items,
  x,
}: {
  items: typeof photos;
  x: MotionValue<string>;
}) {
  return (
    <motion.ul style={{ x }} className="flex w-max gap-4 px-4 sm:gap-5 sm:px-8">
      {items.map((photo, index) => (
        <motion.li
          key={`${photo.src}-${index}`}
          className="group relative h-[42vh] max-h-[22rem] w-[78vw] overflow-hidden rounded-2xl sm:h-[52vh] sm:max-h-none sm:w-[36vw] lg:w-[24vw]"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.55, ease: EASE_EXPO }}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: EASE_EXPO }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 78vw, 24vw"
              className="object-cover"
            />
          </motion.div>
          <span className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-black/75 to-transparent px-4 py-4 text-xs tracking-[0.18em] text-white uppercase transition duration-500 group-hover:translate-y-0">
            {photo.caption}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function PhotoReel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xA = useTransform(scrollYProgress, [0, 1], ["6%", "-32%"]);
  const xB = useTransform(scrollYProgress, [0, 1], ["-22%", "10%"]);
  const rowA = [...photos, ...photos];
  const rowB = [...photos].reverse().concat([...photos].reverse());

  return (
    <section
      ref={ref}
      aria-label="Yaşamdan kareler"
      className="relative overflow-hidden py-8 lg:py-14"
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <ReelRow items={rowA} x={xA} />
        <ReelRow items={rowB} x={xB} />
      </div>
    </section>
  );
}
