import { FadeIn } from "@/components/ui/FadeIn";

export function Inclusion() {
  return (
    <div className="bg-background pt-24">
      {/* Inner Hero */}
      <section className="bg-gray-100 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="font-heading text-6xl md:text-8xl text-foreground font-bold tracking-tight mb-8">
              Inclusión<br/>Laboral
            </h1>
            <p className="font-sans text-2xl text-muted-foreground max-w-3xl border-l-2 border-primary pl-6">
              Asesoría especializada para la correcta integración de talento extranjero en el marco regulatorio nacional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Split Intro */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Más allá de la visa
            </h2>
            <div className="font-sans text-lg text-muted-foreground space-y-6">
              <p>
                La obtención de una autorización migratoria es solo el primer paso. La verdadera movilidad global requiere una correcta estructuración laboral y fiscal en el país de destino.
              </p>
              <p>
                Santos & Becker asesora a las áreas de Recursos Humanos para asegurar que las contrataciones de personal extranjero cumplan con cuotas, normativas laborales y registros corporativos pertinentes.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-foreground text-white p-12">
            <h3 className="font-heading text-3xl font-bold mb-8 text-primary">Servicios Clave</h3>
            <ul className="space-y-6">
              <li className="flex flex-col">
                <span className="font-heading text-xl tracking-wide mb-2">Constancias de Empleador</span>
                <span className="font-sans text-white/60 text-sm">Obtención y actualización de registros empresariales ante autoridades migratorias.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-heading text-xl tracking-wide mb-2">Auditoría de Cuotas</span>
                <span className="font-sans text-white/60 text-sm">Revisión de proporciones de empleados nacionales vs. extranjeros según la ley laboral.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-heading text-xl tracking-wide mb-2">Contratos Especializados</span>
                <span className="font-sans text-white/60 text-sm">Elaboración de contratos laborales adaptados a expatriados y normativas locales.</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="w-full">
         {/* diverse team meeting */}
         <div 
          className="w-full h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80")' }}
        />
      </section>
    </div>
  );
}
