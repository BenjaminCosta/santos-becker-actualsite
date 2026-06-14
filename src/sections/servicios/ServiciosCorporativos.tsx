import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { serviciosImages } from "@/assets/site/siteImages";

const IMAGES = serviciosImages.items;

export function ServiciosCorporativos() {
  const c = useContent().servicios.corporate;

  return (
    <>
      {/* Section intro */}
      <section className="py-24 px-6 lg:px-16 xl:px-24">
        <FadeIn>
          <p className="typo-eyebrow text-primary mb-8">{c.eyebrow}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            <h2 className="typo-title text-5xl md:text-6xl text-foreground">{c.title}</h2>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed">{c.intro}</p>
          </div>
        </FadeIn>
      </section>

      {/* Service rows */}
      {c.items.map((svc, index) => {
        const isEven = index % 2 === 0;
        const isDark = !isEven;

        return (
          <section
            key={index}
            className={[
              "relative min-h-screen flex flex-col items-center overflow-hidden",
              isEven ? "md:flex-row" : "md:flex-row-reverse",
              isDark ? "bg-white" : "bg-white",
            ].join(" ")}
          >
            {/* Full-height image */}
            <div className="w-full md:w-2/3 h-[55vh] md:h-screen relative overflow-hidden shrink-0">
              <img
                src={IMAGES[index]}
                alt={svc.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? "bg-black/20" : "bg-foreground/10"}`} />
            </div>

            {/* Floating card */}
            <div
              className={[
                "w-full md:w-[44%] md:absolute z-20",
                isEven
                  ? "md:right-10 md:-translate-y-12"
                  : "md:left-10 md:translate-y-12",
              ].join(" ")}
            >
              <FadeIn direction={isEven ? "left" : "right"} className="w-full">
                <div className={[
                  "p-10 md:p-14 backdrop-blur-md shadow-[0_24px_48px_-12px_rgba(25,28,31,0.10)] border-t-2 border-accent",
                  isDark ? "bg-dark-accent/95" : "bg-white/95",
                ].join(" ")}>

                  {/* Number */}
                  <span
                    className="font-heading text-5xl font-bold leading-none mb-4 block"
                    style={{ color: 'hsl(var(--accent))', opacity: 0.4 }}
                  >
                    {svc.num}
                  </span>

                  {/* Title */}
                  <h3 className={`typo-title text-3xl md:text-4xl mb-5 ${isDark ? "text-white" : "text-foreground"}`}>
                    {svc.title}
                  </h3>

                  <div className="max-w-100">
                    {/* Description */}
                    <p className={`font-sans leading-relaxed mb-8 ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
                      {svc.desc}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-10">
                      {svc.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1.25 h-1.25 shrink-0 bg-accent" />
                          <span className={`font-heading text-[11px] uppercase tracking-[0.18em] ${isDark ? "text-white/80" : "text-foreground"}`}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contacto"
                      className="section-cta-rect section-cta-rect-primary"
                    >
                      {c.requestInfo}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}
    </>
  );
}
