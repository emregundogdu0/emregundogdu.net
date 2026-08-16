import { site } from "@/lib/content";
import { SocialIcons } from "@/components/layout/social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
        </p>
        <SocialIcons links={site.social} className="flex gap-2" />
      </div>
    </footer>
  );
}
