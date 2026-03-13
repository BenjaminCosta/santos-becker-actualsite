import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

export function Tecnologia() {
  return (
    <div className="bg-background pt-24">
      {/* Inner Hero */}
      <section className="relative h-[60vh] w-full flex items-center">
         {/* futuristic abstract data */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80"></div>
        </div>
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-6 font-semibold">
              Innovación
            </p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight mb-6">
              Nuestra Tecnología
            </h1>
            <p className="font-sans text-2xl text-white/80 max-w-2xl">
              Plataforma propietaria para el control absoluto de sus procesos migratorios.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-8">
            El poder de la información en tiempo real
          </h2>
          <p className="font-sans text-2xl text-muted-foreground leading-relaxed">
            En Santos & Becker, combinamos el talento humano con herramientas digitales avanzadas. Nuestra plataforma ofrece a departamentos de RRHH y ejecutivos una visibilidad 360º de cada trámite.
          </p>
        </FadeIn>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Dashboard Ejecutivo", desc: "Vista general de todos los procesos activos, vencimientos próximos y alertas críticas en una sola pantalla." },
              { title: "Gestión Documental", desc: "Repositorio encriptado y seguro para todos los documentos corporativos y personales requeridos." },
              { title: "Trazabilidad Total", desc: "Historial completo de cada paso del proceso con notificaciones automáticas ante cualquier cambio de estatus." }
            ].map((feat, i) => (
              <div key={i} className="bg-gray-50 p-10 accent-top-border">
                <h3 className="font-heading text-3xl font-bold mb-4">{feat.title}</h3>
                <p className="font-sans text-lg text-muted-foreground">{feat.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Large Image Block */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
           {/* person working on laptop modern */}
           <div 
            className="w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80")' }}
          />
        </FadeIn>
      </section>

      {/* Process */}
      <section className="py-32 px-6 bg-foreground text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-5xl font-bold mb-20 text-center">Cómo funciona</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { step: "01", title: "Onboarding Digital", desc: "Carga segura de información inicial a través de nuestro portal encriptado." },
                { step: "02", title: "Procesamiento", desc: "Nuestro equipo jurídico gestiona el caso mientras usted monitorea el avance en línea." },
                { step: "03", title: "Resolución", desc: "Recepción digital de aprobaciones y resguardo automático en el repositorio corporativo." }
              ].map((process, i) => (
                <div key={i} className="relative">
                  <div className="font-heading text-8xl text-white/10 font-bold absolute -top-12 -left-4 z-0">
                    {process.step}
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-3xl font-bold mb-4 text-primary">{process.title}</h3>
                    <p className="font-sans text-xl text-white/70">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <Link href="/contacto" className="inline-block px-10 py-5 bg-primary text-white font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
                Solicitar una Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
