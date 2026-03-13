import { FadeIn } from "@/components/ui/FadeIn";

const STATS = [
  { n: "+500", l: "Casos Resueltos" },
  { n: "+20",  l: "Países Operados" },
  { n: "98%",  l: "Tasa de Éxito" },
];

export function HomePurpose() {
  return (
    <section className="bg-foreground text-white py-32 px-6 relative overflow-hidden" style={{ borderTop: '2px solid #EBD723' }}>
      <div className="absolute top-0 left-4 text-[220px] font-heading text-white/[0.03] leading-none select-none pointer-events-none">"</div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="typo-eyebrow mb-10 text-white/40">Propósito</p>
          <h2 className="font-sans text-3xl md:text-[2.6rem] lg:text-5xl leading-tight mb-20 italic text-white/90">
            "Transformamos la complejidad migratoria en ventaja competitiva para organizaciones que operan sin fronteras."
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            {STATS.map((s, i) => (
              <div key={i}>
                <p className="font-heading text-6xl md:text-7xl font-bold mb-3" style={{ color: '#EBD723' }}>{s.n}</p>
                <p className="typo-eyebrow text-white/60">{s.l}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
