import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

export function Nosotros() {
  return (
    <div className="bg-background">
      {/* Inner Hero — full-width image, centered */}
      <section className="relative h-[65vh] w-full flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.05) 0%, transparent 55%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-xs mb-6 font-semibold">
              La Firma
            </p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
              Nuestra Historia
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mx-auto italic leading-relaxed">
              Redefiniendo los estándares del compliance migratorio.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 55%)' }}></div>
      </section>

      {/* Mission Section */}
      <section className="py-28 md:py-36 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn direction="right">
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-6 font-semibold">
              Nuestra Visión
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-8 leading-tight">
              Una visión diferente de la práctica migratoria
            </h2>
            <div className="font-sans text-xl text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Santos & Becker fue fundada con un objetivo claro: elevar la práctica del derecho migratorio al nivel de la consultoría corporativa estratégica.
              </p>
              <p>
                Entendemos que la movilidad de talento no es un mero trámite administrativo, sino una pieza fundamental en la estrategia de crecimiento de cualquier organización global.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/equipo" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground border-b border-foreground/30 pb-1 hover:text-primary hover:border-primary transition-colors group">
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

      {/* Values Grid — dark section */}
      <section className="bg-foreground text-white py-32 px-6" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-20">
              <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-4 font-semibold">
                Valores
              </p>
              <h2 className="font-heading text-5xl text-white font-bold">
                Pilares de nuestra firma
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Rigor Técnico", desc: "Excelencia jurídica en el análisis de cada caso sin compromisos." },
                { title: "Innovación", desc: "Adopción tecnológica para optimizar cada etapa del proceso migratorio." },
                { title: "Transparencia", desc: "Comunicación clara, proactiva y honesta en todo momento." },
                { title: "Compromiso", desc: "Asumimos los objetivos del cliente como propios, sin excepción." }
              ].map((value, i) => (
                <div key={i} className="pt-8 border-t-2 border-accent">
                  <h3 className="font-heading text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="font-sans text-white/65 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-4 font-semibold">
              Trayectoria
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold">
              Nuestra evolución
            </h2>
          </div>
          <div className="space-y-0 border-l border-border ml-4 md:ml-8">
            {[
              { year: "2009", title: "Fundación", desc: "Santos & Becker nace en Ciudad de México con el firme propósito de transformar la práctica migratoria corporativa." },
              { year: "2013", title: "Expansión Regional", desc: "Apertura de operaciones en Brasil, Colombia y Argentina, consolidando nuestra presencia en América Latina." },
              { year: "2017", title: "Plataforma Tecnológica", desc: "Lanzamiento de nuestra plataforma propietaria de gestión migratoria, primera en su categoría en la región." },
              { year: "2021", title: "Alianzas Globales", desc: "Integración a la red de firmas globales con presencia en más de 20 jurisdicciones clave a nivel mundial." },
              { year: "2024", title: "Reconocimiento", desc: "Distinguidos como la firma líder en innovación migratoria corporativa por publicaciones especializadas del sector." },
            ].map((item, i) => (
              <div key={i} className="relative pl-10 pb-14 last:pb-0">
                <div className="absolute left-[-5px] top-[6px] w-[9px] h-[9px] bg-primary border-2 border-background"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                  <span className="font-heading text-primary text-2xl font-bold">{item.year}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="font-sans text-lg text-muted-foreground max-w-2xl leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Full-width image break */}
      <section className="h-[55vh] w-full overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1920&q=80")' }}
        />
      </section>
    </div>
  );
}
