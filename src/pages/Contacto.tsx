import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { ContactForm } from "@/sections/contacto/ContactForm";
import { ContactAlternativeCta } from "@/sections/contacto/ContactAlternativeCta";
import { useContent } from "@/context/LocaleContext";
import { contactoImages } from "@/assets/site/siteImages";

export function Contacto() {
  const c = useContent().contacto.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image={contactoImages.hero}
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
      />
      <ContactForm />
      <ContactAlternativeCta />
    </div>
  );
}
