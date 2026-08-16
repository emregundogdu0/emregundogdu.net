"use client";

import { Mail } from "lucide-react";
import type { SocialLink } from "@/types/content";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.6 2.7 1.1.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.5 8.98h3v12h-3v-12Zm5.5 0h2.9v1.64h.04c.4-.76 1.4-1.56 2.88-1.56 3.08 0 3.65 2.03 3.65 4.67v7.25h-3v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38v6.55h-2.88v-12Z"
      />
    </svg>
  );
}

function HuggingFaceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2c.7 0 1.3.4 1.6 1l1.2 2.4 2.6.4c.8.1 1.4.7 1.5 1.5.1.8-.3 1.5-1 1.9l-1.9 1.1.5 2.6c.1.8-.3 1.6-1.1 1.9-.7.3-1.6.1-2.1-.5L12 13.3l-2.3 1.2c-.6.6-1.4.8-2.1.5-.8-.3-1.2-1.1-1.1-1.9l.5-2.6-1.9-1.1c-.7-.4-1.1-1.1-1-1.9.1-.8.7-1.4 1.5-1.5l2.6-.4L10.4 3.2c.3-.6.9-1 1.6-1Z"
      />
    </svg>
  );
}

const icons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  huggingface: HuggingFaceIcon,
};

export function SocialIcons({
  links,
  className,
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {links.map((link) => {
        const Icon = icons[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={link.id === "email" ? undefined : "_blank"}
              rel={link.id === "email" ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 transition duration-200 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none"
            >
              <Icon className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
