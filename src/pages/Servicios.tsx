import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { ServiciosCorporativos } from "@/sections/servicios/ServiciosCorporativos";
import { ServiciosFamilias } from "@/sections/servicios/ServiciosFamilias";
import { ServiciosComplementarios } from "@/sections/servicios/ServiciosCta";
import { ServiciosClosingCta } from "@/sections/servicios/ServiciosClosingCta";

export function Servicios() {
  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        eyebrow="SERVICIOS"
        titleLine1="SOLUCIONES"
        titleLine2="MIGRATORIAS"
        subtitle="Consultoría migratoria integral para empresas que mueven talento y profesionales que buscan certeza en México."
      />
      <ServiciosCorporativos />
      <ServiciosFamilias />
      <ServiciosComplementarios />
      <ServiciosClosingCta />
    </div>
  );
}
