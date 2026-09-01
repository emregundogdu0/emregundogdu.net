import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
}

export function SectionHeader({
  title,
  subtitle,
  label,
  align = "left",
  className,
  titleId,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-6 max-w-3xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? (
        <Badge variant="secondary" className="uppercase tracking-[0.12em] text-accent">
          {label}
        </Badge>
      ) : null}
      <h2
        id={titleId}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-tight"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
