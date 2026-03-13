import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServiciosClosingCta() {
  return (
    <section className="bg-foreground py-24 px-6 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.04) 0%, transparent 60%)' }}></div>
      <FadeIn>
        <p className="typo-eyebrow text-white/35 mb-4">Servicio Premium</p>
        <h2 className="font-heading text-4xl md:text-5xl mb-8 font-bold">¿Requiere un servicio personalizado?</h2>
        <p className="font-sans text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Hable con uno de nuestros socios y diseñemos juntos la solución migratoria óptima para su organización.
        </p>
        <Link href="/contacto" className="inline-block px-12 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
          Contactar a un Socio
        </Link>
      </FadeIn>
    </section>
  );
}
