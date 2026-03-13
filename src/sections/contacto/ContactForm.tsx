import { FadeIn } from "@/components/ui/FadeIn";

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  alert("Gracias. Su consulta ha sido enviada al equipo de Santos & Becker. Nos pondremos en contacto en menos de 24 horas.");
}

const OFFICES = [
  { city: "Ciudad de México", address: "Torre Virreyes, Piso 34\nPedregal 24, Lomas de Chapultepec\n11040 CDMX, México" },
  { city: "Monterrey",        address: "Torre KOI, Piso 18\nAv. Fundidora 501, Obispado\n64060 Monterrey, N.L." },
  { city: "Miami (Representación)", address: "Brickell City Centre\n78 SW 7th St, Suite 1200\nMiami, FL 33130" },
];

export function ContactForm() {
  return (
    <section className="py-28 px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

        {/* Form — wider col */}
        <div className="lg:col-span-3">
          <FadeIn direction="right">
            <p className="typo-eyebrow text-primary mb-4">Formulario</p>
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

        {/* Contact Info + Offices */}
        <div className="lg:col-span-2">
          <FadeIn direction="left" delay={0.1}>
            <p className="typo-eyebrow text-primary mb-4">Información</p>
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

              <div className="w-full h-[1px] bg-border"></div>

              <div>
                <p className="typo-eyebrow text-primary mb-6">Oficinas</p>
                <div className="space-y-8">
                  {OFFICES.map((o, i) => (
                    <div key={i}>
                      <p className="font-heading text-sm font-bold mb-2">{o.city}</p>
                      <p className="font-sans text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{o.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
