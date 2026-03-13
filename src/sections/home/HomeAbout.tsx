import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function HomeAbout() {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=960&q=80"
            alt="Santos & Becker"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center bg-white">
          <FadeIn direction="left">
            <p className="typo-eyebrow text-primary mb-6">Quiénes Somos</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold leading-tight mb-8">
              Especialistas en movilidad global y compliance migratorio
            </h2>
            <div className="font-sans text-xl text-muted-foreground leading-relaxed space-y-5 mb-12">
              <p>
                Santos & Becker nace de la convicción de que la migración corporativa debe ser gestionada con la misma excelencia estratégica que cualquier decisión empresarial crítica.
              </p>
              <p>
                Combinamos expertise jurídico profundo con inteligencia tecnológica para ofrecer soluciones migratorias de primer nivel a empresas y perfiles de alto impacto.
              </p>
            </div>
            <Link href="/nosotros" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground border-b border-foreground/25 pb-1 hover:text-primary hover:border-primary transition-colors group">
              Conocer nuestra historia
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
