import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { FounderOscar } from "@/sections/equipo/FounderOscar";
import { FounderCesar } from "@/sections/equipo/FounderCesar";
import { OperationalTeam } from "@/sections/equipo/OperationalTeam";
import { useContent } from "@/context/LocaleContext";
import { teamImages } from "@/assets/site/siteImages";

export function Equipo() {
  const c = useContent().equipo.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image={teamImages.hero}
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
        titleClassName="mx-auto"
        titleFontSize="clamp(2.2rem, 5vw, 5rem)"
      />
      <FounderOscar />
      <FounderCesar />
      <OperationalTeam />
    </div>
  );
}
