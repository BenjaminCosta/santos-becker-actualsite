import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { ServiciosCorporativos } from "@/sections/servicios/ServiciosCorporativos";
import { ServiciosClosingCta } from "@/sections/servicios/ServiciosClosingCta";
import { useContent } from "@/context/LocaleContext";
import { serviciosImages } from "@/assets/site/siteImages";

export function Servicios() {
  const c = useContent().servicios.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image={serviciosImages.hero}
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
      />
      <ServiciosCorporativos />
      <ServiciosClosingCta />
    </div>
  );
}
