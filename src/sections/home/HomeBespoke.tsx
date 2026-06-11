import { Link } from "wouter";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import bespokeOffice from "@/assets/bespoke-office.jpg";

export function HomeBespoke() {
  const c = useContent().home.bespoke;

  return (
    <section className="relative w-full py-24 lg:py-32 bg-dark-accent overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={bespokeOffice}
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

          {/* Right: Testimonial (desktop only) */}
          <FadeIn delay={0.15}>
            <div className="hidden lg:block relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-accent/10" />
              <div className="bg-white/5 backdrop-blur-md p-8 border-l-2 border-accent">
                <span className="font-heading text-accent/20 text-[8rem] leading-none select-none block -mb-8">"</span>
                <p className="font-sans text-lg text-white/80 italic mb-6">
                  {c.testimonial.text}
                </p>
                <div>
                  <span className="font-heading text-sm text-white block uppercase tracking-widest">{c.testimonial.role}</span>
                  <span className="typo-eyebrow text-white/50">{c.testimonial.org}</span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
