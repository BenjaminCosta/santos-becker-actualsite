import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

const FEATURES = [
  { n: "01", title: "Dashboard Ejecutivo",  desc: "Vista unificada de todos los procesos activos, vencimientos críticos y alertas en tiempo real, con acceso multi-usuario y roles diferenciados." },
  { n: "02", title: "Gestión Documental",   desc: "Repositorio encriptado con organización automática por caso y empleado. Acceso controlado, historial de versiones y firma digital." },
  { n: "03", title: "Trazabilidad Total",   desc: "Registro completo de cada acción del proceso, notificaciones automáticas ante cambios de estatus y reportes ejecutivos exportables." },
];

const CAPABILITIES = [
  "Panel multi-empresa para grupos corporativos",
  "Alertas automáticas de vencimiento y renovación",
  "Integración con sistemas RRHH (SAP, Workday)",
  "Informes ejecutivos y reportes de cumplimiento",
  "Acceso seguro desde cualquier dispositivo",
  "Repositorio con control de acceso granular por roles",
];

const WORKFLOW = [
  { step: "01", title: "Onboarding Digital", desc: "Carga segura de información inicial a través del portal encriptado. Expediente activado en menos de 24 horas hábiles." },
  { step: "02", title: "Procesamiento",      desc: "El equipo jurídico gestiona el caso con visibilidad en tiempo real para el cliente en cada etapa del proceso." },
  { step: "03", title: "Resolución",         desc: "Recepción digital de aprobaciones y resguardo automático en el repositorio corporativo. Notificación inmediata." },
];

export function TecnologiaPlatforma() {
  return (
    <section className="bg-white">
      {/* Intro */}
      <div className="py-28 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <FadeIn>
          <div className="w-12 h-[3px] bg-accent mb-10 mx-auto"></div>
            <p className="typo-eyebrow text-primary mb-6">Plataforma de Gestión y Seguimiento</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-8 leading-tight">
            El poder de la información en tiempo real
          </h2>
          <p className="font-sans text-xl text-muted-foreground leading-relaxed max-w-3xl">
            En Santos & Becker, combinamos el talento humano con herramientas digitales avanzadas. Nuestra plataforma ofrece a departamentos de RRHH y ejecutivos una visibilidad 360° de cada trámite migratorio activo en su organización.
          </p>
        </FadeIn>
      </div>

      {/* Features Grid */}
      <div className="pb-24 px-6 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-gray-50 p-10 border-t-2 border-accent">
                <span className="font-heading text-[3.5rem] font-bold mb-4 block leading-none" style={{ color: '#EBD723', opacity: 0.22 }}>{f.n}</span>
                <h3 className="font-heading text-2xl font-bold mb-4">{f.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Split — Platform Detail */}
      <div className="w-full" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
            <FadeIn direction="right">
              <p className="typo-eyebrow text-primary mb-6">Capacidades</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-8">
                Diseñada para la operación corporativa exigente
              </h3>
              <ul className="space-y-5 mb-12">
                {CAPABILITIES.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-lg text-foreground">
                    <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground border-b border-foreground/25 pb-1 hover:text-primary hover:border-primary transition-colors group">
                Solicitar una demo
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
              alt="Plataforma Santos & Becker"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-32 px-6 bg-foreground text-white" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="mb-20 text-center">
              <p className="typo-eyebrow text-primary mb-4">Flujo de Trabajo</p>
              <h3 className="typo-title text-4xl md:text-5xl">Cómo funciona</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {WORKFLOW.map((p, i) => (
                <div key={i} className="relative pt-10">
                  <div className="absolute top-0 left-0 font-heading text-6xl font-bold leading-none" style={{ color: '#EBD723', opacity: 0.12 }}>{p.step}</div>
                  <div className="w-8 h-[2px] bg-accent mb-6"></div>
                  <h4 className="font-heading text-2xl font-bold mb-4 text-white">{p.title}</h4>
                  <p className="font-sans text-lg text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
