import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { inclusionImages } from "@/assets/site/siteImages";

export function InclusionPosition() {
  const c = useContent().inclusion.position;
  const stats = useContent().inclusion.methodology.stats;
  const services = c.services;

  return (
    <>
      {/* ── Editorial split: text left / portraits right ── */}
      <section className="py-28 md:py-36 px-6 lg:px-16 xl:px-24 bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12 items-start">

          {/* Left: eyebrow + title + body */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div>
              <p className="typo-eyebrow text-primary mb-8">{c.eyebrow}</p>
              <h2 className="typo-title text-5xl md:text-6xl text-foreground mb-10">
                {c.title}
              </h2>
              <div className="space-y-5 font-sans text-lg text-muted-foreground leading-relaxed">
                {c.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </FadeIn>

          {/* Right: two portrait images with yellow badge */}
          <FadeIn direction="left" delay={0.1} className="lg:col-span-3">
            <div className="relative flex gap-4 items-start">
              {/* Portrait 1 — taller */}
              <div className="w-1/2 h-110 overflow-hidden">
                <img
                  src={inclusionImages.position[0]}
                  alt="Talento internacional"
                  loading="lazy"
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
              {/* Portrait 2 — shorter, offset down */}
              <div className="w-1/2 h-90 mt-20 overflow-hidden">
                <img
                  src={inclusionImages.position[1]}
                  alt="Talento internacional"
                  loading="lazy"
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
              {/* Accent badge */}
              <div className="absolute bottom-0 left-[calc(50%-90px)] z-10 bg-accent px-7 py-5">
                <p className="font-heading text-[2.8rem] font-bold text-dark-accent leading-none">2026</p>
                <p className="font-heading text-[8px] uppercase tracking-[0.22em] text-dark-accent/60 mt-1">
                  Dossier Index
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── Dark stats strip ── */}
      <section className="bg-dark-accent py-24 px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:divide-x md:divide-white/10">
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="md:px-10 first:pl-0 last:pr-0">
                <p
                  className="font-heading font-bold leading-none mb-5"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", color: "#00B07C" }}
                >
                  {s.n}
                </p>
                <div className="w-full h-px bg-white/15 mb-4" />
                <p className="font-heading text-[9px] uppercase tracking-[0.2em] text-white/40 mb-3">
                  {s.l}
                </p>
                {services[i] && (
                  <p className="font-sans text-sm text-white/45 leading-relaxed">
                    {services[i].desc}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
