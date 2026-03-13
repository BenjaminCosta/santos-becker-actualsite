import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

export function Tecnologia() {
  return (
    <div className="bg-background">
      {/* Inner Hero — full-width image, left-aligned (Tecnología reference) */}
      <section className="relative h-[65vh] w-full flex items-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-xs mb-6 font-semibold">
              Innovación
            </p>
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

      {/* Intro — centered */}
      <section className="py-28 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <FadeIn>
          <div className="w-14 h-[3px] bg-accent mb-10 mx-auto"></div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-8 leading-tight">
            El poder de la información en tiempo real
          </h2>
          <p className="font-sans text-xl text-muted-foreground leading-relaxed max-w-3xl">
            En Santos & Becker, combinamos el talento humano con herramientas digitales avanzadas. Nuestra plataforma ofrece a departamentos de RRHH y ejecutivos una visibilidad 360° de cada trámite migratorio activo.
          </p>
        </FadeIn>
      </section>

      {/* Features Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: "01",
                title: "Dashboard Ejecutivo",
                desc: "Vista general de todos los procesos activos, vencimientos próximos y alertas críticas en una sola pantalla. Acceso para múltiples usuarios y roles."
              },
              {
                number: "02",
                title: "Gestión Documental",
                desc: "Repositorio encriptado y seguro para todos los documentos corporativos y personales requeridos. Organización automática por caso y empleado."
              },
              {
                number: "03",
                title: "Trazabilidad Total",
                desc: "Historial completo de cada paso del proceso con notificaciones automáticas ante cualquier cambio de estatus o requerimiento urgente."
              }
            ].map((feat, i) => (
              <div key={i} className="bg-gray-50 p-10 border-t-2 border-accent group hover:bg-white transition-colors duration-300">
                <span className="font-heading text-4xl font-bold mb-6 block" style={{ color: '#EBD723', opacity: 0.3 }}>{feat.number}</span>
                <h3 className="font-heading text-2xl font-bold mb-4">{feat.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Split — Platform Detail */}
      <section className="w-full bg-white">
        <div className="flex flex-col lg:flex-row min-h-[75vh]">
          <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
            <FadeIn direction="right">
              <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-6 font-semibold">
                Plataforma
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-8">
                Diseñada para la operación corporativa
              </h2>
              <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-10">
                Nuestra plataforma fue construida desde cero para atender las necesidades específicas de empresas multinacionales que gestionan grandes volúmenes de casos migratorios con estándares de cumplimiento exigentes.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "Panel multi-empresa para grupos corporativos",
                  "Alertas automáticas de vencimiento y renovación",
                  "Integración con sistemas RRHH (SAP, Workday)",
                  "Informes ejecutivos y reportes de cumplimiento",
                  "Repositorio digital con acceso controlado por roles",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-lg text-foreground">
                    <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground border-b border-foreground/30 pb-1 hover:text-primary hover:border-primary transition-colors group">
                Solicitar una demo
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
              alt="Plataforma tecnológica Santos & Becker"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-32 px-6 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
              <div className="md:w-2/5">
                <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-6 font-semibold">
                  Seguridad
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                  Protección de datos de nivel empresarial
                </h2>
              </div>
              <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Encriptación AES-256", desc: "Todos los documentos y datos personales se almacenan con encriptación de grado militar." },
                  { title: "Acceso por Roles", desc: "Control granular sobre qué usuarios pueden ver y modificar cada tipo de información." },
                  { title: "Auditoría de Accesos", desc: "Registro completo de cada acceso y modificación para cumplimiento normativo y trazabilidad." },
                  { title: "Respaldo Automático", desc: "Redundancia de datos en múltiples centros de datos para garantizar disponibilidad continua." },
                ].map((item, i) => (
                  <div key={i} className="pt-6 border-t border-border">
                    <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                    <p className="font-sans text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process — dark section */}
      <section className="py-32 px-6 bg-foreground text-white" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-20 text-center">
              <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-4 font-semibold">
                Flujo de Trabajo
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">Cómo funciona</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { step: "01", title: "Onboarding Digital", desc: "Carga segura de información inicial a través de nuestro portal encriptado. Activación del expediente en menos de 24 horas." },
                { step: "02", title: "Procesamiento", desc: "Nuestro equipo jurídico gestiona el caso mientras usted monitorea el avance en línea con visibilidad completa en tiempo real." },
                { step: "03", title: "Resolución", desc: "Recepción digital de aprobaciones y resguardo automático en el repositorio corporativo. Notificación inmediata al solicitante." }
              ].map((process, i) => (
                <div key={i} className="relative pt-12">
                  <div className="absolute top-0 left-0 font-heading text-7xl text-white/8 font-bold leading-none" style={{ color: '#EBD723', opacity: 0.12 }}>
                    {process.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-8 h-[2px] bg-accent mb-6"></div>
                    <h3 className="font-heading text-2xl font-bold mb-4 text-white">{process.title}</h3>
                    <p className="font-sans text-lg text-white/65 leading-relaxed">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <Link href="/contacto" className="inline-block px-10 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
                Solicitar una Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
