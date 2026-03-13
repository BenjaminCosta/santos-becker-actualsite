import { FadeIn } from "@/components/ui/FadeIn";

export function FounderOscar() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row min-h-[75vh]">
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=960&q=80"
            alt="Oscar Santos"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center bg-white">
          <FadeIn direction="left">
            <p className="typo-eyebrow text-primary mb-6">Socio Fundador</p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
              Oscar Santos
            </h2>
            <div className="w-10 h-[2px] bg-accent mb-8"></div>
            <div className="font-sans text-xl text-muted-foreground space-y-5 leading-relaxed mb-10">
              <p>
                Abogado especialista en derecho migratorio corporativo con más de 20 años de experiencia asesorando a empresas Fortune 500 y organizaciones multinacionales en estrategias de movilidad global.
              </p>
              <p>
                Fundó Santos & Becker con la visión de transformar la práctica migratoria en una herramienta estratégica para el crecimiento empresarial. Su enfoque combina rigor jurídico con visión de negocio.
              </p>
              <p>
                Ha liderado más de 300 casos corporativos de alta complejidad en América Latina, Europa y Asia.
              </p>
            </div>
            <div className="flex flex-col gap-2 font-heading text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              <span>oscar.santos@santosbecker.com</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
