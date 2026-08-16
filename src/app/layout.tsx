import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionRoot } from "@/components/motion/motion-root";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { NeuralNoise } from "@/components/ui/neural-noise";
import { site } from "@/lib/content";
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

export const metadata: Metadata = {
  title: `${site.name} — AI Developer & Project Manager`,
  description: site.bio,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${instrument.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="relative isolate min-h-full min-w-0 overflow-x-clip bg-[#07080c] font-sans text-foreground">
        <MotionRoot>
          <SmoothScroll />
          <NeuralNoise color={[0.133, 0.827, 0.933]} opacity={0.85} speed={0.001} />
          <div className="relative z-10">
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-zinc-950"
            >
              İçeriğe geç
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </MotionRoot>
      </body>
    </html>
  );
}
