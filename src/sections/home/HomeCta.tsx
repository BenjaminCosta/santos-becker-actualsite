import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function HomeCta() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden" style={{ borderTop: '2px solid #EBD723' }}>
      <div className="absolute -top-24 right-0 text-foreground/[0.025] font-heading text-[320px] pointer-events-none select-none leading-none">→</div>
      <div className="max-w-[1440px] mx-auto px-0 md:px-12 relative z-10">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="typo-eyebrow text-primary mb-6">Próximos pasos</p>
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
  );
}
