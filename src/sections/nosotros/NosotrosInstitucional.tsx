import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { nosotrosImages } from "@/assets/site/siteImages";

export function NosotrosInstitucional() {
  const c = useContent().nosotros.institucional;
  const p = useContent().nosotros.publicaciones;

  return (
    <>
      <section className="bg-gray-50 py-28 px-6 lg:px-16 xl:px-24 border-y border-border">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionHeading
              eyebrow={c.eyebrow}
              title={c.title}
              className="mb-16 max-w-3xl"
              titleClassName="text-5xl md:text-6xl"
            />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            {[c.mission, c.vision].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="h-full bg-white border-t-2 border-accent p-8 md:p-10">
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-[0.04em] text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.12}>
            <div className="relative mb-14 min-h-[360px] overflow-hidden bg-dark-accent">
              <img
                src={nosotrosImages.metodologia}
                alt="Metodologia Santos & Becker"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-accent/86 via-dark-accent/42 to-transparent" />
              <div className="relative z-10 max-w-xl p-8 md:p-12">
                <p className="typo-eyebrow text-accent mb-5">{c.eyebrow}</p>
                <p className="font-sans text-xl text-white/78 leading-relaxed">
                  {c.mission.desc}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-border bg-white">
            {c.values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.035}>
                <div className="min-h-full border-r border-b border-border p-7 md:p-8">
                  <div className="w-8 h-0.5 bg-accent mb-5" />
                  <h3 className="font-heading text-lg font-bold uppercase tracking-[0.04em] text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 lg:px-16 xl:px-24">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <SectionHeading
                eyebrow={p.eyebrow}
                title={p.title}
                className="lg:col-span-1"
                titleClassName="text-4xl md:text-5xl"
              />
              <div className="lg:col-span-2 border-t border-border">
                {p.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-border"
                  >
                    <div>
                      <p className="typo-eyebrow text-primary mb-3">{item.source}</p>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="font-heading text-sm uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary transition-colors">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
