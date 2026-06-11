import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { passportStamp } from "@/assets/photos";

export function FounderCesar() {
  const c = useContent().equipo.cesar;

  return (
    <section className="w-full bg-gray-50" style={{ borderTop: '1px solid #e5e7eb' }}>
      <div className="flex flex-col lg:flex-row-reverse min-h-[75vh]">
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <img
            src={passportStamp}
            alt={c.name}
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
          <FadeIn direction="right">
            <p className="typo-eyebrow text-primary mb-6">{c.eyebrow}</p>
            <h2 className="typo-title text-5xl md:text-6xl text-foreground mb-4">
              {c.name}
            </h2>
            <div className="w-10 h-[2px] bg-accent mb-8"></div>
            <div className="font-sans text-xl text-muted-foreground space-y-5 leading-relaxed mb-10">
              {c.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${c.email}`} className="font-heading text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">{c.email}</a>
              {c.linkedin && (
                <a
                  href={c.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
