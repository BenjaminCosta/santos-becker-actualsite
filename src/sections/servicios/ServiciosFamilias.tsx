import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServiciosFamilias() {
  const c = useContent().servicios.personal;

  return (
    <section className="py-32 px-6 bg-dark-accent text-white border-t-2 border-accent">
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <SectionHeading
            eyebrow={c.eyebrow}
            title={c.title}
            description={c.intro}
            variant="dark"
            className="mb-20 max-w-3xl"
            titleClassName="text-5xl md:text-6xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {c.items.map((item, i) => (
              <div key={i} className="pt-8 border-t border-white/15 group">
                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="font-sans text-base text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
