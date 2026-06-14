import { FadeIn } from "@/components/ui/FadeIn";

interface InternalPageHeroProps {
  image: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  titleClassName?: string;
  titleFontSize?: string;
}

export function InternalPageHero({
  image,
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  titleClassName = "mx-auto",
  titleFontSize = "clamp(2.6rem, 6.5vw, 6.5rem)",
}: InternalPageHeroProps) {
  return (
    <section className="relative h-[75vh] min-h-[600px] w-full flex items-center justify-center pt-28 md:pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/62" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto">

        {/* Eyebrow */}
        <FadeIn delay={0} distance={10}>
          <p className="typo-eyebrow mb-7 text-accent">
            {eyebrow}
          </p>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.12} distance={14}>
          <h1 className={`font-heading font-bold tracking-[-0.01em] mb-10 ${titleClassName}`}
              style={{ fontSize: titleFontSize, lineHeight: 0.9 }}>
            <span className="block text-white">{titleLine1}</span>
            <span className="block text-accent">{titleLine2}</span>
          </h1>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.22} distance={8}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-px bg-white/20" />
            <div className="w-1.5 h-1.5 bg-accent" />
            <div className="w-10 h-px bg-white/20" />
          </div>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.3} distance={10}>
          <p className="font-sans text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>

      </div>

      {/* Gold bottom bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-[3px]"
        style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, transparent 55%)' }}
      />
    </section>
  );
}
