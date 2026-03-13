import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactAlternativeCta() {
  return (
    <section className="py-24 px-6 bg-gray-50 border-t border-border text-center">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <p className="typo-eyebrow text-primary mb-4">Acceso Inmediato</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">¿Prefiere una respuesta inmediata?</h2>
          <p className="font-sans text-lg text-muted-foreground mb-10 leading-relaxed">
            SAM, nuestro asistente virtual, está disponible 24/7 para orientarle sobre sus necesidades migratorias y conectarle con el equipo adecuado.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/525512345678"
              className="px-10 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors text-center"
            >
              Escribir por WhatsApp
            </a>
            <Link
              href="/tecnologia"
              className="px-10 py-4 border border-foreground/30 text-foreground font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-foreground hover:text-white transition-colors text-center"
            >
              Conocer SAM
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
