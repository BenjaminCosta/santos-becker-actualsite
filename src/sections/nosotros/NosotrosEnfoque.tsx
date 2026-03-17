import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function NosotrosEnfoque() {
  const c = useContent().nosotros.enfoque;

  return (
    <section className="w-full bg-dark-accent text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Image half */}
        <div className="lg:w-1/2 relative min-h-[55vh] lg:min-h-full">
          <FadeIn direction="right" className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Enfoque Santos & Becker"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark-accent/45" />
            {/* Accent top line */}
            <div className="absolute top-0 left-0 right-0 h-0.75 bg-accent" />
            {/* Year badge */}
            <div className="absolute bottom-10 left-10 border border-white/20 px-6 py-4 backdrop-blur-sm">
              <p className="font-heading text-3xl font-bold text-white leading-none">2026</p>
              <p className="font-heading text-[9px] uppercase tracking-[0.22em] text-white/40 mt-1">
                Founded in México
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Content half */}
        <div className="lg:w-1/2 px-8 md:px-16 xl:px-20 py-28 flex flex-col justify-center">
          <FadeIn direction="left">
            <p className="typo-eyebrow text-accent mb-6">{c.eyebrow}</p>
            <h2 className="typo-title text-5xl md:text-6xl text-white mb-16">{c.title}</h2>

            <div className="space-y-0 border-t border-white/10">
              {c.steps.map((item, i) => (
                <div key={i} className="py-9 border-b border-white/10 group">
                  <div className="flex items-start gap-6">
                    <span
                      className="font-heading text-4xl font-bold shrink-0 w-14 leading-none"
                      style={{ color: "#EBD723", opacity: 0.35 }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-sans text-base text-white/55 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
