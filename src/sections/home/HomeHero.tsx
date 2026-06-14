import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { homeImages } from "@/assets/site/siteImages";

export function HomeHero() {
  const c = useContent().home.hero;

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center pt-28 md:pt-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeImages.hero}
          alt="Movilidad global Santos & Becker"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/62" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 60% at -5% 105%, rgba(235,215,35,0.06) 0%, transparent 65%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-16">

        <FadeIn delay={0} distance={10}>
          <p className="typo-eyebrow text-accent mb-8 flex items-center gap-3" style={{ fontSize: '0.8rem', letterSpacing: '0.18em' }}>
            <span className="inline-block w-5 h-px bg-accent" />
            {c.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.14} distance={22}>
          <h1
            className="font-heading font-bold leading-[1.05] tracking-tight mb-8 text-white"
            style={{ fontSize: 'clamp(2.15rem, 6vw, 6rem)', textTransform: 'none' }}
          >
            {c.lines.map((line, i) => (
              <span key={i} className="block uppercase">{line}</span>
            ))}
          </h1>
        </FadeIn>

        <FadeIn delay={0.26} distance={6}>
          <div className="w-14 h-[3px] bg-accent mb-9" />
        </FadeIn>

        <FadeIn delay={0.34} distance={14}>
          <p className="font-sans text-base md:text-2xl text-white/85 max-w-[560px] mb-10 md:mb-14 leading-relaxed">
            {c.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.44} distance={10}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contacto" className="btn-slide-primary">
              <span>{c.ctaPrimary}</span>
            </Link>
            <Link href="/servicios" className="btn-slide-secondary">
              <span>{c.ctaSecondary}</span>
            </Link>
          </div>
        </FadeIn>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-14 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white/55 animate-slide-down" />
        </div>
      </div>

    </section>
  );
}
