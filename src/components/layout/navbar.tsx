"use client";

import { Menu, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/navigation";
import { cn } from "@/lib/utils";

const ctaButtonClassName =
  "border border-violet-300/25 bg-[radial-gradient(circle_at_78%_30%,rgba(167,139,250,0.42),transparent_38%),linear-gradient(135deg,rgba(5,5,8,0.96),rgba(28,18,58,0.92)_52%,rgba(9,7,18,0.96))] text-white shadow-[0_0_34px_-12px_rgba(167,139,250,0.95),0_18px_48px_-24px_rgba(124,58,237,0.8),inset_0_1px_0_rgba(255,255,255,0.18)] hover:border-violet-200/45 hover:bg-[radial-gradient(circle_at_78%_30%,rgba(196,181,253,0.5),transparent_38%),linear-gradient(135deg,rgba(5,5,8,0.96),rgba(38,24,78,0.94)_52%,rgba(9,7,18,0.96))] hover:shadow-[0_0_46px_-10px_rgba(167,139,250,1),0_18px_52px_-22px_rgba(124,58,237,0.9)]";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function scrollSnapshot() {
  return window.scrollY > 24;
}

export function Navbar() {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    scrollSnapshot,
    () => false,
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background,backdrop-filter,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-accent-electric/25 bg-background/75 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.85)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-[3.75rem] sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <BrandLogo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="liquid-glass-nav rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            nativeButton={false}
            render={<a href="/" />}
            variant="secondary"
            size="sm"
            className="uppercase tracking-wider"
          >
            Emre Gündoğdu
          </Button>
          <LanguageSwitcher />
          <Button
            nativeButton={false}
            render={<a href="#contact" />}
            className={ctaButtonClassName}
          >
            Let&apos;s Build Together
          </Button>
        </div>

        <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
          <DialogTrigger
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-foreground-soft outline-none transition-colors hover:bg-white/[0.08] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className={cn(
              "left-auto right-0 top-0 z-[70] flex h-dvh w-[min(100%,20rem)] max-w-none translate-x-0 translate-y-0 flex-col rounded-none border-l border-border bg-background-secondary/95 p-6 shadow-2xl backdrop-blur-xl",
            )}
          >
              <div className="mb-8 flex items-center justify-between">
                <DialogTitle className="text-lg font-semibold text-foreground">
                  Menu
                </DialogTitle>
                <DialogClose
                  className="rounded-lg p-2 text-muted-foreground hover:bg-white/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </DialogClose>
              </div>
              <DialogDescription className="sr-only">
                Site navigation links
              </DialogDescription>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <DialogClose
                      render={<a href={link.href} />}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground-soft transition-colors hover:bg-white/[0.06] hover:text-foreground"
                    >
                      {link.label}
                    </DialogClose>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <LanguageSwitcher />
              </div>
              <div className="mt-auto border-t border-border-subtle pt-6">
                <Button
                  nativeButton={false}
                  render={<a href="/" />}
                  variant="secondary"
                  className="mb-3 w-full uppercase tracking-wider"
                >
                  Emre Gündoğdu
                </Button>
                <Button
                  nativeButton={false}
                  render={<a href="#contact" />}
                  className={cn("w-full", ctaButtonClassName)}
                >
                  Let&apos;s Build Together
                </Button>
              </div>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
