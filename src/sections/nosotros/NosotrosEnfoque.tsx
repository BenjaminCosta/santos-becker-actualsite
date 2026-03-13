import { FadeIn } from "@/components/ui/FadeIn";

const STEPS = [
  { step: "01", title: "Diagnóstico Estratégico", desc: "Cada caso comienza con un análisis profundo de la situación corporativa o personal del cliente, identificando riesgos, oportunidades y la ruta migratoria óptima." },
  { step: "02", title: "Diseño a Medida",         desc: "Desarrollamos una estrategia migratoria totalmente personalizada, sin plantillas estándar. Cada solución es tan única como las necesidades del cliente." },
  { step: "03", title: "Ejecución de Precisión",  desc: "Nuestro equipo ejecuta cada trámite con rigor técnico, aprovechando nuestra plataforma tecnológica para garantizar trazabilidad y control total del proceso." },
];

export function NosotrosEnfoque() {
  return (
    <section className="bg-foreground text-white py-32 px-6" style={{ borderTop: '2px solid #EBD723' }}>
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="mb-20">
            <p className="typo-eyebrow text-primary mb-4">Metodología</p>
            <h2 className="typo-title text-5xl md:text-6xl text-white leading-tight">Nuestro Enfoque</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              {STEPS.map((item, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-0 top-0 font-heading text-4xl font-bold" style={{ color: '#EBD723', opacity: 0.3 }}>{item.step}</div>
                  <h3 className="font-heading text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="font-sans text-lg text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="relative h-[500px] lg:h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=960&q=80"
                alt="Enfoque Santos & Becker"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
