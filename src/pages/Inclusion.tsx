import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { InclusionPosition } from "@/sections/inclusion/InclusionPosition";
import { InclusionAlliances } from "@/sections/inclusion/InclusionAlliances";
import { InclusionMethodology } from "@/sections/inclusion/InclusionMethodology";
import { InclusionCta } from "@/sections/inclusion/InclusionCta";
import { useContent } from "@/context/LocaleContext";

export function Inclusion() {
  const c = useContent().inclusion.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80"
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
      />
      <InclusionPosition />
      <InclusionAlliances />
      <InclusionMethodology />
      <InclusionCta />
    </div>
  );
}
