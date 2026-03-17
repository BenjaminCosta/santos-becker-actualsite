import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import purposeHandshake from "@/assets/purpose-handshake.jpg";

export function HomePurpose() {
  const c = useContent().home.purpose;

  return (
    <section className="relative w-full py-24 lg:py-32 bg-dark-accent overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={purposeHandshake}
          alt="Propósito"
          loading="lazy"
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'saturate(0.25) hue-rotate(160deg)' }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(26,26,26,0.95), rgba(26,26,26,0.92), rgba(26,26,26,0.97))' }}
        />
      </div>

      {/* Yellow accent shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-accent/10" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/5" />

      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              eyebrow={c.eyebrow}
              title={
                <>
                  {c.titleLines[0]}
                  <span className="block mt-2">{c.titleLines[1]}</span>
                </>
              }
              variant="dark"
              align="center"
              className="mb-10"
              titleClassName="max-w-3xl mx-auto"
            />

            <div className="relative mb-10">
              <span className="absolute -top-8 -left-4 font-heading text-[12rem] leading-none select-none pointer-events-none text-accent/10">
                "
              </span>
              <div className="font-sans text-xl text-white/75 max-w-3xl mx-auto space-y-5 leading-relaxed relative z-10 text-left">
                {c.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <Link
              href="/nosotros"
              className="group section-cta-inline section-cta-inline-accent"
            >
              {c.cta}
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
