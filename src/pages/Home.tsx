import { HomeHero } from "@/sections/home/HomeHero";
import { HomeAbout } from "@/sections/home/HomeAbout";
import { HomePurpose } from "@/sections/home/HomePurpose";
import { HomeDifferentiators } from "@/sections/home/HomeDifferentiators";
import { HomeServices } from "@/sections/home/HomeServices";
import { HomeTechnology } from "@/sections/home/HomeTechnology";
import { HomeBespoke } from "@/sections/home/HomeBespoke";
import { HomeCta } from "@/sections/home/HomeCta";
import { PartnerLogos } from "@/components/shared/PartnerLogos";

export function Home() {
  return (
    <div className="bg-background">
      <HomeHero />
      <HomeAbout />
      <HomePurpose />
      <HomeDifferentiators />
      <HomeServices />
      <HomeTechnology />
      <PartnerLogos
        eyebrow="Alianzas Estratégicas"
        title="Partners Globales"
        subtitle="Trabajamos junto a las firmas líderes en derecho, consultoría y auditoría a nivel mundial."
      />
      <HomeBespoke />
      <HomeCta />
    </div>
  );
}
