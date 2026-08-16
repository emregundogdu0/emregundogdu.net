"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

function SplineFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-transparent">
      <span className="size-8 animate-spin rounded-full border-2 border-cyan-300/20 border-t-cyan-300" />
    </div>
  );
}

type SplineSceneProps = {
  scene: string;
  className?: string;
};

export function SplineScene({ scene, className }: SplineSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      className={cn("relative h-full w-full bg-transparent", className)}
    >
      {visible ? (
        <Spline
          scene={scene}
          className="h-full w-full touch-pan-y"
          style={{ width: "100%", height: "100%" }}
          renderOnDemand
        />
      ) : (
        <SplineFallback />
      )}
    </div>
  );
}
