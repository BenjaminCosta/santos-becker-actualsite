import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function Servicios() {

  const innerHero = (
    <section className="relative h-[65vh] w-full flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/68"></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.05) 0%, transparent 55%)' }}></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-heading text-primary uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold">Soluciones Migratorias</p>
          <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
            Nuestros Servicios
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mx-auto italic leading-relaxed">
            Soluciones diseñadas a la medida de las exigencias corporativas globales.
          </p>
        </FadeIn>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 55%)' }}></div>
    </section>
  );

  return (
    <div className="bg-background">
      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      {innerHero}

      {/* ─── 2. ESTRATEGIA MIGRATORIA CORPORATIVA ────────────────── */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="mb-20">
            <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Empresas y Corporaciones</p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Estrategia Migratoria Corporativa
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Gestionamos de forma integral las necesidades migratorias de empresas multinacionales, desde la estructuración de políticas internas hasta la resolución de casos individuales de alta complejidad.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {[
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
          ].map((svc, index) => {
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

      {/* ─── 3. SERVICIOS PARA PROFESIONALES Y FAMILIAS ──────────── */}
      <section className="py-32 px-6 bg-foreground text-white" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="mb-20">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Personas y Familias</p>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Servicios para Profesionales y Familias
              </h2>
              <p className="font-sans text-xl text-white/65 max-w-3xl leading-relaxed">
                Acompañamos a ejecutivos de alto perfil, profesionales independientes y sus familias en cada etapa del proceso migratorio personal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Residencia Permanente",  desc: "Gestión de permisos de residencia de larga duración para profesionales y sus familias en las principales jurisdicciones." },
                { title: "Reagrupamiento Familiar", desc: "Trámites para reunir a la familia en el país de destino con el máximo rigor y agilidad procesual." },
                { title: "Naturalización",          desc: "Asesoría sobre requisitos, plazos y procedimientos para la obtención de ciudadanía o segunda nacionalidad." },
                { title: "Visas de Inversión",      desc: "Estructuración de la mejor ruta migratoria para inversionistas a través de vehículos de inversión cualificados." },
                { title: "Talento Extraordinario",  desc: "Visas para profesionales con habilidades excepcionales en ciencia, arte, deporte, negocio y tecnología." },
                { title: "Estudios y Formación",    desc: "Gestión de visas de estudiante y permisos de trabajo para becarios y profesionales en formación." },
              ].map((item, i) => (
                <div key={i} className="pt-8 border-t border-white/15 group">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="font-sans text-base text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 4. SERVICIOS COMPLEMENTARIOS ────────────────────────── */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start">
              <div className="lg:w-2/5 lg:sticky lg:top-32">
                <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Adicionales</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
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
                {[
                  { title: "Asesoría Fiscal Internacional",    desc: "Planificación fiscal para expatriados y ejecutivos con presencia en múltiples jurisdicciones, coordinada con nuestros partners tributarios." },
                  { title: "Estructuración Laboral",           desc: "Revisión y redacción de contratos laborales, addenda de expatriación y estructuras de compensación internacional." },
                  { title: "Consultoría Estratégica Bespoke",  desc: "Asesoramiento de alto nivel para diseñar la estructura migratoria óptima en aperturas de filiales o proyectos transnacionales." },
                  { title: "Due Diligence Migratoria",         desc: "Revisión del historial migratorio de ejecutivos clave en procesos de M&A o incorporación de talento directivo senior." },
                  { title: "Formación Corporativa",            desc: "Talleres especializados para equipos de RRHH, legal y compliance sobre normativa migratoria vigente y mejores prácticas." },
                ].map((item, i) => (
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

      {/* ─── 5. CTA DE CIERRE ────────────────────────────────────── */}
      <section className="bg-foreground py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.04) 0%, transparent 60%)' }}></div>
        <FadeIn>
          <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">Servicio Premium</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-8 font-bold">¿Requiere un servicio personalizado?</h2>
          <p className="font-sans text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">Hable con uno de nuestros socios y diseñemos juntos la solución migratoria óptima para su organización.</p>
          <Link href="/contacto" className="inline-block px-12 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
            Contactar a un Socio
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
