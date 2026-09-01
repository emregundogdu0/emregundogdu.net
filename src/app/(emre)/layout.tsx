import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { NeuralNoise } from "@/components/ui/neural-noise";

export default function EmreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NeuralNoise color={[0.133, 0.827, 0.933]} opacity={0.85} speed={0.001} />
      <SkipToContent />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
