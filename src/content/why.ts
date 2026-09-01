import type { LucideIcon } from "lucide-react";
import { Handshake, Layers, Rocket, ShieldCheck } from "lucide-react";

export interface WhyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyItems: WhyItem[] = [
  {
    title: "Kurumsal Güvenilirlik",
    description:
      "Üniversite, kurum ve şirket işleyişine uyumlu; düzenli, takip edilebilir ve net teslim süreçleriyle çalışırız. Her adımda neyin yapıldığını, neden yapıldığını ve sıradaki aksiyonu görünür tutarız.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Yazılım Mimarisi",
    description:
      "Bakımı kolay, test edilebilir ve büyümeye hazır kod yapısını projenin merkezinde tutarız. Bugünün ihtiyacını çözerken yarının entegrasyonlarını ve yeni modüllerini de hesaba katarız.",
    icon: Layers,
  },
  {
    title: "Ölçeklenebilir Ürünler",
    description:
      "Kullanıcı sayısı, ekip, veri ve iş ihtiyacı arttıkça zorlanmadan gelişebilen sistemler kurarız. Ürünü sadece ilk yayın anı için değil, büyüme süreci için de tasarlarız.",
    icon: Rocket,
  },
  {
    title: "Uçtan Uca Destek",
    description:
      "Analizden canlıya almaya, entegrasyondan sürekli iyileştirmeye kadar tek ekip olarak ilerleriz. Tasarım, yazılım, yapay zeka, bakım ve danışmanlık süreçleri birbirinden kopuk kalmaz.",
    icon: Handshake,
  },
];
