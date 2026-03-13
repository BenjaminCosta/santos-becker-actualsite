import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

export function Nosotros() {
  return (
    <div className="bg-background">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[65vh] w-full flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/62"></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.05) 0%, transparent 55%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold">La Firma</p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
              Nuestra Historia
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mx-auto italic leading-relaxed">
              Redefiniendo los estándares del compliance migratorio corporativo.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 55%)' }}></div>
      </section>

      {/* ─── 2. NOSOTROS ─────────────────────────────────────────── */}
      <section className="py-28 md:py-36 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">
          <FadeIn direction="right">
            <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Quiénes Somos</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-8 leading-tight">
              Una visión diferente de la práctica migratoria
            </h2>
            <div className="font-sans text-xl text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Santos & Becker fue fundada con un objetivo claro: elevar la práctica del derecho migratorio al nivel de la consultoría corporativa estratégica.
              </p>
              <p>
                Operamos en la intersección entre el derecho, la tecnología y la estrategia empresarial, ofreciendo a nuestros clientes soluciones migratorias que generan ventajas competitivas reales.
              </p>
              <p>
                Nuestro equipo combina décadas de experiencia jurídica con una plataforma tecnológica propietaria y una red de alianzas globales inigualable.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/equipo" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground border-b border-foreground/25 pb-1 hover:text-primary hover:border-primary transition-colors group">
                Conocer al equipo
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="bg-gray-50 p-10 md:p-14 border-l-4 border-accent relative">
              <span className="absolute top-6 left-8 font-heading text-7xl leading-none" style={{ color: '#EBD723', opacity: 0.2 }}>"</span>
              <p className="font-sans text-2xl text-foreground italic leading-relaxed relative z-10 pt-6">
                Nuestra misión es proporcionar certeza absoluta en un entorno regulatorio en constante cambio, permitiendo a nuestros clientes operar sin fronteras con total seguridad jurídica.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 3. NUESTRO ENFOQUE ──────────────────────────────────── */}
      <section className="bg-foreground text-white py-32 px-6" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="mb-20">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Metodología</p>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight">Nuestro Enfoque</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                {[
                  { step: "01", title: "Diagnóstico Estratégico", desc: "Cada caso comienza con un análisis profundo de la situación corporativa o personal del cliente, identificando riesgos, oportunidades y la ruta migratoria óptima." },
                  { step: "02", title: "Diseño a Medida",         desc: "Desarrollamos una estrategia migratoria totalmente personalizada, sin plantillas estándar. Cada solución es tan única como las necesidades del cliente." },
                  { step: "03", title: "Ejecución de Precisión",  desc: "Nuestro equipo ejecuta cada trámite con rigor técnico, aprovechando nuestra plataforma tecnológica para garantizar trazabilidad y control total del proceso." },
                ].map((item, i) => (
                  <div key={i} className="relative pl-16">
                    <div className="absolute left-0 top-0 font-heading text-4xl font-bold" style={{ color: '#EBD723', opacity: 0.3 }}>{item.step}</div>
                    <h3 className="font-heading text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="font-sans text-lg text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="relative h-[500px] lg:h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=960&q=80"
                  alt="Enfoque Santos & Becker"
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 4. POR QUÉ NOS ELIGEN ──────────────────────────────── */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="mb-20">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Diferenciadores</p>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight">Por qué nos eligen</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Rigor Técnico",     desc: "Excelencia jurídica en el análisis de cada caso. Nunca asumimos, siempre verificamos." },
                { title: "Innovación",        desc: "Plataforma propietaria y herramientas de IA para optimizar cada etapa del proceso." },
                { title: "Transparencia",     desc: "Comunicación clara y proactiva. El cliente siempre sabe exactamente en qué punto está su caso." },
                { title: "Compromiso Total",  desc: "Asumimos los objetivos del cliente como propios. Su éxito es nuestra única métrica." },
              ].map((v, i) => (
                <div key={i} className="pt-8 border-t-2 border-accent">
                  <h3 className="font-heading text-2xl font-bold mb-4">{v.title}</h3>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-border pt-16">
              {[
                { n: "+500", l: "Casos corporativos resueltos" },
                { n: "+20",  l: "Países con cobertura activa" },
                { n: "15+",  l: "Años de trayectoria consolidada" },
              ].map((s, i) => (
                <div key={i} className="flex items-baseline gap-5">
                  <span className="font-heading text-5xl md:text-6xl font-bold" style={{ color: '#EBD723' }}>{s.n}</span>
                  <span className="font-heading text-sm uppercase tracking-widest text-muted-foreground max-w-[140px]">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 5. COLABORACIONES ESTRATÉGICAS ─────────────────────── */}
      <section className="py-24 px-6 border-t border-border bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Alianzas Globales</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">Colaboraciones Estratégicas</h2>
              <div className="w-10 h-[2px] bg-accent mx-auto mb-4"></div>
              <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto">
                Colaboramos con firmas líderes en derecho, auditoría y consultoría estratégica a nivel global, garantizando cobertura en las principales jurisdicciones del mundo.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-14 md:gap-20 opacity-30 grayscale">
              {["Deloitte", "PwC", "Baker McKenzie", "KPMG", "EY"].map((logo, i) => (
                <span key={i} className="font-heading text-2xl md:text-3xl font-bold tracking-widest">{logo}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
