export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Keşif ve İhtiyaç Analizi",
    description:
      "Hedefleri, kullanıcıları, mevcut süreçleri, teknik kısıtları ve başarı kriterlerini birlikte netleştiririz. Projenin gerçekten hangi problemi çözeceğini en başta doğru tarif ederiz.",
  },
  {
    step: 2,
    title: "UX ve Teknik Planlama",
    description:
      "Akışları, ekranları, veri yapısını, AI kullanım noktalarını ve entegrasyon ihtiyaçlarını uygulanabilir bir yol haritasına dökeriz. Böylece geliştirme süreci tahmin edilebilir hale gelir.",
  },
  {
    step: 3,
    title: "Geliştirme ve Entegrasyon",
    description:
      "Web, mobil, backend, CRM/ERP ve yapay zeka entegrasyonlarını kontrollü sprintlerle geliştiririz. Her modül gerçek kullanım senaryosuna göre test edilerek ilerler.",
  },
  {
    step: 4,
    title: "Test ve Optimizasyon",
    description:
      "Performans, güvenlik, kullanılabilirlik, responsive görünüm ve edge-case testleriyle ürünü canlıya hazırlarız. Gerekli yerlerde hız, erişilebilirlik ve veri akışını iyileştiririz.",
  },
  {
    step: 5,
    title: "Yayın ve Sürekli Destek",
    description:
      "Canlıya alma sonrasında izleme, bakım, küçük iyileştirmeler ve yeni ihtiyaçlara göre geliştirme desteği sunarız. Ürünün sahada nasıl kullanıldığını takip ederiz.",
  },
];
