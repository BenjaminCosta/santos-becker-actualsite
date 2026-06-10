import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { NosotrosAbout } from "@/sections/nosotros/NosotrosAbout";
import { NosotrosEnfoque } from "@/sections/nosotros/NosotrosEnfoque";
import { NosotrosInstitucional } from "@/sections/nosotros/NosotrosInstitucional";
import { NosotrosDiferenciadores } from "@/sections/nosotros/NosotrosDiferenciadores";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { useContent } from "@/context/LocaleContext";

export function Nosotros() {
  const c = useContent().nosotros;

  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
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
