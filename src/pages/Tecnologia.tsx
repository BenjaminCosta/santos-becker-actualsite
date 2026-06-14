import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { TecnologiaSam } from "@/sections/tecnologia/TecnologiaSam";
import { useContent } from "@/context/LocaleContext";
import { tecnologiaImages } from "@/assets/site/siteImages";

export function Tecnologia() {
  const c = useContent().tecnologia.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image={tecnologiaImages.hero}
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
      />
      <TecnologiaSam />
    </div>
  );
}
