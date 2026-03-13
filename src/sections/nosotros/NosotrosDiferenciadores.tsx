import { FadeIn } from "@/components/ui/FadeIn";

const VALUES = [
  { title: "Rigor Técnico",     desc: "Excelencia jurídica en el análisis de cada caso. Nunca asumimos, siempre verificamos." },
  { title: "Innovación",        desc: "Plataforma propietaria y herramientas de IA para optimizar cada etapa del proceso." },
  { title: "Transparencia",     desc: "Comunicación clara y proactiva. El cliente siempre sabe exactamente en qué punto está su caso." },
  { title: "Compromiso Total",  desc: "Asumimos los objetivos del cliente como propios. Su éxito es nuestra única métrica." },
];

const STATS = [
  { n: "+500", l: "Casos corporativos resueltos" },
  { n: "+20",  l: "Países con cobertura activa" },
  { n: "15+",  l: "Años de trayectoria consolidada" },
];

export function NosotrosDiferenciadores() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="mb-20">
          <p className="typo-eyebrow text-primary mb-4">Diferenciadores</p>
          <h2 className="typo-title text-5xl md:text-6xl text-foreground leading-tight">Por qué nos eligen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {VALUES.map((v, i) => (
              <div key={i} className="pt-8 border-t-2 border-accent">
                <h3 className="font-heading text-2xl font-bold mb-4">{v.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-border pt-16">
            {STATS.map((s, i) => (
              <div key={i} className="flex items-baseline gap-5">
                <span className="font-heading text-5xl md:text-6xl font-bold" style={{ color: '#EBD723' }}>{s.n}</span>
                <span className="font-heading text-sm uppercase tracking-widest text-muted-foreground max-w-[140px]">{s.l}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
