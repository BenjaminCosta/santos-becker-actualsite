import { FadeIn } from "@/components/ui/FadeIn";

export function Equipo() {
  // Placeholder data for team
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
      bio: "Experta en inclusión laboral y cumplimiento de normativas de contratación.",
      img: "https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-background pt-24">
      {/* Inner Hero */}
      <section className="bg-foreground text-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight mb-8">
              Nuestro Equipo
            </h1>
            <p className="font-sans text-2xl text-white/80 max-w-3xl mx-auto italic">
              Profesionales dedicados a la excelencia jurídica y el servicio premium.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <FadeIn key={index} delay={index * 0.1} className={index < 2 ? "lg:col-span-1" : ""}>
              <div className="group cursor-pointer">
                {/* Image strict rectangle */}
                <div className={`w-full mb-6 overflow-hidden bg-gray-50 ${index < 2 ? 'h-[500px]' : 'h-[400px]'}`}>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                {/* Info */}
                <div className="pt-4">
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <div className="w-8 h-[2px] bg-accent my-3"></div>
                  <p className="font-heading uppercase tracking-widest text-xs text-muted-foreground mb-4">
                    {member.role}
                  </p>
                  <p className="font-sans text-lg text-foreground/80">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Join us CTA */}
      <section className="bg-gray-50 py-24 px-6 text-center border-t border-border">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold mb-6">Únete a la firma</h2>
          <p className="font-sans text-xl text-muted-foreground mb-8">
            Buscamos talento excepcional para nuestras oficinas.
          </p>
          <a href="mailto:careers@santosbecker.com" className="inline-block border-b-2 border-foreground pb-1 font-heading uppercase tracking-widest text-sm text-foreground hover:text-primary hover:border-primary transition-colors">
            Enviar CV →
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
