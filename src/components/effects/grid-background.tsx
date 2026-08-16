"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.18),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_36%),linear-gradient(180deg,#07080c_0%,#05060a_100%)]" />
      <div className="grid-glow absolute inset-0" />
      {!reduce && (
        <>
          <div className="blob blob-a" />
          <div className="blob blob-b" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
