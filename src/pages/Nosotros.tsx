import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { NosotrosAbout } from "@/sections/nosotros/NosotrosAbout";
import { NosotrosEnfoque } from "@/sections/nosotros/NosotrosEnfoque";
import { NosotrosInstitucional } from "@/sections/nosotros/NosotrosInstitucional";
import { NosotrosDiferenciadores } from "@/sections/nosotros/NosotrosDiferenciadores";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { useContent } from "@/context/LocaleContext";
import { nosotrosImages } from "@/assets/site/siteImages";

export function Nosotros() {
  const c = useContent().nosotros;

  return (
    <div className="bg-background">
      <InternalPageHero
        image={nosotrosImages.hero}
        eyebrow={c.hero.eyebrow}
        titleLine1={c.hero.titleLine1}
        titleLine2={c.hero.titleLine2}
        subtitle={c.hero.subtitle}
      />
      <NosotrosAbout />
      <NosotrosEnfoque />
      <NosotrosInstitucional />
      <NosotrosDiferenciadores />
      <PartnerLogos
        eyebrow={c.alliances.eyebrow}
        title={c.alliances.title}
        subtitle={c.alliances.subtitle}
        alianzas={[...c.alliances.alianzas]}
        afiliaciones={[...c.alliances.afiliaciones]}
      />
    </div>
  );
}
