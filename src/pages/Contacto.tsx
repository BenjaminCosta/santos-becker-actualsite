import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { ContactForm } from "@/sections/contacto/ContactForm";
import { ContactOffices } from "@/sections/contacto/ContactOffices";
import { ContactAlternativeCta } from "@/sections/contacto/ContactAlternativeCta";
import { useContent } from "@/context/LocaleContext";
import { officeMapPins } from "@/assets/photos";

export function Contacto() {
  const c = useContent().contacto.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image={officeMapPins}
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
      />
      <ContactForm />
      <ContactOffices />
      <ContactAlternativeCta />
    </div>
  );
}
