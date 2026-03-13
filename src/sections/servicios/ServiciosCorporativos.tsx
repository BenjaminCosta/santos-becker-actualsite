import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

const CORPORATE_SERVICES = [
  {
    title: "Visas Corporativas",
    desc: "Gestión integral de visas de trabajo para ejecutivos y personal especializado, asegurando la movilidad fluida del talento en su organización global.",
    bullets: ["Visas de transferencia intracompany (L-1, ICT)", "Permisos de trabajo temporal", "Visas para inversionistas y directivos", "Renovaciones y extensiones estratégicas"],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    num: "01"
  },
  {
    title: "Compliance Migratorio",
    desc: "Auditorías preventivas y diseño de políticas internas para garantizar que su empresa cumpla rigurosamente con las normativas vigentes, mitigando riesgos regulatorios.",
    bullets: ["Auditorías de cumplimiento normativo", "Diseño de políticas de movilidad corporativa", "Capacitación especializada a equipos RRHH", "Representación en inspecciones gubernamentales"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    num: "02"
  },
  {
    title: "Movilidad de Talento",
    desc: "Estrategias de relocalización que abarcan desde el aspecto migratorio hasta la integración cultural y fiscal en el país de destino.",
    bullets: ["Estrategias end-to-end de relocalización", "Gestión migratoria de dependientes y familia", "Asesoría fiscal internacional para expatriados", "Programas de onboarding cultural"],
    img: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1000&q=80",
    num: "03"
  },
];

export function ServiciosCorporativos() {
  return (
    <section className="py-32 px-6 max-w-[1440px] mx-auto">
      <FadeIn>
        <div className="mb-20">
          <p className="typo-eyebrow text-primary mb-4">Empresas y Corporaciones</p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Estrategia Migratoria Corporativa
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Gestionamos de forma integral las necesidades migratorias de empresas multinacionales, desde la estructuración de políticas internas hasta la resolución de casos individuales de alta complejidad.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-0">
        {CORPORATE_SERVICES.map((svc, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div key={index} className={`w-full ${isEven ? 'bg-gray-50/60' : 'bg-white'}`}>
              <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 md:py-32">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 w-full h-[460px] overflow-hidden">
                    <FadeIn direction={isEven ? "left" : "right"} className="w-full h-full">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                        style={{ backgroundImage: `url("${svc.img}")` }}
                      />
                    </FadeIn>
                  </div>
                  <div className="lg:w-1/2">
                    <FadeIn direction={isEven ? "right" : "left"}>
                      <span className="font-heading text-[5rem] font-bold block mb-1 leading-none" style={{ color: '#EBD723', opacity: 0.2 }}>{svc.num}</span>
                      <h3 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-6 leading-tight">{svc.title}</h3>
                      <p className="font-sans text-xl text-muted-foreground mb-8 leading-relaxed">{svc.desc}</p>
                      <ul className="space-y-3 mb-10">
                        {svc.bullets.map((b, i) => (
                          <li key={i} className="flex items-center gap-3 font-sans text-lg text-foreground">
                            <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contacto" className="inline-flex items-center gap-2 border-b border-foreground/25 pb-1 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground hover:text-primary hover:border-primary transition-colors group">
                        Solicitar información
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
