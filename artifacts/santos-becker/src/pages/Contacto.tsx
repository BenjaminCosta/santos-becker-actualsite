import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";

export function Contacto() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias. Su consulta ha sido enviada al equipo de Santos & Becker. Nos pondremos en contacto en menos de 24 horas.");
  };

  return (
    <div className="bg-background">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[55vh] w-full flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold">Estamos aquí</p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
              Contacto
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mx-auto italic leading-relaxed">
              Agende una consulta con nuestros socios y dé el primer paso hacia una estrategia migratoria de alto nivel.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 55%)' }}></div>
      </section>

      {/* ─── 2. FORMULARIO DE CONTACTO ───────────────────────────── */}
      <section className="py-28 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Form — wider col */}
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Formulario</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 leading-tight">Agende una consulta</h2>
              <form onSubmit={handleSubmit} className="space-y-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">Nombre Completo *</label>
                    <input type="text" required className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-lg" placeholder="Su nombre" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">Empresa *</label>
                    <input type="text" required className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-lg" placeholder="Nombre de su empresa" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">Email Corporativo *</label>
                    <input type="email" required className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-lg" placeholder="email@empresa.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">Teléfono</label>
                    <input type="tel" className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-lg" placeholder="+52 55 0000 0000" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">Tipo de Consulta</label>
                  <select className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-lg text-foreground cursor-pointer" style={{ borderRadius: 0 }}>
                    <option>Estrategia Migratoria Corporativa</option>
                    <option>Servicios para Profesionales y Familias</option>
                    <option>Compliance Migratorio</option>
                    <option>Inclusión Laboral</option>
                    <option>Servicio Bespoke</option>
                    <option>Plataforma Tecnológica / SAM</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">Mensaje *</label>
                  <textarea rows={4} required className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-lg resize-none" placeholder="Describa brevemente su situación o necesidad..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
                  Enviar Consulta
                </button>
              </form>
            </FadeIn>
          </div>

          {/* ─── 3. DATOS DE CONTACTO ─────────────────────────────── */}
          <div className="lg:col-span-2">
            <FadeIn direction="left" delay={0.1}>
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Información</p>
              <h3 className="font-heading text-3xl font-bold mb-10">Datos de contacto</h3>

              <div className="space-y-12">
                <div>
                  <p className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground mb-3">Teléfono</p>
                  <a href="tel:+525512345678" className="font-sans text-2xl text-foreground hover:text-primary transition-colors">+52 (55) 1234 5678</a>
                </div>
                <div>
                  <p className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground mb-3">Email</p>
                  <a href="mailto:info@santosbecker.com" className="font-sans text-xl text-foreground hover:text-primary transition-colors">info@santosbecker.com</a>
                </div>
                <div>
                  <p className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground mb-3">WhatsApp Corporativo</p>
                  <a href="https://wa.me/525512345678" className="font-sans text-xl text-foreground hover:text-primary transition-colors">+52 (55) 1234 5678</a>
                </div>
                <div>
                  <p className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground mb-3">Horario de Atención</p>
                  <p className="font-sans text-lg text-foreground leading-relaxed">
                    Lunes a Jueves: 9:00 – 18:00<br/>
                    Viernes: 9:00 – 15:00
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-border"></div>

                {/* ─── 4. OFICINAS ──────────────────────────────────── */}
                <div>
                  <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Oficinas</p>
                  <div className="space-y-8">
                    <div>
                      <p className="font-heading text-sm font-bold mb-2">Ciudad de México</p>
                      <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                        Torre Virreyes, Piso 34<br/>
                        Pedregal 24, Lomas de Chapultepec<br/>
                        11040 CDMX, México
                      </p>
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold mb-2">Monterrey</p>
                      <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                        Torre KOI, Piso 18<br/>
                        Av. Fundidora 501, Obispado<br/>
                        64060 Monterrey, N.L.
                      </p>
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold mb-2">Miami (Representación)</p>
                      <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                        Brickell City Centre<br/>
                        78 SW 7th St, Suite 1200<br/>
                        Miami, FL 33130
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Visual */}
      <section className="h-[380px] w-full relative overflow-hidden border-t border-border">
        <div
          className="w-full h-full bg-cover bg-center grayscale opacity-75"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1920&q=80")' }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white px-8 py-4 flex items-center gap-3">
            <div className="w-3 h-3 bg-primary shrink-0"></div>
            <span className="font-heading uppercase tracking-[0.15em] text-sm font-bold">Santos & Becker — CDMX</span>
          </div>
        </div>
      </section>

      {/* ─── 5. CTA ALTERNATIVO ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50 border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Acceso Inmediato</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">¿Prefiere una respuesta inmediata?</h2>
            <p className="font-sans text-lg text-muted-foreground mb-10 leading-relaxed">
              SAM, nuestro asistente virtual, está disponible 24/7 para orientarle sobre sus necesidades migratorias y conectarle con el equipo adecuado.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="https://wa.me/525512345678" className="px-10 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors text-center">
                Escribir por WhatsApp
              </a>
              <Link href="/tecnologia" className="px-10 py-4 border border-foreground/30 text-foreground font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-foreground hover:text-white transition-colors text-center">
                Conocer SAM
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
