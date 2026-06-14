import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { inclusionImages } from "@/assets/site/siteImages";

export function InclusionCta() {
  const c = useContent().inclusion.cta;

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${inclusionImages.cta})`,
        }}
      />
      {/* Primary gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,176,124,0.94) 0%, rgba(0,155,110,0.88) 50%, rgba(0,100,75,0.92) 100%)",
        }}
      />
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 w-full px-8 md:px-16 xl:px-24 py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="typo-eyebrow text-white/60 mb-6">{c.eyebrow}</p>
            <h2 className="typo-title text-5xl md:text-6xl text-white mb-8 max-w-2xl">
              {c.title}
            </h2>
            <p className="font-sans text-xl text-white/75 leading-relaxed mb-14 max-w-xl">
              {c.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="section-cta-rect section-cta-rect-white"
              >
                {c.cta}
                <span>→</span>
              </Link>
              <Link
                href="/servicios"
                className="section-cta-rect section-cta-rect-outline-light"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <p
          className="font-heading text-[10px] uppercase tracking-[0.4em] text-white/20"
          style={{ writingMode: "vertical-rl" }}
        >
          Santos &amp; Becker — Inclusión Laboral
        </p>
      </div>
    </section>
  );
}
