import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

export function Inclusion() {
  return (
    <div className="bg-background">
      {/* Inner Hero — full-width image, centered */}
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
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-xs mb-6 font-semibold">
              Área Especializada
            </p>
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

      {/* Split Intro */}
      <section className="py-28 md:py-36 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn direction="right">
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-6 font-semibold">
              Nuestra Perspectiva
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Más allá de la visa
            </h2>
            <div className="font-sans text-xl text-muted-foreground space-y-6 leading-relaxed">
              <p>
                La obtención de una autorización migratoria es solo el primer paso. La verdadera movilidad global requiere una correcta estructuración laboral y fiscal en el país de destino.
              </p>
              <p>
                Santos & Becker asesora a las áreas de Recursos Humanos para asegurar que las contrataciones de personal extranjero cumplan con cuotas, normativas laborales y registros corporativos pertinentes.
              </p>
              <p>
                Nuestra visión integral convierte el proceso de contratación internacional en una ventaja competitiva sostenible para su organización.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <div className="bg-foreground text-white p-10 md:p-14" style={{ borderTop: '3px solid #EBD723' }}>
              <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-primary mb-10">Servicios Clave</h3>
              <ul className="space-y-8">
                {[
                  {
                    title: "Constancias de Empleador",
                    desc: "Obtención y actualización de registros empresariales ante autoridades migratorias."
                  },
                  {
                    title: "Auditoría de Cuotas",
                    desc: "Revisión de proporciones de empleados nacionales vs. extranjeros según la ley laboral vigente."
                  },
                  {
                    title: "Contratos Especializados",
                    desc: "Elaboración de contratos laborales adaptados a expatriados y normativas locales e internacionales."
                  },
                  {
                    title: "Gestión de Beneficios",
                    desc: "Estructuración de paquetes de compensación y beneficios para personal internacional."
                  },
                ].map((item, i) => (
                  <li key={i} className="flex flex-col border-b border-white/10 pb-8 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-[5px] h-[5px] bg-accent shrink-0"></span>
                      <span className="font-heading text-lg tracking-wide font-bold">{item.title}</span>
                    </div>
                    <p className="font-sans text-white/55 text-base leading-relaxed pl-4">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-20 px-6 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
              {[
                { number: "100%", label: "Cumplimiento normativo garantizado" },
                { number: "+15", label: "Países con cobertura operativa" },
                { number: "360°", label: "Visibilidad del proceso de contratación" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 md:border-l md:border-border md:pl-8 first:border-0 first:pl-0">
                  <span className="font-heading text-5xl md:text-6xl font-bold" style={{ color: '#EBD723' }}>{stat.number}</span>
                  <span className="font-heading text-sm uppercase tracking-widest text-muted-foreground max-w-[160px]">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How we work — process */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-20">
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-4 font-semibold">
              Proceso
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              Cómo estructuramos<br/>la contratación internacional
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Análisis de la estructura corporativa y requerimientos específicos de contratación." },
              { step: "02", title: "Estrategia", desc: "Diseño del modelo de contratación más eficiente desde el punto de vista legal y fiscal." },
              { step: "03", title: "Implementación", desc: "Gestión de todos los trámites, registros y contratos necesarios ante las autoridades." },
              { step: "04", title: "Monitoreo", desc: "Seguimiento continuo para garantizar el cumplimiento normativo en el largo plazo." },
            ].map((item, i) => (
              <div key={i} className="pt-8 border-t-2 border-accent relative">
                <span className="absolute -top-[2rem] left-0 font-heading text-5xl font-bold" style={{ color: '#EBD723', opacity: 0.15 }}>
                  {item.step}
                </span>
                <h3 className="font-heading text-2xl font-bold mb-4 mt-4">{item.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Full-width image */}
      <section className="w-full h-[60vh] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80")' }}
        />
      </section>

      {/* Framework section — split layout */}
      <section className="w-full bg-foreground text-white">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          <div className="lg:w-1/2 relative min-h-[40vh] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=960&q=80"
              alt="Oficina Santos & Becker"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
            <FadeIn direction="left">
              <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-6 font-semibold">
                Marco Normativo
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Cumplimiento en cada jurisdicción
              </h2>
              <p className="font-sans text-xl text-white/70 leading-relaxed mb-10">
                Nuestro equipo mantiene actualización constante en las normativas laborales y migratorias de cada país donde operamos, garantizando que su empresa siempre esté un paso adelante de los cambios regulatorios.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Ley Federal del Trabajo y normativa IMSS",
                  "Ley de Migración y Reglamento vigente",
                  "Tratados internacionales de libre comercio",
                  "Normativas de seguridad social para expatriados",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-lg text-white/75">
                    <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-white border-b border-white/30 pb-1 hover:text-primary hover:border-primary transition-colors group">
                Solicitar asesoría
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center bg-white" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-4 font-semibold">
              Próximos Pasos
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Estructure su proceso de contratación internacional
            </h2>
            <p className="font-sans text-xl text-muted-foreground mb-12 leading-relaxed">
              Hable con nuestros especialistas en inclusión laboral y descubra cómo podemos ayudar a su organización.
            </p>
            <Link href="/contacto" className="inline-block px-10 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
              Agendar Consulta
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
