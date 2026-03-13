import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { TecnologiaPlatforma } from "@/sections/tecnologia/TecnologiaPlatforma";
import { TecnologiaSam } from "@/sections/tecnologia/TecnologiaSam";

export function Tecnologia() {
  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
        eyebrow="TECNOLOGÍA"
        titleLine1="CONTROL Y CLARIDAD"
        titleLine2="EN CADA PROCESO"
        subtitle="Innovación diseñada para darte control y claridad sobre tu proceso migratorio."
      />
      <TecnologiaPlatforma />
      <TecnologiaSam />
    </div>
  );
}
