import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function OperationalTeam() {
  const c = useContent().equipo;

  return (
    <>
      <section className="py-32 px-6 max-w-360 mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="typo-eyebrow text-primary mb-4">{c.team.eyebrow}</p>
            <h2 className="typo-title text-4xl md:text-5xl text-foreground">{c.team.title}</h2>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed mt-6 max-w-3xl">
              {c.team.intro}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.team.members.map((member, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="group cursor-pointer">
                <div className="w-full h-95 overflow-hidden mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">{member.name}</h3>
                <div className="w-6 h-0.5 bg-accent my-2"></div>
                <p className="font-heading uppercase tracking-[0.12em] text-[9px] text-muted-foreground mb-3">{member.role}</p>
                <p className="font-sans text-base text-foreground/70 leading-relaxed">{member.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Careers CTA */}
      <section className="bg-dark-accent px-8 md:px-16 py-24 md:py-32 relative overflow-hidden">
        <FadeIn>
          <div className="relative z-10 max-w-200">
            <p className="typo-eyebrow text-accent mb-6">{c.carreras.eyebrow}</p>
            <h2 className="typo-title text-4xl md:text-5xl text-white mb-6">{c.carreras.title}</h2>
            <p className="font-sans text-xl text-white/60 leading-relaxed mb-12">{c.carreras.desc}</p>
            <a
              href={`mailto:${c.carreras.email}`}
              className="section-cta-rect section-cta-rect-primary"
            >
              {c.carreras.cta}
            </a>
          </div>
        </FadeIn>
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none overflow-hidden">
          <span className="font-heading text-[28rem] leading-none tracking-tighter text-white block">S&B</span>
        </div>
      </section>
    </>
  );
}
