import { FadeIn } from "@/components/ui/FadeIn";

const INCLUSION_SERVICES = [
  { title: "Constancias de Empleador",   desc: "Obtención y actualización de registros ante autoridades migratorias." },
  { title: "Auditoría de Cuotas",        desc: "Revisión de proporciones nacionales/extranjeros conforme a la ley laboral." },
  { title: "Contratos Especializados",   desc: "Contratos laborales adaptados a expatriados y normativas locales." },
  { title: "Gestión de Beneficios",      desc: "Estructuración de paquetes de compensación y beneficios internacionales." },
];

export function InclusionPosition() {
  return (
    <section className="py-28 md:py-36 px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-start">
        <FadeIn direction="right">
          <p className="typo-eyebrow text-primary mb-6">Nuestra Posición</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Más allá de la visa
          </h2>
          <div className="font-sans text-xl text-muted-foreground space-y-6 leading-relaxed">
            <p>
              La obtención de una autorización migratoria es solo el primer paso. La verdadera inclusión laboral requiere una estructuración jurídica, fiscal y contractual rigurosa en el país de destino.
            </p>
            <p>
              Santos & Becker defiende que la contratación de talento extranjero es un activo estratégico para las organizaciones modernas, no un riesgo regulatorio que gestionar en el mínimo indispensable.
            </p>
            <p>
              Por eso asesoramos a las áreas de Recursos Humanos para convertir cada contratación internacional en un proceso controlado, eficiente y sostenible.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.1}>
          <div className="bg-foreground text-white p-10 md:p-14" style={{ borderTop: '3px solid #EBD723' }}>
            <h3 className="typo-eyebrow text-primary mb-10">Servicios de Inclusión</h3>
            <ul className="space-y-8">
              {INCLUSION_SERVICES.map((item, i) => (
                <li key={i} className="flex flex-col border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-[5px] h-[5px] bg-accent shrink-0"></span>
                    <span className="font-heading text-lg font-bold">{item.title}</span>
                  </div>
                  <p className="font-sans text-white/55 text-base leading-relaxed pl-4">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
