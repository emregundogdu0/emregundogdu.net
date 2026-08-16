import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function bentoSpanClass(span: "sm" | "md" | "lg") {
  if (span === "lg") return "md:col-span-2 lg:col-span-2 lg:row-span-2";
  if (span === "md") return "md:col-span-1 lg:col-span-2";
  return "md:col-span-1 lg:col-span-1";
}
