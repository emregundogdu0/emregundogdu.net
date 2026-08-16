import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { skills, technologies } from "@/lib/content";

const techByName = new Map(technologies.map((tech) => [tech.name, tech]));

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Yetkinlikler"
      description="Üretimde kullandığım diller, AI yığını ve altyapı."
    >
      <div className="mb-8 grid grid-cols-2 gap-2.5 sm:mb-10 sm:grid-cols-3 sm:gap-3 md:grid-cols-5">
        {technologies.map((tech, index) => (
          <Reveal key={tech.id} delay={index * 0.04}>
            <div className="flex h-20 items-center justify-center rounded-2xl border border-white/8 bg-white/4 px-3 sm:h-24 sm:px-4">
              <Image
                src={tech.src}
                alt={tech.name}
                width={140}
                height={56}
                className="max-h-10 w-auto object-contain sm:max-h-12"
              />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.id} delay={0.12 + index * 0.05}>
            <article className="h-full rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-xl">
              <h3 className="mb-4 text-sm text-zinc-300">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const tech = techByName.get(item);
                  return (
                    <Badge
                      key={item}
                      variant="outline"
                      className="h-7 border-white/10 bg-white/5 px-2.5 text-foreground/85"
                    >
                      {tech ? (
                        <Image
                          src={tech.src}
                          alt=""
                          width={16}
                          height={16}
                          className="size-3.5 object-contain"
                        />
                      ) : null}
                      {item}
                    </Badge>
                  );
                })}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
