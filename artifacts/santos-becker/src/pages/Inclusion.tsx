import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

export function Inclusion() {
  return (
    <div className="bg-background">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[65vh] w-full flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/65"></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.05) 0%, transparent 55%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold">Área Especializada</p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
              Inclusión<br/>Laboral
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mx-auto italic leading-relaxed">
              Asesoría especializada para la correcta integración de talento extranjero en el marco regulatorio nacional.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 55%)' }}></div>
      </section>

      {/* ─── 2. POSICIÓN ─────────────────────────────────────────── */}
      <section className="py-28 md:py-36 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-start">
          <FadeIn direction="right">
            <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Nuestra Posición</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Más allá de la visa
            </h2>
            <div className="font-sans text-xl text-muted-foreground space-y-6 leading-relaxed">
              <p>
                La obtención de una autorización migratoria es solo el primer paso. La verdadera inclusión laboral requiere una estructuración jurídica, fiscal y contractual rigurosa en el país de destino.
              </p>
              <p>
                Santos & Becker defiende que la contratación de talento extranjero es un activo estratégico para las organizaciones modernas, no un riesgo regulatorio que gestionar en el mínimo indispensable.
              </p>
              <p>
                Por eso asesoramos a las áreas de Recursos Humanos para convertir cada contratación internacional en un proceso controlado, eficiente y sostenible.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="bg-foreground text-white p-10 md:p-14" style={{ borderTop: '3px solid #EBD723' }}>
              <h3 className="font-heading text-[10px] uppercase tracking-[0.25em] text-primary mb-10">Servicios de Inclusión</h3>
              <ul className="space-y-8">
                {[
                  { title: "Constancias de Empleador",   desc: "Obtención y actualización de registros ante autoridades migratorias." },
                  { title: "Auditoría de Cuotas",        desc: "Revisión de proporciones nacionales/extranjeros conforme a la ley laboral." },
                  { title: "Contratos Especializados",   desc: "Contratos laborales adaptados a expatriados y normativas locales." },
                  { title: "Gestión de Beneficios",      desc: "Estructuración de paquetes de compensación y beneficios internacionales." },
                ].map((item, i) => (
                  <li key={i} className="flex flex-col border-b border-white/10 pb-8 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-[5px] h-[5px] bg-accent shrink-0"></span>
                      <span className="font-heading text-lg font-bold">{item.title}</span>
                    </div>
                    <p className="font-sans text-white/55 text-base leading-relaxed pl-4">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 3. ALIANZAS ─────────────────────────────────────────── */}
      <section className="py-24 px-6 border-y border-border bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-28">
              <div className="lg:w-2/5">
                <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Alianzas</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Red de organizaciones colaboradoras
                </h2>
                <p className="font-sans text-xl text-muted-foreground leading-relaxed">
                  Colaboramos con organismos nacionales e internacionales comprometidos con la integración digna y efectiva del talento migrante en el mercado laboral.
                </p>
              </div>
              <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { name: "OIM",          full: "Organización Internacional para las Migraciones" },
                  { name: "IMSS",         full: "Instituto Mexicano del Seguro Social" },
                  { name: "STPS",         full: "Secretaría del Trabajo y Previsión Social" },
                  { name: "INAMI",        full: "Instituto Nacional de Migración" },
                  { name: "COPARMEX",     full: "Confederación Patronal de la República Mexicana" },
                  { name: "AMCHAM",       full: "Cámara de Comercio AmericanaMéxico" },
                ].map((org, i) => (
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

      {/* ─── 4. ACCIÓN CONCRETA ──────────────────────────────────── */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="mb-20">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Metodología</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Acción concreta
              </h2>
            </div>
          </FadeIn>

          {/* Two-col editorial layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <div className="space-y-0 border-t border-border">
                {[
                  { n: "01", title: "Diagnóstico Corporativo",   desc: "Análisis de la estructura organizacional, proporciones de contratación y riesgos regulatorios actuales." },
                  { n: "02", title: "Estrategia de Cumplimiento", desc: "Diseño de un plan de acción personalizado para garantizar el cumplimiento normativo en cada contratación." },
                  { n: "03", title: "Implementación Documental", desc: "Gestión de todos los contratos, registros y trámites ante las autoridades competentes." },
                  { n: "04", title: "Monitoreo Continuo",        desc: "Seguimiento periódico para actualizar los expedientes y anticipar cambios regulatorios." },
                ].map((item, i) => (
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
                {/* Full-width image */}
                <div className="w-full h-[420px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=960&q=80"
                    alt="Inclusión Laboral"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stats */}
                <div className="bg-foreground text-white p-10 grid grid-cols-3 gap-6 text-center">
                  {[
                    { n: "100%", l: "Cumplimiento garantizado" },
                    { n: "+15",  l: "Países con cobertura" },
                    { n: "360°", l: "Visibilidad del proceso" },
                  ].map((s, i) => (
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

      {/* ─── 5. CTA DE CIERRE ────────────────────────────────────── */}
      <section className="py-28 px-6 text-center bg-white" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Próximos Pasos</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Estructure su proceso de contratación internacional
            </h2>
            <p className="font-sans text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Hable con nuestros especialistas en inclusión laboral y descubra cómo convertir cada contratación extranjera en una ventaja para su organización.
            </p>
            <Link href="/contacto" className="inline-block px-12 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
              Agendar Consulta
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
