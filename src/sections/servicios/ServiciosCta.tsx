import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

const COMPLEMENTARY = [
  { title: "Asesoría Fiscal Internacional",    desc: "Planificación fiscal para expatriados y ejecutivos con presencia en múltiples jurisdicciones, coordinada con nuestros partners tributarios." },
  { title: "Estructuración Laboral",           desc: "Revisión y redacción de contratos laborales, addenda de expatriación y estructuras de compensación internacional." },
  { title: "Consultoría Estratégica Bespoke",  desc: "Asesoramiento de alto nivel para diseñar la estructura migratoria óptima en aperturas de filiales o proyectos transnacionales." },
  { title: "Due Diligence Migratoria",         desc: "Revisión del historial migratorio de ejecutivos clave en procesos de M&A o incorporación de talento directivo senior." },
  { title: "Formación Corporativa",            desc: "Talleres especializados para equipos de RRHH, legal y compliance sobre normativa migratoria vigente y mejores prácticas." },
];

export function ServiciosComplementarios() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start">
            <div className="lg:w-2/5 lg:sticky lg:top-32">
              <p className="typo-eyebrow text-primary mb-4">Adicionales</p>
              <h2 className="typo-title text-4xl md:text-5xl text-foreground leading-tight mb-6">
                Servicios Complementarios
              </h2>
              <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-10">
                Una suite de servicios adicionales que complementa nuestra oferta principal y asegura la operación corporativa sin fricciones.
              </p>
              <Link href="/contacto" className="inline-block px-9 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
                Agendar consulta
              </Link>
            </div>
            <div className="lg:w-3/5 space-y-0 border-t border-border">
              {COMPLEMENTARY.map((item, i) => (
                <div key={i} className="py-10 border-b border-border group cursor-default">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <span className="font-heading text-sm text-muted-foreground shrink-0 mt-1">0{i + 1}</span>
                  </div>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed mt-4 max-w-2xl">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
