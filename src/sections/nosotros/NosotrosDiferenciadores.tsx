import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function NosotrosDiferenciadores() {
  const c = useContent().nosotros.diferenciadores;

  return (
    <section className="bg-white overflow-hidden">

      {/* Editorial intro header */}
      <div className="py-24 px-6 lg:px-16 xl:px-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            <div>
              <p className="typo-eyebrow text-primary mb-6">{c.eyebrow}</p>
              <h2 className="typo-title text-5xl md:text-6xl text-foreground">{c.title}</h2>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Image panel + feature cards */}
      <div className="flex flex-col lg:flex-row">

        {/* Left: full-height image */}
        <div className="lg:w-1/2 relative h-72 lg:h-auto min-h-120 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1200&q=80"
            alt="Diferenciadores Santos & Becker"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-accent/20" />
          {/* Accent line left */}
          <div className="absolute top-0 bottom-0 left-0 w-0.75 bg-accent" />
        </div>

        {/* Right: differentiator cards grid */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 border-l border-t border-border lg:border-t-0">
          {c.items.map((v, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div
                className={[
                  "p-10 border-b border-border group",
                  i % 2 === 0 ? "sm:border-r" : "",
                ].join(" ")}
              >
                <div className="w-8 h-0.5 bg-accent mb-5" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Stats dark strip */}
      <div className="bg-dark-accent py-20 px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:divide-x md:divide-white/10">
          {c.stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="md:px-12 first:pl-0 last:pr-0">
                <p
                  className="font-heading font-bold leading-none mb-3"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 5rem)", color: 'hsl(var(--accent))' }}
                >
                  {s.n}
                </p>
                <div className="w-full h-px bg-white/15 mb-3" />
                <p className="font-heading text-[9px] uppercase tracking-[0.22em] text-white/40">
                  {s.l}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

    </section>
  );
}
