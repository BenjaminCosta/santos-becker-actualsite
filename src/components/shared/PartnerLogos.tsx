import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface PartnerLogosProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  alianzas?: string[];
  afiliaciones?: string[];
  bg?: string;
  border?: string;
}

export function PartnerLogos({
  eyebrow,
  title,
  subtitle,
  alianzas = [],
  afiliaciones = [],
  bg = "bg-white",
  border = "border-y border-border",
}: PartnerLogosProps) {
  const allLogos = [...alianzas, ...afiliaciones];

  return (
    <section className={`py-24 px-6 ${border} ${bg}`}>
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            {title ? (
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={subtitle}
                align="center"
                className="mb-4 max-w-3xl"
                titleClassName="text-3xl md:text-4xl"
              />
            ) : null}
            <div className="w-10 h-[2px] bg-accent mx-auto mb-4"></div>
          </div>

          {alianzas.length > 0 && afiliaciones.length > 0 ? (
            <div className="space-y-10">
              <div className="flex flex-wrap justify-center items-center gap-14 md:gap-20 opacity-30 grayscale">
                {alianzas.map((logo, i) => (
                  <span key={i} className="font-heading text-xl md:text-2xl font-bold tracking-widest">
                    {logo}
                  </span>
                ))}
              </div>
              <div className="w-16 h-px bg-border mx-auto" />
              <div className="flex flex-wrap justify-center items-center gap-14 md:gap-20 opacity-30 grayscale">
                {afiliaciones.map((logo, i) => (
                  <span key={i} className="font-heading text-xl md:text-2xl font-bold tracking-widest">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center gap-14 md:gap-20 opacity-30 grayscale">
              {allLogos.map((logo, i) => (
                <span key={i} className="font-heading text-2xl md:text-3xl font-bold tracking-widest">
                  {logo}
                </span>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
