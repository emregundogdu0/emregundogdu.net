"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

/** Intrinsic ratio hint for layout; image scales with object-contain via className */
const LOGO_SRC = "/brand/emy_studios_logo_white_transparent.png";
const LOGO_WIDTH = 260;
const LOGO_HEIGHT = 72;

export interface BrandLogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function BrandLogo({
  className,
  variant = "default",
}: BrandLogoProps) {
  const [showImage, setShowImage] = useState(true);
  const isFooter = variant === "footer";

  return (
    <Link
      href="#home"
      className={cn(
        "flex items-center gap-3 rounded-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {showImage ? (
        <Image
          src={LOGO_SRC}
          alt="Emy Software Studios"
          width={isFooter ? Math.round(LOGO_WIDTH * 1.05) : LOGO_WIDTH}
          height={isFooter ? Math.round(LOGO_HEIGHT * 1.05) : LOGO_HEIGHT}
          className="h-8 w-auto max-w-[min(100%,240px)] shrink-0 object-contain object-left sm:h-9"
          priority
          onError={() => setShowImage(false)}
        />
      ) : (
        <span
          className={cn(
            "font-semibold tracking-tight text-foreground",
            isFooter ? "text-lg" : "text-base sm:text-lg",
          )}
        >
          Emy Software Studios
        </span>
      )}
    </Link>
  );
}
