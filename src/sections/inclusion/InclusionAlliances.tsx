import { FadeIn } from "@/components/ui/FadeIn";

const ORGS = [
  { name: "OIM",      full: "Organización Internacional para las Migraciones" },
  { name: "IMSS",     full: "Instituto Mexicano del Seguro Social" },
  { name: "STPS",     full: "Secretaría del Trabajo y Previsión Social" },
  { name: "INAMI",    full: "Instituto Nacional de Migración" },
  { name: "COPARMEX", full: "Confederación Patronal de la República Mexicana" },
  { name: "AMCHAM",   full: "Cámara de Comercio Americana México" },
];

export function InclusionAlliances() {
  return (
    <section className="py-24 px-6 border-y border-border bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-28">
            <div className="lg:w-2/5">
              <p className="typo-eyebrow text-primary mb-4">Alianzas</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Red de organizaciones colaboradoras
              </h2>
              <p className="font-sans text-xl text-muted-foreground leading-relaxed">
                Colaboramos con organismos nacionales e internacionales comprometidos con la integración digna y efectiva del talento migrante en el mercado laboral.
              </p>
            </div>
            <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-8">
              {ORGS.map((org, i) => (
                <div key={i} className="pt-5 border-t border-border">
                  <p className="font-heading text-xl font-bold text-foreground mb-1">{org.name}</p>
                  <p className="font-sans text-sm text-muted-foreground leading-snug">{org.full}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
