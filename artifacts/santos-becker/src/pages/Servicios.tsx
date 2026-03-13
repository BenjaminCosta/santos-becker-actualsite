import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function Servicios() {
  const services = [
    {
      title: "Visas Corporativas",
      desc: "Gestión integral de visas de trabajo para ejecutivos y personal especializado, asegurando la movilidad fluida del talento en su organización.",
      bullets: ["Visas de transferencia intracompany", "Permisos de trabajo temporal", "Visas para inversionistas", "Renovaciones y extensiones"],
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Compliance Migratorio",
      desc: "Auditorías preventivas y diseño de políticas internas para garantizar que su empresa cumpla rigurosamente con las normativas vigentes, mitigando riesgos.",
      bullets: ["Auditorías de cumplimiento", "Políticas de movilidad corporativa", "Capacitación a RRHH", "Defensa en inspecciones"],
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Movilidad de Talento",
      desc: "Estrategias de relocalización que abarcan desde el aspecto migratorio hasta la integración en el país de destino.",
      bullets: ["Estrategias de relocalización", "Gestión de dependientes", "Asesoría fiscal migratoria", "Onboarding cultural"],
      img: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Consultoría Estratégica",
      desc: "Asesoramiento de alto nivel para diseñar la estructura migratoria óptima para aperturas de nuevas filiales o proyectos transnacionales.",
      bullets: ["Planificación para nuevas filiales", "Estructuración de proyectos", "Análisis de tratados", "Consultoría Bespoke"],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="bg-background pt-24">
      {/* Inner Hero */}
      <section className="bg-foreground text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight mb-8">
              Nuestros<br/>Servicios
            </h1>
            <p className="font-sans text-2xl text-white/80 max-w-3xl italic">
              Soluciones diseñadas a la medida de las exigencias corporativas globales.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Editorial Rows */}
      <section className="py-24">
        {services.map((service, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div key={index} className={`w-full ${isEven ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto px-6 py-24">
                <div className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Block */}
                  <div className="lg:w-1/2 w-full h-[500px] relative overflow-hidden">
                    <FadeIn direction={isEven ? "left" : "right"} className="w-full h-full">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url("${service.img}")` }}
                      />
                    </FadeIn>
                  </div>

                  {/* Text Block */}
                  <div className="lg:w-1/2">
                    <FadeIn direction={isEven ? "right" : "left"}>
                      <span className="font-heading text-5xl font-bold block mb-2" style={{ color: '#EBD723', opacity: 0.3 }}>0{index + 1}</span>
                      <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-6">
                        {service.title}
                      </h2>
                      <p className="font-sans text-xl text-muted-foreground mb-8">
                        {service.desc}
                      </p>
                      <ul className="space-y-4 mb-10">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-center font-sans text-lg text-foreground">
                            <span className="w-2 h-2 bg-accent mr-4"></span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contacto" className="inline-block border-b-2 border-primary pb-1 font-heading uppercase tracking-widest text-sm text-foreground hover:text-primary transition-colors">
                        Solicitar Información
                      </Link>
                    </FadeIn>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>
      
      {/* Final CTA Strip */}
      <section className="bg-primary py-16 px-6 text-center text-white">
         <FadeIn>
            <h2 className="font-heading text-4xl mb-6">¿Requiere un servicio personalizado?</h2>
            <Link href="/contacto" className="inline-block px-8 py-3 bg-white text-primary font-heading uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors">
              Contacte a un Socio
            </Link>
         </FadeIn>
      </section>

    </div>
  );
}
