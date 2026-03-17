import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function InclusionAlliances() {
  const c = useContent().inclusion.alliances;

  return (
    <section className="py-28 md:py-36 px-6 lg:px-16 xl:px-24 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">

        {/* Asymmetric image gallery — left */}
        <FadeIn direction="right">
          <div className="relative pb-16 md:pb-20">
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-0.5 h-24 bg-accent z-10" />

            {/* Large portrait image */}
            <div className="w-[88%] h-120 overflow-hidden ml-4">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=960&q=80"
                alt="Inclusión Laboral"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Smaller overlapping image — bottom right */}
            <div className="absolute bottom-0 right-0 w-[52%] h-60 overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Alianzas corporativas"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent dot */}
            <div className="absolute bottom-6 left-0 w-3 h-3 bg-accent" />
          </div>
        </FadeIn>

        {/* Content — right */}
        <FadeIn direction="left" delay={0.12}>
          <div>
            <p className="typo-eyebrow text-primary mb-5">{c.eyebrow}</p>
            <h2 className="typo-title text-4xl md:text-5xl text-foreground mb-8">
              {c.title}
            </h2>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-14">
              {c.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 border-t border-border pt-10">
              {c.items.map((org, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1 h-4 bg-accent shrink-0" />
                    <p className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {org.name}
                    </p>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-snug pl-3">
                    {org.full}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
