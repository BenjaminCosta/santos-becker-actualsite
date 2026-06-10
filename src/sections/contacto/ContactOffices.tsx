import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

const OFFICE_IMAGES = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    badge: null,
    colClass: "md:col-span-7",
    aspect: "aspect-video",
    textClass: "md:pl-12",
    offset: "",
  },
  {
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    badge: null,
    colClass: "md:col-span-4 md:col-start-9",
    aspect: "aspect-[4/5]",
    textClass: "",
    offset: "md:mt-48",
  },
  {
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    badge: null,
    colClass: "md:col-span-5",
    aspect: "aspect-[3/2]",
    textClass: "md:pr-12",
    offset: "md:mt-12",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    badge: null,
    colClass: "md:col-span-6 md:col-start-7",
    aspect: "aspect-video",
    textClass: "md:pl-24",
    offset: "-mt-16 md:-mt-32",
  },
];

export function ContactOffices() {
  const c = useContent().contacto.contactInfo;

  return (
    <section className="bg-gray-50 py-32 overflow-hidden">
      <div className="max-w-360 mx-auto px-8">

        {/* Section header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
            <h2 className="typo-title text-5xl md:text-7xl text-primary leading-none">
              {c.map.title}
            </h2>
            <p className="max-w-md font-sans text-lg text-muted-foreground leading-relaxed">
              {c.officesNote}
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric offices grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-y-32 gap-x-8">
          {c.offices.map((office, i) => {
            const visual = OFFICE_IMAGES[i] ?? OFFICE_IMAGES[0];

            return (
            <FadeIn key={office.city} delay={i * 0.07} className={[visual.colClass, visual.offset].join(" ")}>
              <div className="group">
                <div className={`relative ${visual.aspect} mb-10 overflow-hidden`}>
                  <img
                    src={visual.image}
                    alt={office.city}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {visual.badge && (
                    <div className="absolute bottom-0 left-0 bg-primary text-white font-heading text-[10px] uppercase tracking-[0.15em] px-6 py-2">
                      {visual.badge}
                    </div>
                  )}
                </div>
                <div className={visual.textClass}>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {office.city}
                  </h3>
                  <p className="font-sans italic text-lg text-muted-foreground max-w-sm whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
          })}
        </div>

      </div>
    </section>
  );
}
