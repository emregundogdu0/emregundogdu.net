"use client";

import { Code2, LineChart, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const focusItems = [
  {
    label: "aktif marka ve kurum teması",
    value: "8+",
  },
  {
    label: "web, AI ve operasyon bakışı",
    value: "360°",
  },
  {
    label: "kurumsal iş geliştirme odağı",
    value: "B2B",
  },
] as const;

const principles = [
  {
    title: "Mühendislik Disiplini",
    description:
      "Planlı geliştirme, temiz kod, sürdürülebilir mimari ve yayın sonrası takip aynı masada ilerler.",
    icon: Code2,
  },
  {
    title: "AI Odaklı Üretim",
    description:
      "LLM, chatbot, voice assistant ve otomasyon fikirlerini gerçek iş akışlarına uygulanabilir şekilde bağlarız.",
    icon: Sparkles,
  },
  {
    title: "Uzun Ömürlü Ürünler",
    description:
      "Web, uygulama, CRM ve ERP ürünlerini ölçeklenebilir, anlaşılır ve ölçülebilir değer üreten sistemler olarak kurarız.",
    icon: LineChart,
  },
] as const;

export function EmyAboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="emy-about-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="emy-about-heading"
          title="Biz Kimiz?"
          subtitle="Dijital ürünleri fikir aşamasından çalışan sisteme dönüştürüyoruz."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <div className="border-l border-accent/35 py-2 pl-5">
              <p className="text-base leading-8 text-muted-foreground">
                Emy Software Studios olarak modern web siteleri, kurumsal web
                arayüzleri, mobil ve web uygulamaları, CRM ve ERP sistemleri,
                yapay zeka entegrasyonları, LLM tabanlı çözümler, voice
                assistant akışları, sosyal medya süreçlerine yapay zeka
                entegrasyonu ve chatbot kurulumları geliştiriyoruz.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Her projede yalnızca güzel görünen bir ekran değil; hızlı,
                güvenilir, ölçeklenebilir ve gerçek ihtiyaca cevap veren bir
                ürün ortaya çıkarmaya odaklanıyoruz. Teknolojiyi sade,
                anlaşılır ve sürdürülebilir şekilde kullanarak markaların iş
                süreçlerini güçlendiren çözümler üretmeyi hedefliyoruz.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {focusItems.map((item, index) => (
                <FadeIn key={item.label} delay={index * 0.05}>
                  <div className="h-full border-l border-white/10 p-4">
                    <p className="font-mono text-2xl font-semibold text-accent">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="grid gap-3">
              {principles.map((item, index) => (
                <FadeIn key={item.title} delay={0.12 + index * 0.05}>
                  <article className="flex gap-4 border-l border-white/10 p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-accent ring-1 ring-border">
                      <item.icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
