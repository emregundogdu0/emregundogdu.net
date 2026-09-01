import { Activity, ShieldCheck } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";

const productFlow = [
  { label: "Keşif", value: "01" },
  { label: "UX", value: "02" },
  { label: "Frontend", value: "03" },
  { label: "Backend", value: "04" },
  { label: "AI", value: "05" },
  { label: "Yayın", value: "06" },
] as const;

const signalBars = [
  { label: "Hız", value: "88%", height: "h-[88%]" },
  { label: "Güven", value: "94%", height: "h-[94%]" },
  { label: "Ölçek", value: "76%", height: "h-[76%]" },
  { label: "Bakım", value: "82%", height: "h-[82%]" },
] as const;

export function SystemVisualsSection() {
  return (
    <section
      aria-labelledby="system-visuals-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="system-visuals-heading"
          title="Sistemleri Görünür Hale Getiriyoruz"
          subtitle="Ürün, veri, otomasyon ve operasyon katmanlarını tek bakışta okunabilen akışlara dönüştürüyoruz. Her proje yalnızca ekranlardan değil; ölçülen, bağlanan ve büyüyen bir sistemden oluşur."
        />

        <div className="overflow-hidden p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Ürün akışı
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                Fikirden çalışan sisteme
              </h3>
            </div>
            <Activity className="size-6 text-accent" aria-hidden />
          </div>

          <div className="relative grid gap-3 sm:grid-cols-6">
            {productFlow.map((item) => (
              <div key={item.label} className="relative z-[1]">
                <div className="flex h-18 flex-col justify-between border-l border-violet-300/40 bg-[radial-gradient(circle_at_90%_12%,rgba(167,139,250,0.18),transparent_42%),linear-gradient(135deg,rgba(5,5,8,0.72),rgba(28,18,58,0.38)_58%,rgba(9,7,18,0.72))] p-4 shadow-[0_0_28px_-18px_rgba(167,139,250,0.95),inset_1px_0_0_rgba(196,181,253,0.22)]">
                  <span className="font-mono text-xs text-accent">{item.value}</span>
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {["Plan", "Kod", "Ölçüm"].map((item) => (
              <div key={item} className="px-4 py-3">
                <p className="text-sm font-semibold text-foreground">{item}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="h-full rounded-full bg-[radial-gradient(circle_at_78%_30%,rgba(196,181,253,0.78),transparent_34%),linear-gradient(90deg,rgba(5,5,8,0.96),rgba(124,58,237,0.88)_48%,rgba(28,18,58,0.96))] shadow-[0_0_22px_rgba(167,139,250,0.75)]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Operasyon sinyalleri</h3>
              <ShieldCheck className="size-5 text-accent" aria-hidden />
            </div>
            <div className="flex h-48 items-end gap-3">
              {signalBars.map((bar) => (
                <div key={bar.label} className="flex h-full flex-1 flex-col justify-end gap-2">
                  <div className="relative flex flex-1 items-end overflow-hidden">
                    <div
                      className={`w-full ${bar.height} rounded-t-xl bg-[radial-gradient(circle_at_50%_8%,rgba(221,214,254,0.75),transparent_30%),linear-gradient(180deg,rgba(167,139,250,0.95),rgba(91,33,182,0.86)_52%,rgba(9,7,18,0.95))] shadow-[0_0_32px_-8px_rgba(167,139,250,0.95),inset_0_1px_0_rgba(255,255,255,0.22)]`}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-foreground">{bar.label}</p>
                    <p className="text-[11px] text-muted-foreground">{bar.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
