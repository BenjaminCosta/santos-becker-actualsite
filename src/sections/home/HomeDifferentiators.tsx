import { FadeIn } from "@/components/ui/FadeIn";

const DIFFERENTIATORS = [
  { title: "Expertise Jurídico Profundo", desc: "Análisis técnico riguroso para anticipar contingencias y asegurar la viabilidad legal de cada caso." },
  { title: "Tecnología de Vanguardia",    desc: "Plataforma propietaria que otorga visibilidad total del estatus migratorio en tiempo real." },
  { title: "Enfoque Bespoke",             desc: "Atención personalizada y estratégica para altos ejecutivos, alejada de procesos industrializados." },
  { title: "Red Global de Alianzas",      desc: "Conexiones con firmas líderes en múltiples jurisdicciones para facilitar procesos multinacionales." },
];

export function HomeDifferentiators() {
  return (
    <section className="py-32 px-6 max-w-[1440px] mx-auto">
      <FadeIn>
        <div className="mb-20">
          <p className="typo-eyebrow text-primary mb-4">Por qué elegirnos</p>
          <h2 className="typo-title text-5xl md:text-6xl text-foreground">Una firma diferente</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">
          {DIFFERENTIATORS.map((item, i) => (
            <div key={i} className="pt-8 border-t-2 border-accent relative overflow-hidden">
              <div className="absolute -top-6 -right-2 text-[110px] font-heading font-bold text-foreground opacity-[0.04] pointer-events-none leading-none">0{i + 1}</div>
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold mb-4">{item.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
