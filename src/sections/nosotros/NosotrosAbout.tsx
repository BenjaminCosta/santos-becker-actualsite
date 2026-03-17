import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function NosotrosAbout() {
  const c = useContent().nosotros.about;

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[85vh]">

        {/* Left: editorial text */}
        <div className="lg:w-[45%] px-8 md:px-16 xl:px-24 py-28 flex flex-col justify-center">
          <FadeIn direction="right">
            <p className="typo-eyebrow text-primary mb-6">{c.eyebrow}</p>
            <h2 className="typo-title text-5xl md:text-6xl text-foreground mb-10">
              {c.title}
            </h2>
            <div className="font-sans text-lg text-muted-foreground space-y-5 leading-relaxed border-l-2 border-accent/30 pl-6 mb-12">
              {c.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Link href="/equipo" className="section-cta-inline section-cta-inline-dark group">
              {c.cta}
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </FadeIn>
        </div>

        {/* Right: full-height image + quote overlay */}
        <div className="lg:w-[55%] relative min-h-[60vh] lg:min-h-full">
          <FadeIn direction="left" className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Santos & Becker"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/92 via-dark-accent/25 to-transparent" />

            {/* Quote overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 z-10">
              <span
                className="font-heading leading-none text-accent/50 block select-none"
                style={{ fontSize: "5rem", lineHeight: 1, marginBottom: "-1rem" }}
              >
                "
              </span>
              <p className="font-sans text-xl md:text-2xl text-white italic leading-relaxed max-w-md">
                {c.quote}
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
