import { InternalPageHero } from "@/components/shared/InternalPageHero";
import { ContactForm } from "@/sections/contacto/ContactForm";
import { ContactMap } from "@/sections/contacto/ContactMap";
import { ContactAlternativeCta } from "@/sections/contacto/ContactAlternativeCta";

export function Contacto() {
  return (
    <div className="bg-background">
      <InternalPageHero
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        eyebrow="CONTACTO"
        titleLine1="CONVERSEMOS"
        titleLine2="SOBRE TU CASO"
        subtitle="Nuestro equipo está listo para apoyarte."
      />
      <ContactForm />
      <ContactMap />
      <ContactAlternativeCta />
    </div>
  );
}
