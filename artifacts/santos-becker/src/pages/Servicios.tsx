import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function Servicios() {
  const services = [
    {
      title: "Visas Corporativas",
      desc: "Gestión integral de visas de trabajo para ejecutivos y personal especializado, asegurando la movilidad fluida del talento en su organización.",
      bullets: ["Visas de transferencia intracompany", "Permisos de trabajo temporal", "Visas para inversionistas", "Renovaciones y extensiones"],
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Compliance Migratorio",
      desc: "Auditorías preventivas y diseño de políticas internas para garantizar que su empresa cumpla rigurosamente con las normativas vigentes, mitigando riesgos.",
      bullets: ["Auditorías de cumplimiento", "Políticas de movilidad corporativa", "Capacitación a RRHH", "Defensa en inspecciones"],
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Movilidad de Talento",
      desc: "Estrategias de relocalización que abarcan desde el aspecto migratorio hasta la integración en el país de destino.",
      bullets: ["Estrategias de relocalización", "Gestión de dependientes", "Asesoría fiscal migratoria", "Onboarding cultural"],
      img: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Consultoría Estratégica",
      desc: "Asesoramiento de alto nivel para diseñar la estructura migratoria óptima para aperturas de nuevas filiales o proyectos transnacionales.",
      bullets: ["Planificación para nuevas filiales", "Estructuración de proyectos", "Análisis de tratados", "Consultoría Bespoke"],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="bg-background">
      {/* Inner Hero — full-width image, centered */}
      <section className="relative h-[65vh] w-full flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/65"></div>
          {/* Subtle yellow warm tint */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.05) 0%, transparent 55%)' }}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-xs mb-6 font-semibold">
              Soluciones Integrales
            </p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
              Nuestros Servicios
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mx-auto italic leading-relaxed">
              Soluciones diseñadas a la medida de las exigencias corporativas globales.
            </p>
          </FadeIn>
        </div>

        {/* Yellow gradient line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 50%)' }}></div>
      </section>

      {/* Editorial Rows */}
      <section className="py-0">
        {services.map((service, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div key={index} className={`w-full ${isEven ? 'bg-gray-50/70' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Image Block */}
                  <div className="lg:w-1/2 w-full h-[480px] relative overflow-hidden">
                    <FadeIn direction={isEven ? "left" : "right"} className="w-full h-full">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                        style={{ backgroundImage: `url("${service.img}")` }}
                      />
                    </FadeIn>
                  </div>

                  {/* Text Block */}
                  <div className="lg:w-1/2">
                    <FadeIn direction={isEven ? "right" : "left"}>
                      <span className="font-heading text-[4rem] font-bold block mb-1 leading-none" style={{ color: '#EBD723', opacity: 0.25 }}>
                        0{index + 1}
                      </span>
                      <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-6 leading-tight">
                        {service.title}
                      </h2>
                      <p className="font-sans text-xl text-muted-foreground mb-8 leading-relaxed">
                        {service.desc}
                      </p>
                      <ul className="space-y-3 mb-10">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-center font-sans text-lg text-foreground gap-3">
                            <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contacto" className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground hover:text-primary hover:border-primary transition-colors group">
                        Solicitar Información
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </FadeIn>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Final CTA Strip */}
      <section className="bg-foreground py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.04) 0%, transparent 60%)' }}></div>
        <FadeIn>
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Servicio Premium</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-8 font-bold">¿Requiere un servicio personalizado?</h2>
          <Link href="/contacto" className="inline-block px-10 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
            Contacte a un Socio
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
