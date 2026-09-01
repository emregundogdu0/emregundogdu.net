import Link from "next/link";

import { navLinks } from "@/content/navigation";
import {
  contactEmail,
  personalLinks,
  studioEmail,
  studioWebsite,
} from "@/content/contact";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

import { BrandLogo } from "@/components/layout/brand-logo";

const serviceTitles = services.map((s) => s.title).slice(0, 6);

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "border-t border-border-subtle bg-background-secondary/80 backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo variant="footer" className="mb-4" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Modern software, AI-powered systems, and digital products — built
              with engineering discipline inside the ODTÜ Northern Cyprus KALTEV
              ecosystem.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-soft">
              Quick links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-soft">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceTitles.map((title) => (
                <li key={title}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-soft">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${studioEmail}`}
                  className="break-all transition-colors hover:text-foreground"
                >
                  {studioEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all transition-colors hover:text-foreground"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`https://${studioWebsite}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {studioWebsite}
                </a>
              </li>
              {personalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>ODTÜ Northern Cyprus / KALTEV Ecosystem</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 border-t border-border-subtle pt-8 text-center text-sm text-muted-foreground sm:text-left">
          © 2026 Emy Software Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
