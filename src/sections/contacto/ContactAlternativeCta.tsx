import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function ContactAlternativeCta() {
  const c = useContent().contacto.alternativeCta;
  const wa = useContent().global.whatsapp;

  return (
    <section className="py-24 px-6 bg-gray-50 border-t border-border text-center">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <p className="typo-eyebrow text-primary mb-4">{c.eyebrow}</p>
          <h2 className="typo-title text-3xl md:text-4xl text-foreground mb-4">{c.title}</h2>
          <p className="font-sans text-xl text-muted-foreground mb-10 leading-relaxed">
            {c.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={`https://wa.me/${wa.number}?text=${encodeURIComponent(wa.message)}`}
              className="section-cta-rect section-cta-rect-primary"
            >
              {c.ctaPrimary}
            </a>
            <Link
              href="/tecnologia"
              className="section-cta-rect section-cta-rect-outline-dark"
            >
              {c.ctaSecondary}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
