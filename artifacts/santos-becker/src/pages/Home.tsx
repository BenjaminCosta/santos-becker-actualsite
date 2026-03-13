import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function Home() {
  return (
    <div className="bg-background">
      
      {/* 1. HERO */}
      <section className="relative h-screen w-full flex items-center pt-20">
        {/* landing page hero glass building corporate */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-semibold">
              Consultoría Estratégica
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-white font-bold leading-[0.9] tracking-tight mb-8">
              Estrategia migratoria<br/>
              <span className="text-white/90">sin fronteras</span>
            </h1>
            <p className="font-sans text-xl md:text-3xl text-white/80 max-w-3xl mb-12 leading-relaxed">
              Asesoría premium en inmigración corporativa y cumplimiento normativo para empresas globales y talentos de alto perfil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/servicios" className="px-8 py-4 bg-primary text-white font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors text-center">
                Conocer Servicios
              </Link>
              <Link href="/contacto" className="px-8 py-4 border border-white text-white font-heading uppercase tracking-widest text-sm hover:bg-white hover:text-foreground transition-colors text-center">
                Hablar con un Experto
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 z-10">
          <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-white animate-[bounce_2s_infinite]"></div>
          </div>
        </div>
      </section>

      {/* 2. QUIÉNES SOMOS RESUMEN */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            {/* modern office interior */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=960&q=80" 
              alt="Santos & Becker Office" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 px-6 md:px-16 py-24 lg:py-0 flex flex-col justify-center bg-white">
            <FadeIn direction="left">
              <p className="font-heading text-primary uppercase tracking-[0.2em] text-sm mb-6 font-semibold">
                Quiénes Somos
              </p>
              <h2 className="font-heading text-4xl md:text-6xl text-foreground font-bold leading-tight mb-8">
                Especialistas en movilidad global y compliance migratorio
              </h2>
              <div className="font-sans text-xl text-muted-foreground leading-relaxed space-y-6 mb-12">
                <p>
                  Santos & Becker nace de la convicción de que la migración corporativa debe ser gestionada con la misma excelencia estratégica que cualquier decisión empresarial crítica.
                </p>
                <p>
                  Combinamos expertise jurídico profundo con inteligencia tecnológica para ofrecer soluciones migratorias de primer nivel.
                </p>
              </div>
              <Link href="/nosotros" className="inline-flex items-center text-primary font-heading uppercase tracking-widest text-sm font-semibold hover:text-foreground transition-colors group">
                Conocer nuestra historia
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. PROPÓSITO */}
      <section className="bg-foreground text-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="font-heading uppercase tracking-[0.2em] text-sm mb-12 text-white/50">
              Propósito
            </p>
            <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl leading-tight mb-24 italic">
              "Transformamos la complejidad migratoria en ventaja competitiva para organizaciones que operan sin fronteras."
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-16">
              <div>
                <p className="font-heading text-6xl md:text-7xl text-primary font-bold mb-4">+500</p>
                <p className="font-heading uppercase tracking-widest text-sm text-white/70">Casos Resueltos</p>
              </div>
              <div>
                <p className="font-heading text-6xl md:text-7xl text-primary font-bold mb-4">+20</p>
                <p className="font-heading uppercase tracking-widest text-sm text-white/70">Países Operados</p>
              </div>
              <div>
                <p className="font-heading text-6xl md:text-7xl text-primary font-bold mb-4">98%</p>
                <p className="font-heading uppercase tracking-widest text-sm text-white/70">Tasa de Éxito</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. DIFERENCIADORES */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-20">
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
              Por qué elegirnos
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground font-bold">
              Una firma diferente
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {[
              {
                title: "Expertise Jurídico Profundo",
                desc: "Análisis técnico riguroso de cada caso para asegurar la viabilidad legal y anticipar posibles contingencias."
              },
              {
                title: "Tecnología de Vanguardia",
                desc: "Plataforma propietaria que otorga visibilidad total del estatus migratorio en tiempo real a nuestros clientes."
              },
              {
                title: "Enfoque Bespoke",
                desc: "Atención personalizada y estratégica, alejada de procesos industrializados, diseñada para altos ejecutivos."
              },
              {
                title: "Red Global de Alianzas",
                desc: "Conexiones con firmas líderes en múltiples jurisdicciones para facilitar procesos multinacionales."
              }
            ].map((item, i) => (
              <div key={i} className="accent-top-border pt-8">
                <h3 className="font-heading text-2xl font-bold mb-4">{item.title}</h3>
                <p className="font-sans text-lg text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 5. SERVICIOS OVERVIEW */}
      <section className="bg-gray-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <p className="font-heading text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
                  Servicios
                </p>
                <h2 className="font-heading text-5xl md:text-6xl text-foreground font-bold">
                  Soluciones migratorias integrales
                </h2>
              </div>
              <Link href="/servicios" className="hidden md:inline-flex items-center text-primary font-heading uppercase tracking-widest text-sm font-semibold hover:text-foreground transition-colors group">
                Ver todos los servicios
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Visas Corporativas", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" },
                { title: "Compliance Migratorio", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
                { title: "Movilidad de Talento", img: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80" },
              ].map((service, i) => (
                <Link key={i} href="/servicios" className="group block relative h-[500px] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${service.img}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="font-heading text-3xl text-white font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 md:hidden">
              <Link href="/servicios" className="inline-flex items-center text-primary font-heading uppercase tracking-widest text-sm font-semibold hover:text-foreground transition-colors group">
                Ver todos los servicios
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. TECNOLOGÍA */}
      <section className="w-full bg-white">
        <div className="flex flex-col-reverse lg:flex-row min-h-[80vh]">
          <div className="lg:w-1/2 px-6 md:px-16 py-24 flex flex-col justify-center">
            <FadeIn>
              <p className="font-heading text-primary uppercase tracking-[0.2em] text-sm mb-6 font-semibold">
                Tecnología
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold leading-tight mb-8">
                Plataforma digital de gestión migratoria
              </h2>
              <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-10">
                Desarrollamos herramientas tecnológicas propias que permiten monitorear en tiempo real el estado de cada trámite, anticipar riesgos de cumplimiento y garantizar la trazabilidad completa de cada caso.
              </p>
              
              <ul className="space-y-6 mb-12">
                {["Panel de control en tiempo real", "Alertas automáticas de vencimiento", "Repositorio digital de documentos"].map((item, i) => (
                  <li key={i} className="accent-left-border font-heading text-xl text-foreground font-medium">
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/tecnologia" className="inline-flex items-center px-8 py-4 bg-foreground text-white font-heading uppercase tracking-widest text-sm hover:bg-black transition-colors">
                Explorar tecnología
              </Link>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            {/* tech dashboard abstract */}
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=960&q=80" 
              alt="Tecnología Santos & Becker" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. COLABORACIONES */}
      <section className="py-24 px-6 border-y border-border bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-heading text-primary uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
                Alianzas Estratégicas
              </p>
              <h2 className="font-heading text-4xl text-foreground font-bold mb-4">
                Red global de partners
              </h2>
              <p className="font-sans text-lg text-muted-foreground">
                Colaboramos con firmas líderes en jurisdicciones clave a nivel mundial
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              {["Deloitte", "PwC", "Baker McKenzie", "KPMG", "EY"].map((logo, i) => (
                <span key={i} className="font-heading text-3xl font-bold tracking-widest">
                  {logo}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. BESPOKE */}
      <section className="relative py-40 px-6">
        {/* luxury bespoke service */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="font-heading text-accent uppercase tracking-[0.3em] text-sm mb-6 font-semibold">
              Servicio Bespoke
            </p>
            <h2 className="font-heading text-5xl md:text-7xl text-white font-bold mb-8">
              Atención exclusiva para perfiles de alto impacto
            </h2>
            <p className="font-sans text-2xl text-white/80 mb-12 italic">
              Para ejecutivos, inversores y talentos excepcionales que requieren un servicio absolutamente personalizado. Sin plantillas. Sin compromisos.
            </p>
            
            <Link href="/contacto" className="inline-block px-10 py-5 bg-primary text-white font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
              Solicitar Consulta Bespoke
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground font-bold mb-6">
              ¿Listo para comenzar?
            </h2>
            <p className="font-sans text-2xl text-muted-foreground mb-12">
              Agenda una consulta inicial y descubra cómo podemos transformar su estrategia migratoria.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contacto" className="px-10 py-4 bg-primary text-white font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
                Agendar Consulta
              </Link>
              <a href="tel:+525512345678" className="px-10 py-4 border border-foreground text-foreground font-heading uppercase tracking-widest text-sm hover:bg-foreground hover:text-white transition-colors">
                Llamar ahora
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
