"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Check, Copy, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SocialIcons } from "@/components/layout/social-icons";
import { useLocale } from "@/i18n/locale-provider";

export function ContactSection() {
  const { site, ui } = useLocale();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, ui.validationName),
        email: z.string().trim().email(ui.validationEmail),
        message: z.string().trim().min(12, ui.validationMessage),
      }),
    [ui.validationName, ui.validationEmail, ui.validationMessage],
  );

  async function copyEmail() {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      name: String(new FormData(form).get("name") ?? ""),
      email: String(new FormData(form).get("email") ?? ""),
      message: String(new FormData(form).get("message") ?? ""),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const subject = encodeURIComponent(`Portfolio contact — ${parsed.data.name}`);
      const body = encodeURIComponent(
        `${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow={ui.contactEyebrow}
      title={ui.contactTitle}
      description={ui.contactDescription}
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-xl">
            <p className="text-sm text-muted-foreground">{ui.emailLabel}</p>
            <p className="mt-2 font-mono text-sm text-foreground">{site.email}</p>
            <Button
              type="button"
              variant="outline"
              onClick={copyEmail}
              className="mt-4 h-10 border-white/15"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? ui.copied : ui.copyEmail}
            </Button>
            <SocialIcons links={site.social} className="mt-8 flex gap-3" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-xl"
            noValidate
          >
            <div className="grid gap-2">
              <Label htmlFor="name">{ui.nameLabel}</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                className="h-11"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{ui.emailLabel}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="h-11"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="text-sm text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{ui.messageLabel}</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                className="min-h-32"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="text-sm text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <Button
              type="submit"
              disabled={status === "sending"}
              className="h-11 bg-white text-zinc-950 hover:bg-zinc-200"
            >
              <Send className="size-4" />
              {status === "sending" ? ui.sending : ui.send}
            </Button>
            {status === "sent" ? (
              <p className="text-sm text-zinc-300" role="status">
                {ui.sentOk}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-destructive" role="alert">
                {ui.sendError}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
