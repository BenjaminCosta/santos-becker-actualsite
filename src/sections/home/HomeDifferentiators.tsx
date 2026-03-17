import { FadeIn } from "@/components/ui/FadeIn";
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
          className="mb-20"
          titleClassName="text-5xl md:text-6xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {c.items.map((item, i) => (
            <div key={i} className="pt-8 border-t-2 border-accent relative overflow-hidden">
              <div className="absolute -top-6 -right-2 text-[110px] font-heading font-bold text-foreground opacity-[0.04] pointer-events-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold mb-4">{item.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
