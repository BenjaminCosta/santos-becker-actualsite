import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function InclusionCta() {
  return (
    <section className="py-28 px-6 text-center bg-white" style={{ borderTop: '2px solid #EBD723' }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="typo-eyebrow text-primary mb-4">Próximos Pasos</p>
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
  );
}
