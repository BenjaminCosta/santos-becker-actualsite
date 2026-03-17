import { SectionHeading } from "@/components/shared/SectionHeading";
import { useContent } from "@/context/LocaleContext";

export function ContactMap() {
  const c = useContent().contacto.contactInfo.map;

  return (
    <section className="h-[380px] w-full relative overflow-hidden border-t border-border">
      <div
        className="w-full h-full bg-cover bg-center grayscale opacity-75"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1920&q=80")' }}
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute left-6 top-6 z-10 max-w-md md:left-10 md:top-10">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          variant="dark"
          className="max-w-sm"
          titleClassName="text-3xl md:text-4xl"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="bg-white px-8 py-4 flex items-center gap-3">
          <div className="w-3 h-3 bg-primary shrink-0"></div>
          <span className="font-heading uppercase tracking-[0.15em] text-sm font-bold">{c.label}</span>
        </div>
      </div>
    </section>
  );
}
