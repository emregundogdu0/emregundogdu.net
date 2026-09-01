export interface ProjectItem {
  category: string;
  title: string;
  description: string;
  /** Site-themed mock illustration (SVG) */
  mockImage: string;
}

export const projects: ProjectItem[] = [
  {
    category: "Web",
    title: "Kurumsal Web Siteleri",
    description:
      "Marka kimliğini güçlü gösteren, hızlı açılan, mobilde iyi çalışan ve kolay yönetilen modern web deneyimleri tasarlarız. Ziyaretçinin güvenini artıran görsel dil ile işletmenin ihtiyacı olan dönüşüm akışını birlikte kurarız.",
    mockImage: "/mock/thumb-campus.svg",
  },
  {
    category: "Operasyon",
    title: "CRM ve ERP Panelleri",
    description:
      "Satış, müşteri, stok, ekip ve süreç yönetimini tek yerde toplayan iş sistemleri geliştiririz. Kullanıcı yetkileri, rapor ekranları, bildirimler ve entegrasyonlarla operasyonu daha okunabilir hale getiririz.",
    mockImage: "/mock/thumb-enterprise.svg",
  },
  {
    category: "AI",
    title: "LLM ve Chatbot Asistanları",
    description:
      "Web sitelerine, iç panellere ve müşteri destek akışlarına bağlama duyarlı AI asistanları ekleriz. Asistanın neyi bileceğini, neyi sorması gerektiğini ve hangi aksiyonu tetikleyeceğini kontrollü şekilde planlarız.",
    mockImage: "/mock/thumb-ai.svg",
  },
  {
    category: "Voice",
    title: "Voice Assistant Akışları",
    description:
      "Sesli komut, çağrı karşılama ve müşteri destek senaryoları için yapay zeka destekli çözümler kurarız. Konuşma deneyimini doğal, anlaşılır ve marka diline uygun hale getiririz.",
    mockImage: "/mock/thumb-analytics.svg",
  },
  {
    category: "Automation",
    title: "Sosyal Medya AI Entegrasyonları",
    description:
      "İçerik, yanıt, kampanya ve raporlama süreçlerini hızlandıran güvenilir otomasyon akışları oluştururuz. Ekiplerin manuel yükünü azaltırken marka tonunu koruyan sistemler tasarlarız.",
    mockImage: "/mock/thumb-automation.svg",
  },
  {
    category: "Backend",
    title: "API ve Entegrasyon Sistemleri",
    description:
      "Ödeme, üyelik, bildirim, raporlama ve üçüncü parti servis bağlantılarını sağlam backend mimarileriyle birleştiririz. Böylece ürünün görünen arayüzü güçlü bir veri ve servis katmanıyla desteklenir.",
    mockImage: "/mock/thumb-enterprise.svg",
  },
];
