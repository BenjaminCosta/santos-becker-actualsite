import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { resolvePartnerLogo } from "@/assets/site/siteImages";

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
  const renderLogo = (name: string, index: number) => {
    const logo = resolvePartnerLogo(name);
    const logoClass =
      logo && "variant" in logo && logo.variant === "dark-mark"
        ? "brightness-0 opacity-55 hover:opacity-80"
        : "opacity-80 hover:opacity-100";

    return (
      <div
        key={`${name}-${index}`}
        className="flex h-16 min-w-[120px] items-center justify-center px-2"
      >
        {logo ? (
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className={`max-h-12 max-w-[170px] object-contain transition duration-300 ${logoClass}`}
          />
        ) : (
          <span className="font-heading text-xl md:text-2xl font-bold tracking-widest text-foreground/35">
            {name}
          </span>
        )}
      </div>
    );
  };

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
              <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8 md:gap-x-20">
                {alianzas.map(renderLogo)}
              </div>
              <div className="w-16 h-px bg-border mx-auto" />
              <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8 md:gap-x-20">
                {afiliaciones.map(renderLogo)}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8 md:gap-x-20">
              {allLogos.map(renderLogo)}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
