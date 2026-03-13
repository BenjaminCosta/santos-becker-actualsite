import { FadeIn } from "@/components/ui/FadeIn";

export function FounderCesar() {
  return (
    <section className="w-full bg-gray-50" style={{ borderTop: '1px solid #e5e7eb' }}>
      <div className="flex flex-col lg:flex-row-reverse min-h-[75vh]">
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=960&q=80"
            alt="César Becker"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
          <FadeIn direction="right">
            <p className="typo-eyebrow text-primary mb-6">Socio Fundador</p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
              César Becker
            </h2>
            <div className="w-10 h-[2px] bg-accent mb-8"></div>
            <div className="font-sans text-xl text-muted-foreground space-y-5 leading-relaxed mb-10">
              <p>
                Especialista en compliance migratorio y estructuración de proyectos transnacionales, con trayectoria en las principales jurisdicciones de América Latina, Europa y Asia Pacífico.
              </p>
              <p>
                Co-fundó Santos & Becker como la firma de referencia para organizaciones que requieren no solo soluciones migratorias, sino una visión integral del riesgo regulatorio global.
              </p>
              <p>
                Su liderazgo ha sido clave en el desarrollo de la plataforma tecnológica propietaria de la firma y en la consolidación de la red global de alianzas estratégicas.
              </p>
            </div>
            <div className="flex flex-col gap-2 font-heading text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              <span>cesar.becker@santosbecker.com</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
