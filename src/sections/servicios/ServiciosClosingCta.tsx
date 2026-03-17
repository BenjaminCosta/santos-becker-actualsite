import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServiciosClosingCta() {
  const c = useContent().servicios.closingCta;

  return (
    <section className="bg-dark-accent py-24 px-6 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.04) 0%, transparent 60%)' }}></div>
      <FadeIn>
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.subtitle}
          variant="dark"
          align="center"
          className="mb-10 max-w-3xl mx-auto"
        />
        <Link href="/contacto" className="section-cta-rect section-cta-rect-primary">
          {c.cta}
        </Link>
      </FadeIn>
    </section>
  );
}
