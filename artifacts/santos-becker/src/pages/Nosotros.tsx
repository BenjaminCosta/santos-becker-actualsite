import { FadeIn } from "@/components/ui/FadeIn";

export function Nosotros() {
  return (
    <div className="bg-background pt-24">
      {/* Inner Hero */}
      <section className="relative h-[50vh] w-full flex items-center justify-center">
        {/* modern corporate building */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight mb-4">
              Nuestra Historia
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/80 max-w-2xl mx-auto italic">
              Redefiniendo los estándares del compliance migratorio.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 60%)' }}></div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn direction="right">
            <h2 className="font-heading text-5xl text-foreground font-bold mb-8">
              Una visión diferente de la práctica migratoria
            </h2>
            <div className="font-sans text-xl text-muted-foreground space-y-6">
              <p>
                Santos & Becker fue fundada con un objetivo claro: elevar la práctica del derecho migratorio al nivel de la consultoría corporativa estratégica.
              </p>
              <p>
                Entendemos que la movilidad de talento no es un mero trámite administrativo, sino una pieza fundamental en la estrategia de crecimiento de cualquier organización global.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left">
             <div className="bg-gray-50 p-12 border-l-4 border-accent relative">
                <span className="absolute top-8 left-6 text-accent font-heading text-6xl opacity-30 leading-none">"</span>
                <p className="font-sans text-2xl text-foreground italic leading-relaxed relative z-10 pl-6">
                  Nuestra misión es proporcionar certeza absoluta en un entorno regulatorio en constante cambio, permitiendo a nuestros clientes operar sin fronteras con total seguridad jurídica.
                </p>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-foreground text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-20">
              <p className="font-heading text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
                Valores
              </p>
              <h2 className="font-heading text-5xl text-white font-bold">
                Pilares de nuestra firma
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Rigor Técnico", desc: "Excelencia jurídica en el análisis de cada caso." },
                { title: "Innovación", desc: "Adopción tecnológica para optimizar procesos." },
                { title: "Transparencia", desc: "Comunicación clara y proactiva en todo momento." },
                { title: "Compromiso", desc: "Asumimos los objetivos del cliente como propios." }
              ].map((value, i) => (
                <div key={i} className="pt-8 border-t-2 border-accent">
                  <h3 className="font-heading text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="font-sans text-white/70">{value.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Full width image break */}
      <section className="h-[60vh] w-full">
         {/* meeting diverse corporate */}
         <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1920&q=80")' }}
        />
      </section>

    </div>
  );
}
