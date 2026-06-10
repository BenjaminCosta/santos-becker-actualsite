import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { TecnologiaSam } from "@/sections/tecnologia/TecnologiaSam";
import { useContent } from "@/context/LocaleContext";

export function Tecnologia() {
  const c = useContent().tecnologia.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
      />
      <TecnologiaSam />
    </div>
  );
}
