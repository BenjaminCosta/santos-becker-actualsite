import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

const FEATURES = [
  "Panel de control ejecutivo en tiempo real",
  "Alertas automáticas de vencimiento y renovación",
  "Repositorio digital encriptado de documentos",
  "SAM — Asistente virtual de gestión migratoria",
];

export function HomeTechnology() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col-reverse lg:flex-row min-h-[80vh]">
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
          <FadeIn direction="right">
            <p className="typo-eyebrow text-primary mb-6">Innovación Migratoria</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold leading-tight mb-8">
              Plataforma digital de gestión migratoria
            </h2>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-10">
              Desarrollamos herramientas propias que permiten monitorear en tiempo real el estado de cada trámite, anticipar riesgos de cumplimiento y garantizar la trazabilidad completa del proceso.
            </p>
            <ul className="space-y-5 mb-12">
              {FEATURES.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-sans text-lg text-foreground">
                  <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/tecnologia" className="inline-block px-9 py-4 bg-foreground text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-black transition-colors">
              Explorar tecnología
            </Link>
          </FadeIn>
        </div>
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=960&q=80"
            alt="Tecnología Santos & Becker"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
