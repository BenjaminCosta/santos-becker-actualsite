import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

export function Tecnologia() {
  return (
    <div className="bg-background">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[65vh] w-full flex items-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/60 to-black/30"></div>
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-[1440px] mx-auto w-full">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold">Innovación</p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
              Nuestra<br/>Tecnología
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-xl leading-relaxed">
              Plataforma propietaria para el control absoluto de sus procesos migratorios.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 55%)' }}></div>
      </section>

      {/* ─── 2. PLATAFORMA DE GESTIÓN Y SEGUIMIENTO ─────────────── */}
      <section className="bg-white">

        {/* Intro */}
        <div className="py-28 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
          <FadeIn>
            <div className="w-12 h-[3px] bg-accent mb-10 mx-auto"></div>
            <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Plataforma de Gestión y Seguimiento</p>
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
              {[
                { n: "01", title: "Dashboard Ejecutivo",   desc: "Vista unificada de todos los procesos activos, vencimientos críticos y alertas en tiempo real, con acceso multi-usuario y roles diferenciados." },
                { n: "02", title: "Gestión Documental",    desc: "Repositorio encriptado con organización automática por caso y empleado. Acceso controlado, historial de versiones y firma digital." },
                { n: "03", title: "Trazabilidad Total",    desc: "Registro completo de cada acción del proceso, notificaciones automáticas ante cambios de estatus y reportes ejecutivos exportables." },
              ].map((f, i) => (
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
                <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Capacidades</p>
                <h3 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-8">
                  Diseñada para la operación corporativa exigente
                </h3>
                <ul className="space-y-5 mb-12">
                  {[
                    "Panel multi-empresa para grupos corporativos",
                    "Alertas automáticas de vencimiento y renovación",
                    "Integración con sistemas RRHH (SAP, Workday)",
                    "Informes ejecutivos y reportes de cumplimiento",
                    "Acceso seguro desde cualquier dispositivo",
                    "Repositorio con control de acceso granular por roles",
                  ].map((item, i) => (
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

        {/* Process — How it works */}
        <div className="py-32 px-6 bg-foreground text-white" style={{ borderTop: '2px solid #EBD723' }}>
          <div className="max-w-[1440px] mx-auto">
            <FadeIn>
              <div className="mb-20 text-center">
                <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Flujo de Trabajo</p>
                <h3 className="font-heading text-4xl md:text-5xl font-bold">Cómo funciona</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                  { step: "01", title: "Onboarding Digital",  desc: "Carga segura de información inicial a través del portal encriptado. Expediente activado en menos de 24 horas hábiles." },
                  { step: "02", title: "Procesamiento",       desc: "El equipo jurídico gestiona el caso con visibilidad en tiempo real para el cliente en cada etapa del proceso." },
                  { step: "03", title: "Resolución",          desc: "Recepción digital de aprobaciones y resguardo automático en el repositorio corporativo. Notificación inmediata." },
                ].map((p, i) => (
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

      {/* ─── 3. SAM — ASISTENTE VIRTUAL ──────────────────────────── */}
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

              {/* Simulated chat bubble */}
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
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Inteligencia Artificial</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
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
                {[
                  { title: "Consultas inmediatas",     desc: "Respuestas precisas sobre requisitos, plazos y procedimientos en tiempo real." },
                  { title: "Orientación de casos",     desc: "SAM analiza el perfil del caso y sugiere la ruta migratoria más eficiente." },
                  { title: "Disponible 24/7",          desc: "Acceso continuo desde la plataforma, app móvil o WhatsApp corporativo." },
                  { title: "Escalamiento inteligente", desc: "Cuando el caso lo requiere, SAM conecta directamente con el abogado responsable." },
                ].map((item, i) => (
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

    </div>
  );
}
