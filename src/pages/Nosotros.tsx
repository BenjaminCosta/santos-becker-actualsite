import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { NosotrosAbout } from "@/sections/nosotros/NosotrosAbout";
import { NosotrosEnfoque } from "@/sections/nosotros/NosotrosEnfoque";
import { NosotrosDiferenciadores } from "@/sections/nosotros/NosotrosDiferenciadores";
import { PartnerLogos } from "@/components/shared/PartnerLogos";

export function Nosotros() {
  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
        eyebrow="NOSOTROS"
        titleLine1="TRES DÉCADAS"
        titleLine2="DE CONFIANZA"
        subtitle="Una firma construida sobre tres décadas de práctica, relaciones de confianza y un compromiso que se demuestra con cada cliente."
      />
      <NosotrosAbout />
      <NosotrosEnfoque />
      <NosotrosDiferenciadores />
      <PartnerLogos
        eyebrow="Alianzas Globales"
        title="Colaboraciones Estratégicas"
        subtitle="Colaboramos con firmas líderes en derecho, auditoría y consultoría estratégica a nivel global, garantizando cobertura en las principales jurisdicciones del mundo."
      />
    </div>
  );
}
