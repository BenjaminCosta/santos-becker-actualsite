import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { teamImages } from "@/assets/site/siteImages";

type TeamImageKey = keyof typeof teamImages.members;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14">
          {c.team.members.map((member, index) => (
            <FadeIn key={member.name} delay={(index % 8) * 0.04}>
              <div className="group cursor-pointer">
                <div className="w-full aspect-[2/3] max-h-[460px] overflow-hidden mb-5 bg-gray-100">
                  <img
                    src={teamImages.members[member.img as TeamImageKey] ?? teamImages.hero}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
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
        {/* Subtle gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.04) 0%, transparent 60%)' }} />
        {/* Accent shapes */}
        <div className="absolute top-12 right-16 w-28 h-28 border border-accent/10 pointer-events-none" />
        <div className="absolute bottom-12 left-16 w-16 h-16 border border-accent/8 pointer-events-none" />

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

        {/* Decorative vertical text */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
          <p
            className="font-heading text-[10px] uppercase tracking-[0.4em] text-white/15"
            style={{ writingMode: "vertical-rl" }}
          >
            Santos &amp; Becker — Únete al equipo
          </p>
        </div>
      </section>
    </>
  );
}
