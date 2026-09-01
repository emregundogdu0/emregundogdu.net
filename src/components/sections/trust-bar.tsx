"use client";

import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { partnerSlots } from "@/content/partners";

export function TrustBarSection() {
  return (
    <section
      aria-label="Çalıştığımız şirketler"
      className="border-y border-border-subtle py-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {partnerSlots.map((partner) => (
              <li key={partner.id} className="flex min-h-14 items-center justify-center">
                {partner.imageSrc ? (
                  <Image
                    src={partner.imageSrc}
                    alt={partner.imageAlt ?? "Partner logo"}
                    width={220}
                    height={90}
                    className="max-h-11 w-auto object-contain opacity-95 transition-opacity hover:opacity-100"
                  />
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground-soft">
                    Partner
                  </span>
                )}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
