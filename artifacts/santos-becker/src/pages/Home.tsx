import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function Home() {
  return (
    <div className="bg-background">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen w-full flex items-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/62"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-xs mb-8 font-semibold flex items-center gap-3">
              <span className="w-[3px] h-5 bg-accent inline-block"></span>
              Consultoría Estratégica
            </p>
            <h1 className="font-heading text-[clamp(3.5rem,9vw,8.5rem)] text-white font-bold leading-[0.88] tracking-tight mb-10">
              Estrategia migratoria<br/>
              <span style={{ borderBottom: '2px solid #EBD723' }}>sin fronteras</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mb-14 leading-relaxed">
              Asesoría premium en inmigración corporativa y cumplimiento normativo para empresas globales y talentos de alto perfil.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/servicios" className="px-9 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors text-center">
                Conocer Servicios
              </Link>
              <Link href="/contacto" className="px-9 py-4 border border-white/60 text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-white hover:text-foreground transition-colors text-center">
                Hablar con un Experto
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-[1px] h-14 bg-white/20 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-white/60 animate-[slideDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* ─── 2. QUIÉNES SOMOS ────────────────────────────────────── */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=960&q=80"
              alt="Santos & Becker"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center bg-white">
            <FadeIn direction="left">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Quiénes Somos</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold leading-tight mb-8">
                Especialistas en movilidad global y compliance migratorio
              </h2>
              <div className="font-sans text-xl text-muted-foreground leading-relaxed space-y-5 mb-12">
                <p>
                  Santos & Becker nace de la convicción de que la migración corporativa debe ser gestionada con la misma excelencia estratégica que cualquier decisión empresarial crítica.
                </p>
                <p>
                  Combinamos expertise jurídico profundo con inteligencia tecnológica para ofrecer soluciones migratorias de primer nivel a empresas y perfiles de alto impacto.
                </p>
              </div>
              <Link href="/nosotros" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground border-b border-foreground/25 pb-1 hover:text-primary hover:border-primary transition-colors group">
                Conocer nuestra historia
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 3. NUESTRO PROPÓSITO ────────────────────────────────── */}
      <section className="bg-foreground text-white py-32 px-6 relative overflow-hidden" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="absolute top-0 left-4 text-[220px] font-heading text-white/[0.03] leading-none select-none pointer-events-none">"</div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="font-heading uppercase tracking-[0.3em] text-[10px] mb-10 text-white/40">Propósito</p>
            <h2 className="font-sans text-3xl md:text-[2.6rem] lg:text-5xl leading-tight mb-20 italic text-white/90">
              "Transformamos la complejidad migratoria en ventaja competitiva para organizaciones que operan sin fronteras."
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
              {[
                { n: "+500", l: "Casos Resueltos" },
                { n: "+20",  l: "Países Operados" },
                { n: "98%",  l: "Tasa de Éxito" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-heading text-6xl md:text-7xl font-bold mb-3" style={{ color: '#EBD723' }}>{s.n}</p>
                  <p className="font-heading uppercase tracking-[0.2em] text-xs text-white/60">{s.l}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 4. POR QUÉ NOS ELIGEN ──────────────────────────────── */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="mb-20">
            <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Por qué elegirnos</p>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground font-bold">Una firma diferente</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">
            {[
              { title: "Expertise Jurídico Profundo", desc: "Análisis técnico riguroso para anticipar contingencias y asegurar la viabilidad legal de cada caso." },
              { title: "Tecnología de Vanguardia",    desc: "Plataforma propietaria que otorga visibilidad total del estatus migratorio en tiempo real." },
              { title: "Enfoque Bespoke",             desc: "Atención personalizada y estratégica para altos ejecutivos, alejada de procesos industrializados." },
              { title: "Red Global de Alianzas",      desc: "Conexiones con firmas líderes en múltiples jurisdicciones para facilitar procesos multinacionales." },
            ].map((item, i) => (
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

      {/* ─── 5. SERVICIOS (VISTA AGRUPADA) ──────────────────────── */}
      <section className="bg-gray-50 py-32 px-6 border-y border-border">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Servicios</p>
                <h2 className="font-heading text-5xl md:text-6xl text-foreground font-bold">Soluciones migratorias integrales</h2>
              </div>
              <Link href="/servicios" className="hidden md:inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-primary hover:text-foreground transition-colors group shrink-0">
                Ver todos los servicios
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Estrategia Migratoria Corporativa", sub: "Visas · Compliance · Movilidad de Talento", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" },
                { title: "Servicios para Profesionales y Familias", sub: "Residencias · Reagrupamiento · Naturalización", img: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80" },
                { title: "Servicios Complementarios", sub: "Fiscal · Laboral · Consultoría Bespoke", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
              ].map((svc, i) => (
                <Link key={i} href="/servicios" className="group block relative h-[480px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url("${svc.img}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="font-heading text-2xl text-white font-bold leading-snug mb-2">{svc.title}</h3>
                    <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">{svc.sub}</p>
                    <div className="w-10 h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"></div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 md:hidden">
              <Link href="/servicios" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-primary group">
                Ver todos los servicios
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 6. INNOVACIÓN MIGRATORIA ────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="flex flex-col-reverse lg:flex-row min-h-[80vh]">
          <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
            <FadeIn direction="right">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Innovación Migratoria</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold leading-tight mb-8">
                Plataforma digital de gestión migratoria
              </h2>
              <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-10">
                Desarrollamos herramientas propias que permiten monitorear en tiempo real el estado de cada trámite, anticipar riesgos de cumplimiento y garantizar la trazabilidad completa del proceso.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "Panel de control ejecutivo en tiempo real",
                  "Alertas automáticas de vencimiento y renovación",
                  "Repositorio digital encriptado de documentos",
                  "SAM — Asistente virtual de gestión migratoria",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-lg text-foreground">
                    <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/tecnologia" className="inline-block px-9 py-4 bg-foreground text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-black transition-colors">
                Explorar tecnología
              </Link>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=960&q=80"
              alt="Tecnología Santos & Becker"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── 7. COLABORACIONES ESTRATÉGICAS ─────────────────────── */}
      <section className="py-24 px-6 border-y border-border bg-white">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Alianzas Estratégicas</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">Red global de partners</h2>
              <div className="w-10 h-[2px] bg-accent mx-auto mb-4"></div>
              <p className="font-sans text-lg text-muted-foreground">Colaboramos con firmas líderes en jurisdicciones clave a nivel mundial</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-14 md:gap-20 opacity-30 grayscale">
              {["Deloitte", "PwC", "Baker McKenzie", "KPMG", "EY"].map((logo, i) => (
                <span key={i} className="font-heading text-2xl md:text-3xl font-bold tracking-widest">{logo}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 8. BESPOKE ──────────────────────────────────────────── */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/68"></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.06) 0%, transparent 60%)' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="font-heading uppercase tracking-[0.3em] text-[10px] mb-6 font-semibold" style={{ color: '#EBD723' }}>Servicio Bespoke</p>
            <h2 className="font-heading text-5xl md:text-7xl text-white font-bold mb-8 leading-[0.9]">
              Atención exclusiva para perfiles de alto impacto
            </h2>
            <p className="font-sans text-xl md:text-2xl text-white/75 mb-14 italic leading-relaxed max-w-2xl mx-auto">
              Para ejecutivos, inversores y talentos excepcionales que requieren un servicio absolutamente personalizado. Sin plantillas. Sin compromisos.
            </p>
            <Link href="/contacto" className="inline-block px-12 py-5 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
              Solicitar Consulta Bespoke
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── 9. CTA FINAL / PRE-FOOTER ──────────────────────────── */}
      <section className="py-32 px-6 bg-white relative overflow-hidden" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="absolute -top-24 right-0 text-foreground/[0.025] font-heading text-[320px] pointer-events-none select-none leading-none">→</div>
        <div className="max-w-[1440px] mx-auto px-0 md:px-12 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Próximos pasos</p>
              <h2 className="font-heading text-5xl md:text-6xl text-foreground font-bold mb-6 leading-tight">
                ¿Listo para comenzar?
              </h2>
              <p className="font-sans text-xl text-muted-foreground mb-14 leading-relaxed max-w-xl">
                Agende una consulta inicial y descubra cómo podemos transformar su estrategia migratoria.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contacto" className="px-10 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors text-center">
                  Agendar Consulta
                </Link>
                <a href="tel:+525512345678" className="px-10 py-4 border border-foreground/40 text-foreground font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-foreground hover:text-white transition-colors text-center">
                  Llamar ahora
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
