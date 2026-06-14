import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { InclusionPosition } from "@/sections/inclusion/InclusionPosition";
import { InclusionAlliances } from "@/sections/inclusion/InclusionAlliances";
import { InclusionMethodology } from "@/sections/inclusion/InclusionMethodology";
import { InclusionCta } from "@/sections/inclusion/InclusionCta";
import { useContent } from "@/context/LocaleContext";
import { inclusionImages } from "@/assets/site/siteImages";

export function Inclusion() {
  const c = useContent().inclusion.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image={inclusionImages.hero}
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
