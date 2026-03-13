import { FadeIn } from "@/components/ui/FadeIn";

const STEPS = [
  { n: "01", title: "Diagnóstico Corporativo",    desc: "Análisis de la estructura organizacional, proporciones de contratación y riesgos regulatorios actuales." },
  { n: "02", title: "Estrategia de Cumplimiento", desc: "Diseño de un plan de acción personalizado para garantizar el cumplimiento normativo en cada contratación." },
  { n: "03", title: "Implementación Documental",  desc: "Gestión de todos los contratos, registros y trámites ante las autoridades competentes." },
  { n: "04", title: "Monitoreo Continuo",          desc: "Seguimiento periódico para actualizar los expedientes y anticipar cambios regulatorios." },
];

const STATS = [
  { n: "100%", l: "Cumplimiento garantizado" },
  { n: "+15",  l: "Países con cobertura" },
  { n: "360°", l: "Visibilidad del proceso" },
];

export function InclusionMethodology() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="mb-20">
            <p className="typo-eyebrow text-primary mb-4">Metodología</p>
            <h2 className="typo-title text-4xl md:text-5xl text-foreground leading-tight">
              Acción concreta
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="right">
            <div className="space-y-0 border-t border-border">
              {STEPS.map((item, i) => (
                <div key={i} className="py-10 border-b border-border last:border-0 group">
                  <div className="flex items-start gap-6">
                    <span className="font-heading text-2xl font-bold shrink-0" style={{ color: '#EBD723', opacity: 0.5 }}>{item.n}</span>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="font-sans text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="w-full h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=960&q=80"
                  alt="Inclusión Laboral"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-foreground text-white p-10 grid grid-cols-3 gap-6 text-center">
                {STATS.map((s, i) => (
                  <div key={i}>
                    <p className="font-heading text-3xl md:text-4xl font-bold mb-1" style={{ color: '#EBD723' }}>{s.n}</p>
                    <p className="font-heading text-[9px] uppercase tracking-[0.15em] text-white/50">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
