import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { ContactForm } from "@/sections/contacto/ContactForm";
import { ContactOffices } from "@/sections/contacto/ContactOffices";
import { useContent } from "@/context/LocaleContext";

export function Contacto() {
  const c = useContent().contacto.hero;

  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        eyebrow={c.eyebrow}
        titleLine1={c.titleLine1}
        titleLine2={c.titleLine2}
        subtitle={c.subtitle}
      />
      <ContactForm />
      <ContactOffices />
    </div>
  );
}
