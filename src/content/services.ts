import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  DatabaseZap,
  LayoutDashboard,
  Mic2,
  MonitorSmartphone,
  Plug,
  Settings2,
  Share2,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind col-span classes for bento */
  spanClass: string;
  /** Optional header strip mock (SVG) */
  mockStrip: string;
}

export const services: ServiceItem[] = [
  {
    title: "Profesyonel Web Site Geliştirme",
    description:
      "Markanızın güven veren yüzünü oluşturan hızlı, modern, SEO uyumlu ve kolay yönetilebilir web siteleri geliştiririz. Tasarım, performans ve içerik yapısını birlikte ele alırız.",
    icon: MonitorSmartphone,
    spanClass: "md:col-span-2",
    mockStrip: "/mock/strip-app.svg",
  },
  {
    title: "Web ve Mobil Uygulama Yapımı",
    description:
      "Kullanıcı deneyimi güçlü, ölçeklenebilir ve sürdürülebilir uygulamalar üretiriz. Panel, müşteri portalı, randevu, sipariş, takip ve özel iş akışı ihtiyaçlarını tek üründe toplarız.",
    icon: LayoutDashboard,
    spanClass: "md:col-span-1",
    mockStrip: "/mock/strip-mobile.svg",
  },
  {
    title: "Yapay Zeka ve Otomasyon",
    description:
      "Tekrarlı işleri azaltan, karar süreçlerini hızlandıran ve ekiplerin zamanını daha değerli işlere ayırmasını sağlayan akıllı otomasyon sistemleri kurarız.",
    icon: BrainCircuit,
    spanClass: "md:col-span-1",
    mockStrip: "/mock/strip-network.svg",
  },
  {
    title: "CRM ve ERP Sistemleri",
    description:
      "Satış, müşteri ilişkileri, stok, ekip, finans ve operasyon takibini tek panelde birleştiren özel CRM/ERP çözümleri geliştiririz. Her modül gerçek kullanım alışkanlığına göre şekillenir.",
    icon: Settings2,
    spanClass: "md:col-span-2",
    mockStrip: "/mock/strip-data.svg",
  },
  {
    title: "LLM Entegrasyonları",
    description:
      "OpenAI ve benzeri modelleri ürünlerinize güvenli, kontrollü ve iş odaklı şekilde entegre ederiz. Prompt akışı, veri erişimi, rol kurgusu ve kullanım sınırlarını dikkatle tasarlarız.",
    icon: DatabaseZap,
    spanClass: "md:col-span-1",
    mockStrip: "/mock/strip-data.svg",
  },
  {
    title: "Chatbot Kurulumu",
    description:
      "Web siteniz, WhatsApp akışlarınız veya iç operasyonlarınız için bağlama duyarlı chatbotlar kurarız. Sık sorular, teklif akışı, müşteri destek ve lead toplama süreçlerini hızlandırırız.",
    icon: Bot,
    spanClass: "md:col-span-1",
    mockStrip: "/mock/strip-app.svg",
  },
  {
    title: "Voice Assistant Sistemleri",
    description:
      "Sesli komut, çağrı karşılama, yönlendirme ve müşteri destek senaryoları için yapay zeka destekli asistanlar tasarlarız. Konuşma akışını marka tonuna uygun hale getiririz.",
    icon: Mic2,
    spanClass: "md:col-span-1",
    mockStrip: "/mock/strip-network.svg",
  },
  {
    title: "Sosyal Medya AI Entegrasyonu",
    description:
      "İçerik üretimi, yorum/mesaj yanıt akışları, kampanya planlama ve raporlama süreçlerini yapay zeka ile destekleyen entegrasyonlar geliştiririz.",
    icon: Share2,
    spanClass: "md:col-span-1",
    mockStrip: "/mock/strip-app.svg",
  },
  {
    title: "API ve Backend Geliştirme",
    description:
      "Güvenilir veri yapıları, entegrasyonlar, kullanıcı yetkilendirme akışları ve büyümeye hazır servis mimarileri kurarız. Ürünün görünmeyen tarafını sağlam temele oturturuz.",
    icon: Plug,
    spanClass: "md:col-span-2",
    mockStrip: "/mock/strip-app.svg",
  },
];
