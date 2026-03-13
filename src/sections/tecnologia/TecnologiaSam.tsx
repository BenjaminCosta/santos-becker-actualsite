import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

const SAM_FEATURES = [
  { title: "Consultas inmediatas",     desc: "Respuestas precisas sobre requisitos, plazos y procedimientos en tiempo real." },
  { title: "Orientación de casos",     desc: "SAM analiza el perfil del caso y sugiere la ruta migratoria más eficiente." },
  { title: "Disponible 24/7",          desc: "Acceso continuo desde la plataforma, app móvil o WhatsApp corporativo." },
  { title: "Escalamiento inteligente", desc: "Cuando el caso lo requiere, SAM conecta directamente con el abogado responsable." },
];

export function TecnologiaSam() {
  return (
    <section className="bg-white py-0">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Visual side */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full bg-foreground flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #00B07C 0%, transparent 60%), radial-gradient(circle at 70% 30%, #EBD723 0%, transparent 60%)' }}></div>
          <div className="relative z-10 text-center px-12">
            <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-white/20" style={{ background: 'linear-gradient(135deg, rgba(0,176,124,0.15), rgba(235,215,35,0.08))' }}>
              <span className="font-heading text-4xl font-bold text-white tracking-wider">SAM</span>
            </div>
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/40 mb-3">Santos & Becker</p>
            <p className="font-heading text-lg font-bold text-white/70">Asistente Virtual de Migración</p>
            <div className="mt-12 text-left max-w-xs mx-auto space-y-4">
              <div className="bg-white/10 px-5 py-3 border-l-2 border-primary">
                <p className="font-sans text-sm text-white/75 italic">"¿Cuál es el plazo estándar para una visa de transferencia intracompany en México?"</p>
              </div>
              <div className="bg-primary/20 px-5 py-3 border-l-2 border-accent">
                <p className="font-sans text-sm text-white/75">"El plazo habitual es de 15 a 30 días hábiles, sujeto al tipo de empresa y documentación. ¿Desea iniciar el proceso?"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
          <FadeIn direction="left">
            <p className="typo-eyebrow text-primary mb-6">Inteligencia Artificial</p>
            <h2 className="typo-title text-4xl md:text-5xl text-foreground leading-tight mb-6">
              SAM — Asistente Virtual
            </h2>
            <div className="w-10 h-[2px] bg-accent mb-8"></div>
            <div className="font-sans text-xl text-muted-foreground space-y-6 leading-relaxed mb-10">
              <p>
                SAM es el asistente virtual de Santos & Becker, entrenado en la normativa migratoria vigente de más de 20 jurisdicciones. Disponible 24/7 para responder consultas, orientar procesos y conectar al cliente con el equipo correcto.
              </p>
              <p>
                No es un chatbot genérico. SAM es un sistema de inteligencia migratoria diseñado para las exigencias del entorno corporativo y de perfiles de alto perfil.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {SAM_FEATURES.map((item, i) => (
                <div key={i} className="pt-5 border-t border-border">
                  <h4 className="font-heading text-base font-bold mb-2">{item.title}</h4>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/contacto" className="inline-block px-9 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
              Solicitar acceso a SAM
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
