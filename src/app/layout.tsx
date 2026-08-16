import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { MotionRoot } from "@/components/motion/motion-root";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { NeuralNoise } from "@/components/ui/neural-noise";
import { LocaleProvider } from "@/i18n/locale-provider";
import { dictionaries } from "@/i18n/dictionaries";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const defaultSite = dictionaries.tr.site;

export const metadata: Metadata = {
  title: `${defaultSite.name} — AI Developer & Project Manager`,
  description: defaultSite.bio,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${instrument.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative isolate min-h-full min-w-0 overflow-x-clip bg-[#07080c] font-sans text-foreground">
        <MotionRoot>
          <LocaleProvider>
            <SmoothScroll />
            <NeuralNoise color={[0.133, 0.827, 0.933]} opacity={0.85} speed={0.001} />
            <div className="relative z-10">
              <SkipToContent />
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </LocaleProvider>
        </MotionRoot>
      </body>
    </html>
  );
}
