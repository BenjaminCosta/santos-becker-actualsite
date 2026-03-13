import { FadeIn } from "@/components/ui/FadeIn";

const PERSONAL_SERVICES = [
  { title: "Residencia Permanente",   desc: "Gestión de permisos de residencia de larga duración para profesionales y sus familias en las principales jurisdicciones." },
  { title: "Reagrupamiento Familiar", desc: "Trámites para reunir a la familia en el país de destino con el máximo rigor y agilidad procesual." },
  { title: "Naturalización",          desc: "Asesoría sobre requisitos, plazos y procedimientos para la obtención de ciudadanía o segunda nacionalidad." },
  { title: "Visas de Inversión",      desc: "Estructuración de la mejor ruta migratoria para inversionistas a través de vehículos de inversión cualificados." },
  { title: "Talento Extraordinario",  desc: "Visas para profesionales con habilidades excepcionales en ciencia, arte, deporte, negocio y tecnología." },
  { title: "Estudios y Formación",    desc: "Gestión de visas de estudiante y permisos de trabajo para becarios y profesionales en formación." },
];

export function ServiciosFamilias() {
  return (
    <section className="py-32 px-6 bg-foreground text-white" style={{ borderTop: '2px solid #EBD723' }}>
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="mb-20">
            <p className="typo-eyebrow text-primary mb-4">Personas y Familias</p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Servicios para Profesionales y Familias
            </h2>
            <p className="font-sans text-xl text-white/65 max-w-3xl leading-relaxed">
              Acompañamos a ejecutivos de alto perfil, profesionales independientes y sus familias en cada etapa del proceso migratorio personal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PERSONAL_SERVICES.map((item, i) => (
              <div key={i} className="pt-8 border-t border-white/15 group">
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="font-sans text-base text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
