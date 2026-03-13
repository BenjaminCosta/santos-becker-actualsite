import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { FounderOscar } from "@/sections/equipo/FounderOscar";
import { FounderCesar } from "@/sections/equipo/FounderCesar";
import { OperationalTeam } from "@/sections/equipo/OperationalTeam";

export function Equipo() {
  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        eyebrow="EQUIPO"
        titleLine1="EL TALENTO DETRÁS"
        titleLine2="DE CADA SOLUCIÓN"
        subtitle="El talento detrás de cada solución migratoria."
      />
      <FounderOscar />
      <FounderCesar />
      <OperationalTeam />
    </div>
  );
}
