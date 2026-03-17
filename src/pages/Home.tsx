import { HomeHero } from "@/sections/home/HomeHero";
import { HomeAbout } from "@/sections/home/HomeAbout";
import { HomePurpose } from "@/sections/home/HomePurpose";
import { HomeDifferentiators } from "@/sections/home/HomeDifferentiators";
import { HomeServices } from "@/sections/home/HomeServices";
import { HomeTechnology } from "@/sections/home/HomeTechnology";
import { HomeBespoke } from "@/sections/home/HomeBespoke";
import { HomeCta } from "@/sections/home/HomeCta";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { useContent } from "@/context/LocaleContext";

export function Home() {
  const a = useContent().home.alliances;

  return (
    <div className="bg-background">
      <HomeHero />
      <HomeAbout />
      <HomePurpose />
      <HomeDifferentiators />
      <HomeServices />
      <HomeTechnology />
      <PartnerLogos
        eyebrow={a.eyebrow}
        title={a.title}
        subtitle={a.subtitle}
        alianzas={[...a.alianzas]}
        afiliaciones={[...a.afiliaciones]}
      />
      <HomeBespoke />
      <HomeCta />
    </div>
  );
}
