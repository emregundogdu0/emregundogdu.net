"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { useLocale } from "@/i18n/locale-provider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { nav, site, ui } = useLocale();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-[#0a0a0b]/55 pt-[env(safe-area-inset-top)] backdrop-blur-md supports-backdrop-filter:bg-[#0a0a0b]/40">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <a href="#hero" className="flex shrink-0 items-center" aria-label={site.name}>
          <Image
            src="/brand/logo.svg"
            alt=""
            width={173}
            height={171}
            className="h-8 w-auto sm:h-9"
            priority
          />
          <span className="sr-only">{site.name}</span>
        </a>

        <nav aria-label={ui.mainNav} className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm text-zinc-400 transition duration-200 hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none lg:px-3"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<a href="/emy-studios" />}
            variant="outline"
            className="hidden h-10 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10 xl:inline-flex"
          >
            emy
          </Button>
          <LanguageToggle />
          <Button
            nativeButton={false}
            render={<a href="#contact" />}
            className="hidden h-10 bg-white px-4 text-zinc-950 hover:bg-zinc-200 xl:inline-flex"
          >
            {ui.contactCta}
          </Button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 xl:hidden"
                  aria-label={ui.openMenu}
                />
              }
            >
              <Menu className="size-4" />
            </DialogTrigger>
            <DialogContent className="max-h-[min(90dvh,36rem)] overflow-y-auto bg-[#111] sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>{ui.menu}</DialogTitle>
              </DialogHeader>
              <nav className="grid gap-1">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/emy-studios"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-200 hover:bg-white/5 hover:text-white"
                >
                  emy
                </a>
                <Button
                  nativeButton={false}
                  render={<a href="#contact" onClick={() => setOpen(false)} />}
                  className="mt-3 h-11 bg-white text-zinc-950 hover:bg-zinc-200"
                >
                  {ui.contactCta}
                </Button>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
