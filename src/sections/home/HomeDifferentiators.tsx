import { FadeIn, FadeInGroup, FadeInItem } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HomeDifferentiators() {
  const c = useContent().home.differentiators;

  return (
    <section className="py-32 px-6 max-w-[1440px] mx-auto">
      <FadeIn>
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          className="mb-10"
          titleClassName="text-5xl md:text-6xl"
        />
        {c.subtitle && (
          <div className="max-w-3xl mb-20 space-y-5">
            {c.subtitle.split("\n\n").map((p, i) => (
              <p key={i} className="font-sans text-lg text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        )}
        {!c.subtitle && <div className="mb-20" />}
      </FadeIn>
      <FadeInGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14" stagger={0.1}>
        {c.items.map((item, i) => (
          <FadeInItem key={i}>
            <div className="group pt-8 border-t-2 border-accent relative overflow-hidden hover:border-primary transition-colors duration-300">
              <div className="absolute -top-6 -right-2 text-[110px] font-heading font-bold text-foreground opacity-[0.04] pointer-events-none leading-none select-none group-hover:opacity-[0.07] transition-opacity duration-300">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </FadeInItem>
        ))}
      </FadeInGroup>
    </section>
  );
}
