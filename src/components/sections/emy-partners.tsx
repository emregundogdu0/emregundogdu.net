import { PartnerGrid } from "@/components/partner-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { partnerSlots } from "@/content/partners";

const projectStatuses = [
  { title: "Platform ve web iş ortaklığı", state: "Devam ediyor" },
  { title: "CRM hizmeti", state: "Aktif hizmet" },
  { title: "Danışmanlık ve web sitesi dönüşümü", state: "Bitti" },
  { title: "CRM ve ERP entegrasyonu", state: "Yapılacak" },
] as const;

export function EmyPartnersSection() {
  return (
    <section
      id="partners"
      aria-labelledby="emy-partners-heading"
      className="scroll-mt-20 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="emy-partners-heading"
          title="İş Ortaklarımız ve Ekosistemimiz"
          subtitle="Farklı sektörlerden kurumlar, markalar ve teknoloji ekipleriyle birlikte sürdürülebilir dijital çözümler geliştiriyoruz. Her iş birliğini yalnızca teslim edilen bir proje olarak değil, markanın dijital kasını güçlendiren uzun vadeli bir ilişki olarak görüyoruz."
        />

        <PartnerGrid partners={partnerSlots} />

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {projectStatuses.map((item) => (
            <div key={item.title} className="border-l border-accent/35 p-4">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent">
                {item.state}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
