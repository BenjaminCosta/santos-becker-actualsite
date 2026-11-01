import { Play } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

const INTERVIEW_URL = "https://www.youtube.com/watch?v=tI4SiuLEJ-s";

export function InclusionInterview() {
  const c = useContent().inclusion.interview;

  return (
    <section className="bg-muted px-6 py-24 md:py-32 lg:px-16 xl:px-24" aria-labelledby="interview-title">
      <div className="mx-auto grid max-w-360 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <p className="typo-eyebrow text-primary mb-5">{c.eyebrow}</p>
          <h2 id="interview-title" className="typo-title text-4xl md:text-5xl text-foreground mb-8">{c.title}</h2>
          <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-8">{c.body}</p>
          <a href={INTERVIEW_URL} target="_blank" rel="noopener noreferrer" className="section-cta-rect section-cta-rect-primary">
            {c.cta}
          </a>
        </FadeIn>
        <FadeIn delay={0.1}>
          <a href={INTERVIEW_URL} target="_blank" rel="noopener noreferrer" aria-label={c.cta}
            className="group relative block aspect-video w-full overflow-hidden bg-dark-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <img src="https://i.ytimg.com/vi/tI4SiuLEJ-s/hqdefault.jpg" alt={c.previewAlt} width="480" height="360" loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/15">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform group-hover:scale-110">
                <Play className="size-7 ml-1" fill="currentColor" aria-hidden="true" />
              </span>
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
