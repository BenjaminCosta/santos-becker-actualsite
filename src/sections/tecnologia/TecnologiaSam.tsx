import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function TecnologiaSam() {
  const c = useContent().tecnologia.sam;

  return (
    <section className="bg-white py-0">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Visual side */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full bg-dark-accent flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #00B07C 0%, transparent 60%), radial-gradient(circle at 70% 30%, #EBD723 0%, transparent 60%)' }}></div>
          <div className="relative z-10 text-center px-12">
            <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-white/20" style={{ background: 'linear-gradient(135deg, rgba(0,176,124,0.15), rgba(235,215,35,0.08))' }}>
              <span className="font-heading text-4xl font-bold text-white tracking-wider">SAM</span>
            </div>
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/40 mb-3">Santos & Becker</p>
            <p className="font-heading text-lg font-bold text-white/70">{c.fullName}</p>
            <div className="mt-12 text-left max-w-xs mx-auto space-y-4">
              <div className="bg-white/10 px-5 py-3 border-l-2 border-primary">
                <p className="font-sans text-sm text-white/75 italic">"{c.mockQ}"</p>
              </div>
              <div className="bg-primary/20 px-5 py-3 border-l-2 border-accent">
                <p className="font-sans text-sm text-white/75">"{c.mockA}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
          <FadeIn direction="left">
            <p className="typo-eyebrow text-primary mb-6">{c.eyebrow}</p>
            <h2 className="typo-title text-4xl md:text-5xl text-foreground mb-6">
              {c.title}
            </h2>
            <div className="w-10 h-[2px] bg-accent mb-8"></div>
            <div className="font-sans text-xl text-muted-foreground space-y-6 leading-relaxed mb-10">
              {c.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="section-cta-rect section-cta-rect-primary">
                {c.cta}
              </Link>
              {c.youtubeHref && (
                <a
                  href={c.youtubeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-cta-rect section-cta-rect-outline-dark inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  {c.youtubeCta}
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
