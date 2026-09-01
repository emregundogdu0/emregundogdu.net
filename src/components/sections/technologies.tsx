import Image from "next/image";

import { SectionHeader } from "@/components/ui/section-header";
import { technologyLogos } from "@/content/technologies";

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="technologies-heading"
          align="center"
          title="Kullandığımız Teknolojiler"
          subtitle="Projelerde güvenilir, sürdürülebilir ve ölçeklenebilir ürünler geliştirmek için modern web, yapay zeka, altyapı ve yazılım teknolojilerini birlikte kullanıyoruz."
          className="mx-auto"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {technologyLogos.map((technology) => (
            <div
              key={technology.name}
              className="group relative flex aspect-[5/3] items-center justify-center overflow-hidden p-5 transition-all duration-300"
            >
              <Image
                src={technology.imageSrc}
                alt={`${technology.name} logo`}
                width={160}
                height={96}
                className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="sr-only">{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
