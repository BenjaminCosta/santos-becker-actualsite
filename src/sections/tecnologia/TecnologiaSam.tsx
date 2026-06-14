import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { tecnologiaImages } from "@/assets/site/siteImages";

export function TecnologiaSam() {
  const c = useContent().tecnologia.sam;

  return (
    <section className="relative bg-dark-accent py-28 md:py-40 overflow-hidden">

      {/* Background circuit pattern */}
      <img
        src={tecnologiaImages.sam}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08] pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-dark-accent/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6">

        {/* Header — centered */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="typo-eyebrow text-primary mb-6">{c.eyebrow}</p>
            <h2 className="typo-title text-4xl md:text-6xl text-white mb-6">
              {c.title}
            </h2>
            <div className="w-10 h-[2px] bg-accent mx-auto mb-10" />
            <div className="font-sans text-lg md:text-xl text-white/65 space-y-5 leading-relaxed">
              {c.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </FadeIn>

        {/* Video portrait — protagonist */}
        <FadeIn delay={0.15}>
          <div className="relative mx-auto w-full max-w-80 md:max-w-95">

            {/* Green glow — tight, centered on card edges */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl"
              style={{
                boxShadow: '0 0 60px 12px rgba(0,176,124,0.22), 0 0 120px 24px rgba(0,176,124,0.10)',
              }}
            />

            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-[0_48px_120px_-20px_rgba(0,0,0,0.9)]">
              <video
                src={tecnologiaImages.samVideo}
                poster={tecnologiaImages.sam}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-9/16 h-auto w-full object-cover"
              />
              {/* Inner ring */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8" />
              {/* Top fade */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/35 to-transparent" />
              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/45 to-transparent" />
            </div>

          </div>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-4 mt-14 justify-center">
            <Link href="/contacto" className="section-cta-rect section-cta-rect-primary">
              {c.cta} →
            </Link>
            {c.youtubeHref && (
              <a
                href={c.youtubeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="section-cta-rect section-cta-rect-outline-light inline-flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {c.youtubeCta}
              </a>
            )}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
