import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function ServiciosComplementarios() {
  const c = useContent().servicios.complementary;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start">
            <div className="lg:w-2/5 lg:sticky lg:top-32">
              <p className="typo-eyebrow text-primary mb-4">{c.eyebrow}</p>
              <h2 className="typo-title text-4xl md:text-5xl text-foreground mb-6">
                {c.title}
              </h2>
              <p className="font-sans text-xl text-muted-foreground leading-relaxed mb-10">
                {c.intro}
              </p>
              <Link href="/contacto" className="section-cta-rect section-cta-rect-primary">
                {c.cta}
              </Link>
            </div>
            <div className="lg:w-3/5 space-y-0 border-t border-border">
              {c.items.map((item, i) => (
                <div key={i} className="py-10 border-b border-border group cursor-default">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <span className="font-heading text-sm text-muted-foreground shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed mt-4 max-w-2xl">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
