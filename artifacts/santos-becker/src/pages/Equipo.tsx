import { FadeIn } from "@/components/ui/FadeIn";

export function Equipo() {
  const team = [
    {
      name: "Alejandro Santos",
      role: "Socio Fundador",
      bio: "Experto en movilidad corporativa con más de 20 años asesorando a empresas Fortune 500.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Victoria Becker",
      role: "Socia Directora",
      bio: "Especialista en compliance migratorio y estructuración de proyectos transnacionales.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Práctica",
      bio: "Lidera las operaciones de visas corporativas y enlace con autoridades gubernamentales.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Elena Ríos",
      role: "Head of Tech & Innovation",
      bio: "Arquitecta de nuestra plataforma propietaria y procesos de automatización legal.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Roberto Garza",
      role: "Senior Counsel",
      bio: "Especialista en casos Bespoke e inversionistas de alto patrimonio.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sofía Laurent",
      role: "Asociada Senior",
      bio: "Experta en inclusión laboral y cumplimiento de normativas de contratación internacional.",
      img: "https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-background">
      {/* Inner Hero — full-width image, centered */}
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
            <p className="font-heading text-primary uppercase tracking-[0.35em] text-xs mb-6 font-semibold">
              Las Personas Detrás de la Firma
            </p>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-bold tracking-tight leading-[0.9] mb-6">
              Nuestro Equipo
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/75 max-w-2xl mx-auto italic leading-relaxed">
              Profesionales dedicados a la excelencia jurídica y el servicio premium.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: 'linear-gradient(90deg, #EBD723 0%, transparent 55%)' }}></div>
      </section>

      {/* Founding Partners — featured row */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-4 font-semibold">Socios</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold">Liderazgo</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {team.slice(0, 2).map((member, index) => (
            <FadeIn key={index} delay={index * 0.12}>
              <div className="group cursor-pointer">
                <div className="w-full h-[520px] overflow-hidden mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-heading text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {member.name}
                </h3>
                <div className="w-8 h-[2px] bg-accent my-3"></div>
                <p className="font-heading uppercase tracking-[0.15em] text-[10px] text-muted-foreground mb-4">
                  {member.role}
                </p>
                <p className="font-sans text-lg text-foreground/75 max-w-md leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Rest of team */}
        <FadeIn>
          <div className="mb-12 pt-12 border-t border-border">
            <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-4 font-semibold">Equipo</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">Directores y Counsel</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.slice(2).map((member, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="group cursor-pointer">
                <div className="w-full h-[360px] overflow-hidden mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {member.name}
                </h3>
                <div className="w-6 h-[2px] bg-accent my-2"></div>
                <p className="font-heading uppercase tracking-[0.12em] text-[9px] text-muted-foreground mb-3">
                  {member.role}
                </p>
                <p className="font-sans text-base text-foreground/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Join us CTA */}
      <section className="bg-gray-50 py-24 px-6 text-center border-t border-border">
        <FadeIn>
          <p className="font-heading text-primary uppercase tracking-[0.2em] text-xs mb-4 font-semibold">Carreras</p>
          <h2 className="font-heading text-4xl font-bold mb-6">Únete a la firma</h2>
          <p className="font-sans text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Buscamos talento excepcional con vocación por la excelencia jurídica y visión global.
          </p>
          <a href="mailto:careers@santosbecker.com" className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground hover:text-primary hover:border-primary transition-colors group">
            Enviar CV
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
