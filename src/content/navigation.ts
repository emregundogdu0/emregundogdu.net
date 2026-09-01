export const navLinks = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#services", label: "Hizmetler" },
  { href: "#projects", label: "Çözümler" },
  { href: "#partners", label: "Partnerler" },
  { href: "#process", label: "Süreç" },
  { href: "#contact", label: "İletişim" },
] as const;

export type NavLink = (typeof navLinks)[number];
