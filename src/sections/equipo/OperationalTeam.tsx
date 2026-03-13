import { FadeIn } from "@/components/ui/FadeIn";

const OPERATIONAL_TEAM = [
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

export function OperationalTeam() {
  return (
    <section className="py-32 px-6 max-w-[1440px] mx-auto">
      <FadeIn>
        <div className="mb-16">
          <p className="typo-eyebrow text-primary mb-4">Equipo</p>
          <h2 className="typo-title text-4xl md:text-5xl text-foreground">Equipo Operativo</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {OPERATIONAL_TEAM.map((member, index) => (
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

      <FadeIn>
        <div className="mt-24 pt-16 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="typo-eyebrow text-primary mb-3">Carreras</p>
            <h3 className="typo-title text-3xl md:text-4xl text-foreground">Únete a la firma</h3>
            <p className="font-sans text-lg text-muted-foreground mt-3 max-w-lg">Buscamos talento excepcional con vocación por la excelencia jurídica y visión global.</p>
          </div>
          <a href="mailto:careers@santosbecker.com" className="shrink-0 inline-flex items-center gap-2 border-b border-foreground/25 pb-1 font-heading uppercase tracking-[0.15em] text-[11px] text-foreground hover:text-primary hover:border-primary transition-colors group">
            Enviar CV
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
