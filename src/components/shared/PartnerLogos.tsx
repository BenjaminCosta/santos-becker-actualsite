import { FadeIn } from "@/components/ui/FadeIn";

const LOGOS = ["Deloitte", "PwC", "Baker McKenzie", "KPMG", "EY"];

interface PartnerLogosProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bg?: string;
  border?: string;
}

export function PartnerLogos({
  eyebrow = "Alianzas Estratégicas",
  title = "Red global de partners",
  subtitle = "Colaboramos con firmas líderes en jurisdicciones clave a nivel mundial",
  bg = "bg-white",
  border = "border-y border-border",
}: PartnerLogosProps) {
  return (
    <section className={`py-24 px-6 ${border} ${bg}`}>
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="typo-eyebrow text-primary mb-4">
              {eyebrow}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
              {title}
            </h2>
            <div className="w-10 h-[2px] bg-accent mx-auto mb-4"></div>
            <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-14 md:gap-20 opacity-30 grayscale">
            {LOGOS.map((logo, i) => (
              <span key={i} className="font-heading text-2xl md:text-3xl font-bold tracking-widest">
                {logo}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
