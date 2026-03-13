import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function NosotrosAbout() {
  return (
    <section className="py-28 md:py-36 px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">
        <FadeIn direction="right">
          <p className="typo-eyebrow text-primary mb-6">Quiénes Somos</p>
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
  );
}
