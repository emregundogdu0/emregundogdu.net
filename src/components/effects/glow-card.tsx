"use client";

import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  tilt?: boolean;
};

export function GlowCard({
  children,
  className,
  glow = true,
  tilt = true,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const onMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;
      const rx = tilt ? (py - 0.5) * -8 : 0;
      const ry = tilt ? (px - 0.5) * 8 : 0;

      setStyle({
        "--glow-x": `${x}px`,
        "--glow-y": `${y}px`,
        transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`,
      } as CSSProperties);
    },
    [tilt],
  );

  const onLeave = useCallback(() => {
    setStyle({
      "--glow-x": "50%",
      "--glow-y": "50%",
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
    } as CSSProperties);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className={cn(
        "glow-card relative h-full rounded-2xl transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        glow && "glow-card-active",
        className,
      )}
    >
      {children}
    </div>
  );
}
