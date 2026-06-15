import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homeImages, tecnologiaImages } from "@/assets/site/siteImages";

export function HomeTechnology() {
  const c = useContent().home.technology;

  return (
    <section className="relative w-full bg-dark-accent py-24 md:py-36 overflow-hidden">

      {/* Subtle tech bg */}
      <img
        src={homeImages.technology}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-dark-accent/85 pointer-events-none" />

      <div className="relative z-10 max-w-360 mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Text content ── */}
          <FadeIn direction="right" className="flex-1 min-w-0">
            <SectionHeading
              eyebrow={c.eyebrow}
              title={c.title}
              description={c.intro}
              variant="dark"
              className="mb-10"
            />
            <ul className="space-y-5 mb-12">
              {c.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-sans text-lg text-white/65">
                  <span className="w-1.5 h-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/tecnologia" className="section-cta-rect section-cta-rect-primary">
              {c.cta}
            </Link>
          </FadeIn>

          {/* ── Video card ── */}
          <FadeIn direction="left" className="w-full lg:w-auto shrink-0 flex justify-center">
            <div className="relative w-full max-w-100 group">
              {/* Green glow */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl"
                style={{ boxShadow: '0 0 60px 14px rgba(0,176,124,0.22), 0 0 130px 28px rgba(0,176,124,0.10)' }}
              />
              {/* Card */}
              <div
                className="relative overflow-hidden rounded-3xl border border-primary/20 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                style={{ boxShadow: '0 40px 100px -20px rgba(0,0,0,0.8)' }}
              >
                <video
                  src={tecnologiaImages.samVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="aspect-9/16 w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8" />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
