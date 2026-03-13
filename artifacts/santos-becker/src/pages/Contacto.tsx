import { FadeIn } from "@/components/ui/FadeIn";

export function Contacto() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission visually (no backend)
    alert("Gracias. Su mensaje ha sido enviado a Santos & Becker.");
  };

  return (
    <div className="bg-background pt-24">
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h1 className="font-heading text-6xl md:text-8xl text-foreground font-bold tracking-tight mb-4">
              Contacto
            </h1>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left: Info */}
          <FadeIn direction="right">
            <div className="space-y-16">
              <div>
                <h3 className="font-heading uppercase tracking-[0.2em] text-sm text-muted-foreground mb-4">Sede Principal</h3>
                <p className="font-sans text-2xl text-foreground leading-relaxed">
                  Torre Virreyes, Piso 34<br/>
                  Pedregal 24, Lomas de Chapultepec<br/>
                  11040 Ciudad de México, CDMX
                </p>
              </div>

              <div>
                <h3 className="font-heading uppercase tracking-[0.2em] text-sm text-muted-foreground mb-4">Comunicación</h3>
                <p className="font-sans text-2xl text-foreground leading-relaxed">
                  T. +52 (55) 1234 5678<br/>
                  M. info@santosbecker.com
                </p>
              </div>

              <div>
                <h3 className="font-heading uppercase tracking-[0.2em] text-sm text-muted-foreground mb-4">Horario de Atención</h3>
                <p className="font-sans text-xl text-foreground leading-relaxed">
                  Lunes a Jueves: 9:00 - 18:00<br/>
                  Viernes: 9:00 - 15:00
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="left">
            <div className="bg-gray-50 p-10 md:p-16 border border-border">
              <h2 className="font-heading text-3xl font-bold mb-8">Agende una consulta</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-heading uppercase tracking-widest text-xs mb-2 text-muted-foreground">Nombre Completo</label>
                    <input type="text" required className="border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors font-sans text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-heading uppercase tracking-widest text-xs mb-2 text-muted-foreground">Empresa</label>
                    <input type="text" required className="border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors font-sans text-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-heading uppercase tracking-widest text-xs mb-2 text-muted-foreground">Email Corporativo</label>
                    <input type="email" required className="border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors font-sans text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-heading uppercase tracking-widest text-xs mb-2 text-muted-foreground">Teléfono</label>
                    <input type="tel" className="border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors font-sans text-lg" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-heading uppercase tracking-widest text-xs mb-2 text-muted-foreground">Tipo de Consulta</label>
                  <select className="border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors font-sans text-lg text-foreground cursor-pointer rounded-none">
                    <option>Visas Corporativas</option>
                    <option>Compliance Migratorio</option>
                    <option>Servicio Bespoke</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="font-heading uppercase tracking-widest text-xs mb-2 text-muted-foreground">Mensaje Breve</label>
                  <textarea rows={3} required className="border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors font-sans text-lg resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-primary text-white font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors mt-8">
                  Enviar Consulta
                </button>

              </form>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Map visual placeholder */}
      <section className="h-[400px] w-full bg-muted border-t border-border relative">
         <div 
            className="w-full h-full bg-cover bg-center grayscale opacity-80"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1920&q=80")' }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="bg-white px-8 py-4 shadow-xl flex items-center gap-4">
                <div className="w-3 h-3 bg-primary"></div>
                <span className="font-heading uppercase tracking-widest text-sm font-bold">Santos & Becker CDMX</span>
             </div>
          </div>
      </section>

    </div>
  );
}
