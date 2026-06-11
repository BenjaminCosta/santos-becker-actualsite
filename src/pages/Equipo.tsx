import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { FounderOscar } from "@/sections/equipo/FounderOscar";
import { FounderCesar } from "@/sections/equipo/FounderCesar";
import { OperationalTeam } from "@/sections/equipo/OperationalTeam";
import { useContent } from "@/context/LocaleContext";
import { peopleInTransit } from "@/assets/photos";

export function Equipo() {
  const c = useContent().equipo.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image={peopleInTransit}
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
      />
      <FounderOscar />
      <FounderCesar />
      <OperationalTeam />
    </div>
  );
}
