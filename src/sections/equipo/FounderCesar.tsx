import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function FounderCesar() {
  const c = useContent().equipo.cesar;

  return (
    <section className="w-full bg-gray-50" style={{ borderTop: '1px solid #e5e7eb' }}>
      <div className="flex flex-col lg:flex-row-reverse min-h-[75vh]">
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=960&q=80"
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
            <div className="flex flex-col gap-2 font-heading text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              <a href={`mailto:${c.email}`} className="hover:text-primary transition-colors">{c.email}</a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
