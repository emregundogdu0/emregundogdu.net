export interface PartnerSlot {
  id: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const partnerSlots: PartnerSlot[] = [
  { id: "viptech", imageSrc: "/partners/viptech-trimmed.png", imageAlt: "Viptech" },
  { id: "alfa", imageSrc: "/partners/alfa-trimmed.png", imageAlt: "Alfa Emlak" },
  { id: "onat-serin", imageSrc: "/partners/onat-serin-trimmed.png", imageAlt: "Onat Serin" },
  { id: "odtu-kaltev", imageSrc: "/partners/kaltev-logo-white-transparent-trimmed.png", imageAlt: "ODTU KALTEV" },
  { id: "imo", imageSrc: "/partners/imo-bg-trimmed.png", imageAlt: "Chamber of Civil Engineers" },
  { id: "sharaf", imageSrc: "/partners/sharaf-electro-store-trimmed.png", imageAlt: "Sharaf Electro Store" },
  { id: "kibris-emlak", imageSrc: "/partners/kibris-emlak-sitesi-white-logo-trimmed.png", imageAlt: "Kibris Emlak Sitesi" },
  { id: "ncc-hocam", imageSrc: "/partners/ncc-hocam-logo-trimmed.png", imageAlt: "NCC Hocam" },
];
