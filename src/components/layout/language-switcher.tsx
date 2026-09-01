"use client";

import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

const languages = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

const trToEn: Record<string, string> = {
  "Ana Sayfa": "Home",
  "Hakkımızda": "About",
  Hizmetler: "Services",
  Çözümler: "Solutions",
  Partnerler: "Partners",
  Süreç: "Process",
  İletişim: "Contact",
  "İş Ortaklarımız": "Our Partners",
  "Neler Yapıyoruz": "What We Do",
  "Neler Yapıyoruz?": "What We Do?",
  "Biz Kimiz?": "Who We Are?",
  "Neler Geliştiriyoruz?": "What Do We Build?",
  "Neden Biz?": "Why Us?",
  "Gerçek İhtiyaçlar İçin Dijital Ürünler": "Digital Products for Real Needs",
  "İş Ortaklarımız ve Ekosistemimiz": "Our Partners and Ecosystem",
  "Proje Durumları": "Project Status",
  "Yaptığımız ve devam eden işler": "Completed and ongoing work",
  "İş ortaklarımızla yürüttüğümüz web dönüşümü, CRM/ERP, AI entegrasyonu ve güvenlik süreçlerini tek bakışta takip edilebilir hale getiriyoruz.":
    "We make web transformation, CRM/ERP, AI integration and security processes with our partners easy to track at a glance.",
  "Platform ve web iş ortaklığı": "Platform and web partnership",
  "CRM hizmeti": "CRM service",
  "Danışmanlık ve web sitesi dönüşümü": "Consulting and website transformation",
  "Cybersecurity testleri": "Cybersecurity tests",
  "CRM, ERP ve AI entegrasyonu": "CRM, ERP and AI integration",
  "Web sitesi dönüşümü": "Website transformation",
  "CRM ve ERP entegrasyonu": "CRM and ERP integration",
  Aktif: "Active",
  "Aktif hizmet": "Active service",
  "Devam ediyor": "Ongoing",
  Bitti: "Completed",
  Yapılacak: "Planned",
  "Neden Emy Software Studios?": "Why Emy Software Studios?",
  "Nasıl Çalışıyoruz?": "How We Work?",
  "Bir Sonraki Dijital Ürününüzü Birlikte Planlayalım":
    "Let’s Plan Your Next Digital Product Together",
  "Üretim hattı": "Production Line",
  Keşif: "Discovery",
  Tasarım: "Design",
  Yayın: "Launch",
  "Web ve uygulama": "Web and Application",
  "AI ve otomasyon": "AI and Automation",
  "İş sistemleri": "Business Systems",
  Veri: "Data",
  Ürün: "Product",
  Büyüme: "Growth",
  Güven: "Trust",
  Hız: "Speed",
  Ölçek: "Scale",
  Bakım: "Maintenance",
  Raporlama: "Reporting",
  "aktif marka ve kurum teması": "active brand and institution touchpoints",
  "web, AI ve operasyon bakışı": "web, AI and operations perspective",
  "kurumsal iş geliştirme odağı": "B2B business development focus",
  "Ad Soyad": "Full Name",
  "E-posta": "Email",
  "Şirket / Kurum": "Company / Institution",
  "Proje Türü": "Project Type",
  Mesaj: "Message",
  "Mesaj Gönder": "Send Message",
  "Doğrudan iletişim": "Direct Contact",
  "Studio e-posta:": "Studio email:",
  "Kişisel e-posta:": "Personal email:",
  "Emy studio web:": "Emy studio web:",
  "Kişisel web:": "Personal web:",
  Konum: "Location",
  Sosyal: "Social",
  "Dijital ürünleri fikir aşamasından çalışan sisteme dönüştürüyoruz.":
    "We turn digital product ideas into working systems.",
  "Sistemleri Görünür Hale Getiriyoruz": "We Make Systems Visible",
  "Ürün, veri, otomasyon ve operasyon katmanlarını tek bakışta okunabilen akışlara dönüştürüyoruz. Her proje yalnızca ekranlardan değil; ölçülen, bağlanan ve büyüyen bir sistemden oluşur.":
    "We turn product, data, automation and operations layers into flows that can be read at a glance. Every project is made not only of screens, but of a measured, connected and growing system.",
  "Kullandığımız Teknolojiler": "Technologies We Use",
  "Projelerde güvenilir, sürdürülebilir ve ölçeklenebilir ürünler geliştirmek için modern web, yapay zeka, altyapı ve yazılım teknolojilerini birlikte kullanıyoruz.":
    "We combine modern web, AI, infrastructure and software technologies to build reliable, sustainable and scalable products.",
  "Ürün akışı": "Product Flow",
  "Fikirden çalışan sisteme": "From Idea to Working System",
  "Operasyon sinyalleri": "Operation Signals",
  "Bağlantı katmanı": "Connection Layer",
  Plan: "Plan",
  Kod: "Code",
  Ölçüm: "Measurement",
  "Emy Software Studios olarak modern web siteleri, kurumsal web arayüzleri, mobil ve web uygulamaları, CRM ve ERP sistemleri, yapay zeka entegrasyonları, LLM tabanlı çözümler, voice assistant akışları, sosyal medya süreçlerine yapay zeka entegrasyonu ve chatbot kurulumları geliştiriyoruz. Her projede yalnızca güzel görünen bir ekran değil; hızlı, güvenilir, ölçeklenebilir ve gerçek ihtiyaca cevap veren bir ürün ortaya çıkarmaya odaklanıyoruz. Teknolojiyi sade, anlaşılır ve sürdürülebilir şekilde kullanarak markaların iş süreçlerini güçlendiren çözümler üretmeyi hedefliyoruz.":
    "At Emy Software Studios, we build modern websites, corporate web interfaces, mobile and web applications, CRM and ERP systems, AI integrations, LLM-based solutions, voice assistant flows, AI integrations for social media processes and chatbot setups. In every project, we focus on creating not just a beautiful screen, but a fast, reliable, scalable product that responds to a real need. We aim to use technology in a simple, clear and sustainable way to produce solutions that strengthen brands' business processes.",
  "Profesyonel Web Site Geliştirme": "Professional Website Development",
  "Web ve Mobil Uygulama Yapımı": "Web and Mobile App Development",
  "Yapay Zeka ve Otomasyon": "Artificial Intelligence and Automation",
  "CRM ve ERP Sistemleri": "CRM and ERP Systems",
  "LLM Entegrasyonları": "LLM Integrations",
  "Chatbot Kurulumu": "Chatbot Setup",
  "Voice Assistant Sistemleri": "Voice Assistant Systems",
  "Sosyal Medya AI Entegrasyonu": "Social Media AI Integration",
  "API ve Backend Geliştirme": "API and Backend Development",
  "Kurumsal Web Siteleri": "Corporate Websites",
  "CRM ve ERP Panelleri": "CRM and ERP Dashboards",
  "LLM ve Chatbot Asistanları": "LLM and Chatbot Assistants",
  "Voice Assistant Akışları": "Voice Assistant Flows",
  "Sosyal Medya AI Entegrasyonları": "Social Media AI Integrations",
  "Mühendislik Disiplini": "Engineering Discipline",
  "AI Odaklı Üretim": "AI-Oriented Development",
  "Uzun Ömürlü Ürünler": "Long-Lived Products",
  "Kurumsal Güvenilirlik": "Institutional Reliability",
  "Modern Yazılım Mimarisi": "Modern Software Architecture",
  "Ölçeklenebilir Ürünler": "Scalable Products",
  "Uçtan Uca Destek": "End-to-End Support",
  "Keşif ve İhtiyaç Analizi": "Discovery and Needs Analysis",
  "UX ve Teknik Planlama": "UX and Technical Planning",
  "Geliştirme ve Entegrasyon": "Development and Integration",
  "Test ve Optimizasyon": "Testing and Optimization",
  "Yayın ve Sürekli Destek": "Launch and Continuous Support",
};

Object.assign(trToEn, {
  Hakkımızda: "About",
  Çözümler: "Solutions",
  Süreç: "Process",
  İletişim: "Contact",
  "Neler Geliştiriyoruz?": "What Do We Build?",
  "Bir Sonraki Dijital Ürününüzü Birlikte Planlayalım":
    "Let's Plan Your Next Digital Product Together",
  "Emy Software Studios; web sitesi geliştirme, uygulama yapımı, yapay zeka entegrasyonları, CRM/ERP sistemleri, LLM çözümleri, voice assistant, chatbot kurulumu ve sosyal medya AI otomasyonları üreten modern bir yazılım stüdyosudur.":
    "Emy Software Studios is a modern software studio building websites, applications, AI integrations, CRM/ERP systems, LLM solutions, voice assistant flows, chatbot setups and social media AI automations.",
  "Markaların dijital yüzünü yalnızca güzel görünen bir arayüz olarak değil; yönetilebilir, geliştirilebilir ve iş sonuçlarına dokunan bir ürün olarak ele alıyoruz. Kurumların ihtiyaç duyduğu güvenilirliği, girişimlerin ihtiyaç duyduğu hızı ve güncel yapay zeka teknolojilerinin sağladığı verimi tek üretim sürecinde buluşturuyoruz.":
    "We treat a brand's digital presence not only as a good-looking interface, but as a manageable, extensible product that affects business outcomes. We combine institutional reliability, startup speed and the efficiency of modern AI technologies in one production process.",
  "Mühendislik Disiplini": "Engineering Discipline",
  "AI Odaklı Üretim": "AI-Oriented Development",
  "Uzun Ömürlü Ürünler": "Long-Lived Products",
  "Planlı geliştirme, temiz kod, sürdürülebilir mimari ve yayın sonrası takip aynı masada ilerler.":
    "Planned development, clean code, sustainable architecture and post-launch follow-up move together.",
  "LLM, chatbot, voice assistant ve otomasyon fikirlerini gerçek iş akışlarına uygulanabilir şekilde bağlarız.":
    "We connect LLM, chatbot, voice assistant and automation ideas to real workflows in an applicable way.",
  "Web, uygulama, CRM ve ERP ürünlerini ölçeklenebilir, anlaşılır ve ölçülebilir değer üreten sistemler olarak kurarız.":
    "We build web, app, CRM and ERP products as scalable, understandable systems that create measurable value.",
  "Web ve uygulama": "Web and Application",
  "AI ve otomasyon": "AI and Automation",
  "İş sistemleri": "Business Systems",
  "Kurumsal vitrinlerden yönetim panellerine kadar modern, hızlı ve bakımı kolay arayüzler.":
    "Modern, fast and maintainable interfaces from corporate websites to management dashboards.",
  "LLM, chatbot, voice assistant ve sosyal medya AI akışlarını markanın operasyonuna entegre ederiz.":
    "We integrate LLM, chatbot, voice assistant and social media AI flows into the brand's operations.",
  "CRM, ERP, API ve veri akışlarını tek merkezden yönetilebilir, ölçülebilir sistemlere dönüştürürüz.":
    "We turn CRM, ERP, API and data flows into manageable, measurable systems from one center.",
  "Web sitelerinden yapay zeka entegrasyonlarına, CRM/ERP sistemlerinden voice assistant ve chatbot kurulumlarına kadar uçtan uca yazılım çözümleri üretiyoruz.":
    "We build end-to-end software solutions from websites and AI integrations to CRM/ERP systems, voice assistant flows and chatbot setups.",
  "Profesyonel Web Site Geliştirme": "Professional Website Development",
  "Web ve Mobil Uygulama Yapımı": "Web and Mobile App Development",
  "Yapay Zeka ve Otomasyon": "Artificial Intelligence and Automation",
  "CRM ve ERP Sistemleri": "CRM and ERP Systems",
  "LLM Entegrasyonları": "LLM Integrations",
  "API ve Backend Geliştirme": "API and Backend Development",
  "Markanızın güven veren yüzünü oluşturan hızlı, modern, SEO uyumlu ve kolay yönetilebilir web siteleri geliştiririz. Tasarım, performans ve içerik yapısını birlikte ele alırız.":
    "We build fast, modern, SEO-friendly and easy-to-manage websites that create a trustworthy face for your brand. We handle design, performance and content structure together.",
  "Kullanıcı deneyimi güçlü, ölçeklenebilir ve sürdürülebilir uygulamalar üretiriz. Panel, müşteri portalı, randevu, sipariş, takip ve özel iş akışı ihtiyaçlarını tek üründe toplarız.":
    "We build scalable, sustainable applications with strong user experience. We bring dashboards, customer portals, appointments, orders, tracking and custom workflows into one product.",
  "Tekrarlı işleri azaltan, karar süreçlerini hızlandıran ve ekiplerin zamanını daha değerli işlere ayırmasını sağlayan akıllı otomasyon sistemleri kurarız.":
    "We build smart automation systems that reduce repetitive work, speed up decisions and help teams spend time on higher-value tasks.",
  "Satış, müşteri ilişkileri, stok, ekip, finans ve operasyon takibini tek panelde birleştiren özel CRM/ERP çözümleri geliştiririz. Her modül gerçek kullanım alışkanlığına göre şekillenir.":
    "We build custom CRM/ERP solutions that combine sales, customer relations, stock, team, finance and operations tracking in one panel. Every module is shaped around real usage habits.",
  "OpenAI ve benzeri modelleri ürünlerinize güvenli, kontrollü ve iş odaklı şekilde entegre ederiz. Prompt akışı, veri erişimi, rol kurgusu ve kullanım sınırlarını dikkatle tasarlarız.":
    "We integrate OpenAI and similar models into your products safely, controllably and with a business focus. We carefully design prompt flows, data access, roles and usage limits.",
  "Web siteniz, WhatsApp akışlarınız veya iç operasyonlarınız için bağlama duyarlı chatbotlar kurarız. Sık sorular, teklif akışı, müşteri destek ve lead toplama süreçlerini hızlandırırız.":
    "We build context-aware chatbots for your website, WhatsApp flows or internal operations. We speed up FAQs, quote flows, customer support and lead collection.",
  "Sesli komut, çağrı karşılama, yönlendirme ve müşteri destek senaryoları için yapay zeka destekli asistanlar tasarlarız. Konuşma akışını marka tonuna uygun hale getiririz.":
    "We design AI-powered assistants for voice commands, call handling, routing and customer support scenarios. We align conversation flow with your brand tone.",
  "İçerik üretimi, yorum/mesaj yanıt akışları, kampanya planlama ve raporlama süreçlerini yapay zeka ile destekleyen entegrasyonlar geliştiririz.":
    "We build integrations that support content production, comment/message response flows, campaign planning and reporting with AI.",
  "Güvenilir veri yapıları, entegrasyonlar, kullanıcı yetkilendirme akışları ve büyümeye hazır servis mimarileri kurarız. Ürünün görünmeyen tarafını sağlam temele oturturuz.":
    "We build reliable data structures, integrations, user authorization flows and service architectures ready to grow. We put the invisible side of the product on solid foundations.",
  "Sistemleri Görünür Hale Getiriyoruz": "We Make Systems Visible",
  "Ürün, veri, otomasyon ve operasyon katmanlarını tek bakışta okunabilen akışlara dönüştürüyoruz. Her proje yalnızca ekranlardan değil; ölçülen, bağlanan ve büyüyen bir sistemden oluşur.":
    "We turn product, data, automation and operations layers into flows that can be read at a glance. Every project is made not only of screens, but of a measured, connected and growing system.",
  "Ürün akışı": "Product Flow",
  "Fikirden çalışan sisteme": "From Idea to Working System",
  Keşif: "Discovery",
  Yayın: "Launch",
  Ölçüm: "Measurement",
  "Operasyon sinyalleri": "Operation Signals",
  Hız: "Speed",
  Güven: "Trust",
  Ölçek: "Scale",
  Bakım: "Maintenance",
  "Gerçek İhtiyaçlar İçin Dijital Ürünler": "Digital Products for Real Needs",
  "Markanın görünen yüzünü, operasyonun arka planını ve yapay zeka destekli iş akışlarını birlikte düşünürüz. Böylece proje yalnızca yayınlanan bir ekran değil, ölçülebilir fayda üreten bir sistem haline gelir.":
    "We think about the visible face of the brand, the operational background and AI-supported workflows together. This turns the project into a system that creates measurable value, not just a published screen.",
  "Kurumsal Web Siteleri": "Corporate Websites",
  "CRM ve ERP Panelleri": "CRM and ERP Dashboards",
  "LLM ve Chatbot Asistanları": "LLM and Chatbot Assistants",
  "Voice Assistant Akışları": "Voice Assistant Flows",
  "Sosyal Medya AI Entegrasyonları": "Social Media AI Integrations",
  "API ve Entegrasyon Sistemleri": "API and Integration Systems",
  Operasyon: "Operations",
  "Detayları Gör": "View Details",
  "Marka kimliğini güçlü gösteren, hızlı açılan, mobilde iyi çalışan ve kolay yönetilen modern web deneyimleri tasarlarız. Ziyaretçinin güvenini artıran görsel dil ile işletmenin ihtiyacı olan dönüşüm akışını birlikte kurarız.":
    "We design modern web experiences that express your brand identity strongly, load quickly, work well on mobile and are easy to manage. We build the conversion flow your business needs together with a visual language that increases visitor trust.",
  "Satış, müşteri, stok, ekip ve süreç yönetimini tek yerde toplayan iş sistemleri geliştiririz. Kullanıcı yetkileri, rapor ekranları, bildirimler ve entegrasyonlarla operasyonu daha okunabilir hale getiririz.":
    "We build business systems that bring sales, customers, stock, teams and process management into one place. With user permissions, report screens, notifications and integrations, we make operations easier to read.",
  "Web sitelerine, iç panellere ve müşteri destek akışlarına bağlama duyarlı AI asistanları ekleriz. Asistanın neyi bileceğini, neyi sorması gerektiğini ve hangi aksiyonu tetikleyeceğini kontrollü şekilde planlarız.":
    "We add context-aware AI assistants to websites, internal dashboards and customer support flows. We carefully plan what the assistant should know, what it should ask and which actions it should trigger.",
  "Sesli komut, çağrı karşılama ve müşteri destek senaryoları için yapay zeka destekli çözümler kurarız. Konuşma deneyimini doğal, anlaşılır ve marka diline uygun hale getiririz.":
    "We build AI-powered solutions for voice commands, call handling and customer support scenarios. We make the conversation experience natural, clear and aligned with your brand language.",
  "İçerik, yanıt, kampanya ve raporlama süreçlerini hızlandıran güvenilir otomasyon akışları oluştururuz. Ekiplerin manuel yükünü azaltırken marka tonunu koruyan sistemler tasarlarız.":
    "We create reliable automation flows that speed up content, response, campaign and reporting processes. We design systems that reduce teams' manual workload while preserving the brand tone.",
  "Ödeme, üyelik, bildirim, raporlama ve üçüncü parti servis bağlantılarını sağlam backend mimarileriyle birleştiririz. Böylece ürünün görünen arayüzü güçlü bir veri ve servis katmanıyla desteklenir.":
    "We combine payment, membership, notification, reporting and third-party service connections with solid backend architectures. This supports the visible interface with a strong data and service layer.",
  Veri: "Data",
  Ürün: "Product",
  Büyüme: "Growth",
  "İş Ortaklarımız": "Our Partners",
  "İş Ortaklarımız ve Ekosistemimiz": "Our Partners and Ecosystem",
  "Farklı sektörlerden kurumlar, markalar ve teknoloji ekipleriyle birlikte sürdürülebilir dijital çözümler geliştiriyoruz. Her iş birliğini yalnızca teslim edilen bir proje olarak değil, markanın dijital kasını güçlendiren uzun vadeli bir ilişki olarak görüyoruz.":
    "We build sustainable digital solutions with institutions, brands and technology teams from different sectors. We see every collaboration not only as a delivered project, but as a long-term relationship that strengthens the brand's digital capability.",
  "Proje Durumları": "Project Status",
  "Yaptığımız ve devam eden işler": "Completed and ongoing work",
  "Platform ve web iş ortaklığı": "Platform and web partnership",
  "CRM hizmeti": "CRM service",
  "Danışmanlık ve web sitesi dönüşümü": "Consulting and website transformation",
  "CRM ve ERP entegrasyonu": "CRM and ERP integration",
  "Web sitesi dönüşümü": "Website transformation",
  "Devam ediyor": "Ongoing",
  Yapılacak: "Planned",
  "Kullandığımız Teknolojiler": "Technologies We Use",
  "Projelerde güvenilir, sürdürülebilir ve ölçeklenebilir ürünler geliştirmek için modern web, yapay zeka, altyapı ve yazılım teknolojilerini birlikte kullanıyoruz.":
    "We combine modern web, AI, infrastructure and software technologies to build reliable, sustainable and scalable products.",
  "Kurumların ihtiyaç duyduğu disiplinle, girişimlerin ihtiyaç duyduğu hız ve esnekliği bir araya getiriyoruz. Sade görünen ama arkasında güçlü mimari, iyi planlama ve ölçülebilir çıktı olan dijital ürünler geliştiriyoruz.":
    "We combine the discipline institutions need with the speed and flexibility startups need. We build digital products that look simple but are backed by strong architecture, good planning and measurable output.",
  "Kurumsal Güvenilirlik": "Institutional Reliability",
  "Modern Yazılım Mimarisi": "Modern Software Architecture",
  "Ölçeklenebilir Ürünler": "Scalable Products",
  "Uçtan Uca Destek": "End-to-End Support",
  "Üniversite, kurum ve şirket işleyişine uyumlu; düzenli, takip edilebilir ve net teslim süreçleriyle çalışırız. Her adımda neyin yapıldığını, neden yapıldığını ve sıradaki aksiyonu görünür tutarız.":
    "We work in a way that fits university, institution and company operations, with organized, trackable and clear delivery processes. At every step, we keep visible what is being done, why it is being done and what comes next.",
  "Bakımı kolay, test edilebilir ve büyümeye hazır kod yapısını projenin merkezinde tutarız. Bugünün ihtiyacını çözerken yarının entegrasyonlarını ve yeni modüllerini de hesaba katarız.":
    "We keep maintainable, testable and growth-ready code structure at the center of the project. While solving today's needs, we also account for tomorrow's integrations and new modules.",
  "Kullanıcı sayısı, ekip, veri ve iş ihtiyacı arttıkça zorlanmadan gelişebilen sistemler kurarız. Ürünü sadece ilk yayın anı için değil, büyüme süreci için de tasarlarız.":
    "We build systems that can evolve smoothly as users, teams, data and business needs grow. We design the product not only for first launch, but for the growth process as well.",
  "Analizden canlıya almaya, entegrasyondan sürekli iyileştirmeye kadar tek ekip olarak ilerleriz. Tasarım, yazılım, yapay zeka, bakım ve danışmanlık süreçleri birbirinden kopuk kalmaz.":
    "We move as one team from analysis to launch, from integration to continuous improvement. Design, software, AI, maintenance and consulting processes do not remain disconnected.",
  "Fikirden yayına kadar şeffaf, ölçülebilir ve sürdürülebilir bir geliştirme süreci izliyoruz. Her projede önce doğru problemi buluyor, sonra tasarım, yazılım, entegrasyon ve yayını aynı ritimde ilerletiyoruz.":
    "From idea to launch, we follow a transparent, measurable and sustainable development process. In every project, we first find the right problem, then move design, software, integration and launch forward in the same rhythm.",
  "Keşif ve İhtiyaç Analizi": "Discovery and Needs Analysis",
  "UX ve Teknik Planlama": "UX and Technical Planning",
  "Geliştirme ve Entegrasyon": "Development and Integration",
  "Test ve Optimizasyon": "Testing and Optimization",
  "Yayın ve Sürekli Destek": "Launch and Continuous Support",
  "Hedefleri, kullanıcıları, mevcut süreçleri, teknik kısıtları ve başarı kriterlerini birlikte netleştiririz. Projenin gerçekten hangi problemi çözeceğini en başta doğru tarif ederiz.":
    "We clarify goals, users, existing processes, technical constraints and success criteria together. At the very beginning, we define the real problem the project will solve.",
  "Akışları, ekranları, veri yapısını, AI kullanım noktalarını ve entegrasyon ihtiyaçlarını uygulanabilir bir yol haritasına dökeriz. Böylece geliştirme süreci tahmin edilebilir hale gelir.":
    "We turn flows, screens, data structure, AI usage points and integration needs into an actionable roadmap. This makes the development process predictable.",
  "Web, mobil, backend, CRM/ERP ve yapay zeka entegrasyonlarını kontrollü sprintlerle geliştiririz. Her modül gerçek kullanım senaryosuna göre test edilerek ilerler.":
    "We develop web, mobile, backend, CRM/ERP and AI integrations through controlled sprints. Every module moves forward after being tested against real usage scenarios.",
  "Performans, güvenlik, kullanılabilirlik, responsive görünüm ve edge-case testleriyle ürünü canlıya hazırlarız. Gerekli yerlerde hız, erişilebilirlik ve veri akışını iyileştiririz.":
    "We prepare the product for launch with performance, security, usability, responsive layout and edge-case testing. Where needed, we improve speed, accessibility and data flow.",
  "Canlıya alma sonrasında izleme, bakım, küçük iyileştirmeler ve yeni ihtiyaçlara göre geliştirme desteği sunarız. Ürünün sahada nasıl kullanıldığını takip ederiz.":
    "After launch, we provide monitoring, maintenance, small improvements and development support for new needs. We track how the product is used in the field.",
  "Web sitesi, uygulama, CRM/ERP veya yapay zeka entegrasyonu fikrinizi paylaşın; ihtiyaçlarınıza göre en doğru teknik yolu birlikte netleştirelim. Henüz sadece fikir aşamasında olsanız bile kapsamı sadeleştirip uygulanabilir bir plana çevirebiliriz.":
    "Share your website, app, CRM/ERP or AI integration idea; together we will clarify the best technical path for your needs. Even if it is still only an idea, we can simplify the scope and turn it into an actionable plan.",
  "Ad Soyad": "Full Name",
  "Şirket / Kurum": "Company / Institution",
  "Proje Türü": "Project Type",
  "Mesaj Gönder": "Send Message",
  "Gönderiliyor...": "Sending...",
  "Doğrudan iletişim": "Direct Contact",
  "Studio e-posta:": "Studio email:",
  "Kişisel e-posta:": "Personal email:",
  "Emy studio web:": "Emy studio web:",
  "Kişisel web:": "Personal web:",
  "Yeni bir ürün, mevcut sistemi yenileme, otomasyon fikri veya AI entegrasyonu için bize ulaşabilirsiniz. İlk konuşmada hedefleri, zamanlamayı ve en doğru başlangıç noktasını netleştiririz.":
    "You can contact us for a new product, renewing an existing system, an automation idea or AI integration. In the first conversation, we clarify goals, timing and the best starting point.",
  Konum: "Location",
  Sosyal: "Social",
  "ODTÜ Kuzey Kıbrıs / KALTEV Ekosistemi":
    "METU Northern Cyprus / KALTEV Ecosystem",
  "AI, yazılım ve dijital ürün geliştirme odaklı çalışmalar":
    "Work focused on AI, software and digital product development",
});

const enToTr = Object.fromEntries(
  Object.entries(trToEn).map(([tr, en]) => [en, tr]),
) as Record<string, string>;

const placeholders: Record<string, string> = {
  "Örn. web sitesi, CRM, LLM entegrasyonu, chatbot":
    "e.g. website, CRM, LLM integration, chatbot",
};

const reversePlaceholders = Object.fromEntries(
  Object.entries(placeholders).map(([tr, en]) => [en, tr]),
) as Record<string, string>;

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function createNormalizedDictionary(dictionary: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(dictionary).map(([key, value]) => [normalizeText(key), value]),
  ) as Record<string, string>;
}

function replaceTextNodes(root: ParentNode, dictionary: Record<string, string>) {
  const normalizedDictionary = createNormalizedDictionary(dictionary);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const current = node.textContent ?? "";
    const trimmed = current.trim();
    const next = dictionary[trimmed] ?? normalizedDictionary[normalizeText(current)];

    if (next) {
      node.textContent = current.replace(trimmed, next);
    }

    node = walker.nextNode();
  }
}

function replaceAttributes(dictionary: Record<string, string>) {
  document.querySelectorAll<HTMLElement>("[placeholder]").forEach((element) => {
    const current = element.getAttribute("placeholder");
    if (current && dictionary[current]) {
      element.setAttribute("placeholder", dictionary[current]);
    }
  });
}

function applyLanguage(language: LanguageCode) {
  if (typeof document === "undefined") return;

  const dictionary =
    language === "en"
      ? { ...trToEn, ...placeholders }
      : { ...enToTr, ...reversePlaceholders };

  document.documentElement.lang = language;
  replaceTextNodes(document.body, dictionary);
  replaceAttributes(dictionary);
}

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<LanguageCode>("tr");
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("emy-language");
    const next = saved === "tr" || saved === "en" ? saved : "tr";

    const frame = window.requestAnimationFrame(() => {
      setLanguage(next);
      applyLanguage(next);
      setHasHydrated(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    applyLanguage(language);
  }, [hasHydrated, language]);

  function changeLanguage(next: LanguageCode) {
    setLanguage(next);
    window.localStorage.setItem("emy-language", next);
    requestAnimationFrame(() => applyLanguage(next));
  }

  return (
    <div className="relative z-[90] inline-flex items-center gap-1 rounded-full border border-white/18 bg-white/[0.08] p-1 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl">
      <Languages className="ml-2 size-3.5 text-accent" aria-hidden />
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => changeLanguage(item.code)}
          className={`relative z-[1] rounded-full px-2.5 py-1 transition-colors ${
            language === item.code
              ? "bg-white text-background"
              : "text-foreground-soft hover:bg-white/10 hover:text-white"
          }`}
          aria-pressed={language === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
