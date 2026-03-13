import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { InclusionPosition } from "@/sections/inclusion/InclusionPosition";
import { InclusionAlliances } from "@/sections/inclusion/InclusionAlliances";
import { InclusionMethodology } from "@/sections/inclusion/InclusionMethodology";
import { InclusionCta } from "@/sections/inclusion/InclusionCta";

export function Inclusion() {
  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80"
        eyebrow="INCLUSIÓN LABORAL"
        titleLine1="INCLUSIÓN LABORAL"
        titleLine2="CON IMPACTO REAL"
        subtitle="Lideramos iniciativas de inclusión laboral de migrantes en México, respaldados por alianzas con los organismos internacionales más relevantes del sector."
      />
      <InclusionPosition />
      <InclusionAlliances />
      <InclusionMethodology />
      <InclusionCta />
    </div>
  );
}
