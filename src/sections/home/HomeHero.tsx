import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { homeHeroGlobalMobility } from "@/assets/photos";

export function HomeHero() {
  const c = useContent().home.hero;

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center pt-28 md:pt-32 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${homeHeroGlobalMobility}")` }}
      >
        <div className="absolute inset-0 bg-black/62" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 60% at -5% 105%, rgba(235,215,35,0.06) 0%, transparent 65%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-16">

        <FadeIn delay={0} distance={10}>
          <p className="typo-eyebrow text-accent mb-8 flex items-center gap-3">
            <span className="inline-block w-5 h-px bg-accent" />
            {c.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.14} distance={22}>
          <h1
            className="font-heading font-bold leading-[0.9] tracking-tight mb-8 text-white"
            style={{ fontSize: 'clamp(3.6rem, 7.5vw, 7.5rem)', textTransform: 'none' }}
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
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-[560px] mb-14 leading-relaxed">
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
