import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { FounderOscar } from "@/sections/equipo/FounderOscar";
import { FounderCesar } from "@/sections/equipo/FounderCesar";
import { OperationalTeam } from "@/sections/equipo/OperationalTeam";
import { useContent } from "@/context/LocaleContext";

export function Equipo() {
  const c = useContent().equipo.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
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
