import { FadeIn } from "@/components/ui/FadeIn";

export function Equipo() {
  const operationalTeam = [
    {
      name: "Carlos Mendoza",
      role: "Director de Práctica",
      bio: "Lidera las operaciones de visas corporativas y el enlace estratégico con autoridades gubernamentales.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Elena Ríos",
      role: "Head of Tech & Innovation",
      bio: "Arquitecta de la plataforma propietaria y de los procesos de automatización jurídico-migratoria.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Roberto Garza",
      role: "Senior Counsel",
      bio: "Especialista en casos Bespoke e inversionistas de alto patrimonio en jurisdicciones internacionales.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sofía Laurent",
      role: "Asociada Senior",
      bio: "Experta en inclusión laboral internacional y cumplimiento de normativas de contratación extranjera.",
      img: "https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-background">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[65vh] w-full flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.3) 100%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold">Las Personas Detrás de la Firma</p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
              Nuestro Equipo
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mx-auto italic leading-relaxed">
              Profesionales dedicados a la excelencia jurídica y el servicio de primer nivel.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 55%)' }}></div>
      </section>

      {/* ─── 2. OSCAR SANTOS — SOCIO FUNDADOR ────────────────────── */}
      <section className="w-full bg-white">
        <div className="flex flex-col lg:flex-row min-h-[75vh]">
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=960&q=80"
              alt="Oscar Santos"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
          </div>
          <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center bg-white">
            <FadeIn direction="left">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Socio Fundador</p>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                Oscar Santos
              </h2>
              <div className="w-10 h-[2px] bg-accent mb-8"></div>
              <div className="font-sans text-xl text-muted-foreground space-y-5 leading-relaxed mb-10">
                <p>
                  Abogado especialista en derecho migratorio corporativo con más de 20 años de experiencia asesorando a empresas Fortune 500 y organizaciones multinacionales en estrategias de movilidad global.
                </p>
                <p>
                  Fundó Santos & Becker con la visión de transformar la práctica migratoria en una herramienta estratégica para el crecimiento empresarial. Su enfoque combina rigor jurídico con visión de negocio.
                </p>
                <p>
                  Ha liderado más de 300 casos corporativos de alta complejidad en América Latina, Europa y Asia.
                </p>
              </div>
              <div className="flex flex-col gap-2 font-heading text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                <span>oscar.santos@santosbecker.com</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 3. CÉSAR BECKER — SOCIO FUNDADOR ────────────────────── */}
      <section className="w-full bg-gray-50" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="flex flex-col lg:flex-row-reverse min-h-[75vh]">
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=960&q=80"
              alt="César Becker"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
          </div>
          <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
            <FadeIn direction="right">
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold">Socio Fundador</p>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                César Becker
              </h2>
              <div className="w-10 h-[2px] bg-accent mb-8"></div>
              <div className="font-sans text-xl text-muted-foreground space-y-5 leading-relaxed mb-10">
                <p>
                  Especialista en compliance migratorio y estructuración de proyectos transnacionales, con trayectoria en las principales jurisdicciones de América Latina, Europa y Asia Pacífico.
                </p>
                <p>
                  Co-fundó Santos & Becker como la firma de referencia para organizaciones que requieren no solo soluciones migratorias, sino una visión integral del riesgo regulatorio global.
                </p>
                <p>
                  Su liderazgo ha sido clave en el desarrollo de la plataforma tecnológica propietaria de la firma y en la consolidación de la red global de alianzas estratégicas.
                </p>
              </div>
              <div className="flex flex-col gap-2 font-heading text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                <span>cesar.becker@santosbecker.com</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 4. EQUIPO OPERATIVO ─────────────────────────────────── */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-4 font-semibold">Equipo</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Equipo Operativo</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {operationalTeam.map((member, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="group cursor-pointer">
                <div className="w-full h-[380px] overflow-hidden mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">{member.name}</h3>
                <div className="w-6 h-[2px] bg-accent my-2"></div>
                <p className="font-heading uppercase tracking-[0.12em] text-[9px] text-muted-foreground mb-3">{member.role}</p>
                <p className="font-sans text-base text-foreground/70 leading-relaxed">{member.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Join CTA */}
        <FadeIn>
          <div className="mt-24 pt-16 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-heading text-primary uppercase tracking-[0.25em] text-[10px] mb-3 font-semibold">Carreras</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Únete a la firma</h3>
              <p className="font-sans text-lg text-muted-foreground mt-3 max-w-lg">Buscamos talento excepcional con vocación por la excelencia jurídica y visión global.</p>
            </div>
            <a href="mailto:careers@santosbecker.com" className="shrink-0 inline-flex items-center gap-2 border-b border-foreground/25 pb-1 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground hover:text-primary hover:border-primary transition-colors group">
              Enviar CV
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
