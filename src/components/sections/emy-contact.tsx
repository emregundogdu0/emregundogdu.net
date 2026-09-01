"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Textarea } from "@/components/ui/textarea";
import {
  contactEmail,
  personalLinks,
  personalWebsite,
  studioEmail,
  studioWebsite,
} from "@/content/contact";

const directInfo = [
  { label: "Studio e-posta:", value: studioEmail, href: `mailto:${studioEmail}` },
  { label: "Kişisel e-posta:", value: contactEmail, href: `mailto:${contactEmail}` },
  { label: "Emy studio web:", value: studioWebsite, href: `https://${studioWebsite}` },
  { label: "Kişisel web:", value: personalWebsite, href: `https://${personalWebsite}` },
] as const;

export function EmyContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      setMessage(data.message ?? "");
      setStatus(response.ok ? "sent" : "error");

      if (response.ok) {
        event.currentTarget.reset();
      }
    } catch {
      setStatus("error");
      setMessage("Mesaj gönderilemedi. Lütfen e-posta ile deneyin.");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="emy-contact-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="emy-contact-heading"
          title="Bir Sonraki Dijital Ürününüzü Birlikte Planlayalım"
          subtitle="Web sitesi, uygulama, CRM/ERP veya yapay zeka entegrasyonu fikrinizi paylaşın; ihtiyaçlarınıza göre en doğru teknik yolu birlikte netleştirelim. Henüz sadece fikir aşamasında olsanız bile kapsamı sadeleştirip uygulanabilir bir plana çevirebiliriz."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={submitContact} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Şirket / Kurum</Label>
                <Input id="company" name="company" autoComplete="organization" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectType">Proje Türü</Label>
                <Input
                  id="projectType"
                  name="projectType"
                  placeholder="Örn. web sitesi, CRM, LLM entegrasyonu, chatbot"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mesaj</Label>
              <Textarea id="message" name="message" className="min-h-32" required />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={status === "sending"} className="w-full sm:w-fit">
                <Send className="size-4" aria-hidden />
                {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
              </Button>
              {message ? (
                <p className="text-sm text-muted-foreground" role="status">
                  {message}
                </p>
              ) : null}
            </div>
          </form>

          <aside className="border-l border-border-subtle p-5">
            <h3 className="text-lg font-semibold text-foreground">
              Doğrudan iletişim
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Yeni bir ürün, mevcut sistemi yenileme, otomasyon fikri veya AI
              entegrasyonu için bize ulaşabilirsiniz. İlk konuşmada hedefleri,
              zamanlamayı ve en doğru başlangıç noktasını netleştiririz.
            </p>

            <div className="mt-6 grid gap-3">
              {directInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block border-l border-accent/35 py-2 pl-4 text-sm transition hover:border-accent-electric hover:text-foreground"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wider text-foreground-soft">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-all text-muted-foreground">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 border-l border-accent/35 py-2 pl-4">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground-soft">
                <MapPin className="size-4 text-accent" aria-hidden />
                Konum
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                ODTÜ Kuzey Kıbrıs / KALTEV Ekosistemi
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                AI, yazılım ve dijital ürün geliştirme odaklı çalışmalar
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {personalLinks.map((link) => {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-3 py-2 text-sm text-muted-foreground transition hover:border-accent/40 hover:text-foreground"
                  >
                    <Mail className="size-4" aria-hidden />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
