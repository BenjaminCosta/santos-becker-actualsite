import { Link } from "wouter";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { serviciosImages } from "@/assets/site/siteImages";
import bespokeVisual from "@/assets/site/home/hero.webp";

export function HomeBespoke() {
  const c = useContent().home.bespoke;

  return (
    <section className="relative w-full py-24 lg:py-32 bg-dark-accent overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={serviciosImages.items[3]}
          alt="Servicio Bespoke"
          loading="lazy"
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'saturate(0.25) hue-rotate(160deg)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.98), rgba(26,26,26,0.92), rgba(26,26,26,0.84))' }}
        />
      </div>

      {/* Yellow accent top line */}
      <div className="absolute top-0 left-0 w-1/3 h-0.5 bg-accent" />

      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <FadeIn>
            <div>
              <SectionHeading
                eyebrow={c.eyebrow}
                title={
                  <>
                    {c.titleLines[0]}
                    <span className="block">{c.titleLines[1]}</span>
                  </>
                }
                description={c.desc}
                variant="dark"
                className="mb-10 max-w-lg"
                descriptionClassName="text-base text-white/60"
              />

              {/* Features list */}
              <div className="space-y-3 mb-10">
                {c.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-accent shrink-0" strokeWidth={2} />
                    <span className="font-sans text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contacto"
                className="section-cta-rect section-cta-rect-primary"
              >
                {c.cta}
              </Link>
            </div>
          </FadeIn>

          {/* Right: editorial image */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute -right-6 -top-6 hidden h-32 w-32 border border-accent/15 lg:block" />
              <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 bg-white/5 lg:block" />

              <div className="group relative overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_28px_70px_-34px_rgba(0,0,0,0.85)]">
                <img
                  src={bespokeVisual}
                  alt="Movilidad global para servicios Bespoke"
                  loading="lazy"
                  className="aspect-[16/11] w-full object-cover opacity-85 saturate-[0.8] transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/70 via-dark-accent/12 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-end p-6 md:p-8">
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-white/10 text-accent backdrop-blur-md md:flex">
                    <span className="font-heading text-lg leading-none">S&amp;B</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
