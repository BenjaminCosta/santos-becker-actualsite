import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

export function HomeCta() {
  const c = useContent().home.cta;

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    alert(c.successMessage);
  }

  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      {/* Gradient top border: teal → yellow → teal */}
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{ background: 'linear-gradient(to right, hsl(162 100% 35%), #EBD723, hsl(162 100% 35%))' }}
      />

      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact info */}
          <FadeIn>
            <div>
              <span className="typo-eyebrow text-primary mb-6 block">{c.eyebrow}</span>
              <h2 className="typo-title text-4xl md:text-5xl text-foreground mb-8">
                {c.titleLines[0]}
                <span className="text-primary block">{c.titleLines[1]}</span>
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10">
                {c.subtitle}
              </p>

              {/* Contact details */}
              <div className="space-y-6 mb-10">
                <div className="border-l-2 border-[#EBD723] pl-6">
                  <span className="typo-eyebrow text-muted-foreground block mb-1">{c.emailLabel}</span>
                  <a href={`mailto:${c.email}`} className="font-sans text-lg text-foreground hover:text-primary transition-colors">
                    {c.email}
                  </a>
                </div>
                <div className="border-l-2 border-[#EBD723] pl-6">
                  <span className="typo-eyebrow text-muted-foreground block mb-1">{c.phoneLabel}</span>
                  <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="font-sans text-lg text-foreground hover:text-primary transition-colors">
                    {c.phone}
                  </a>
                </div>
                <div className="border-l-2 border-[#EBD723] pl-6">
                  <span className="typo-eyebrow text-muted-foreground block mb-1">{c.hoursLabel}</span>
                  <span className="font-sans text-lg text-foreground">{c.hours}</span>
                </div>
              </div>

              {/* Offices */}
              <div className="grid grid-cols-2 gap-6">
                {c.offices.map((office, i) => (
                  <div key={i}>
                    <span className="font-heading text-sm uppercase tracking-widest text-foreground block mb-2">
                      {office.city}
                    </span>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn delay={0.15}>
            <div className="bg-muted p-8 lg:p-10 border-t-2 border-[#EBD723]">
              <h3 className="font-heading text-xl uppercase tracking-[0.05em] text-foreground mb-8">
                {c.formTitle}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">
                      {c.fields.nombre.label}
                    </label>
                    <input
                      type="text"
                      className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-base"
                      placeholder={c.fields.nombre.placeholder}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">
                      {c.fields.empresa.label}
                    </label>
                    <input
                      type="text"
                      className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-base"
                      placeholder={c.fields.empresa.placeholder}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">
                    {c.fields.correo.label}
                  </label>
                  <input
                    type="email"
                    className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-base"
                    placeholder={c.fields.correo.placeholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-heading uppercase tracking-[0.15em] text-[9px] text-muted-foreground">
                    {c.fields.mensaje.label}
                  </label>
                  <textarea
                    rows={4}
                    className="border-b border-border bg-transparent py-3 focus:outline-none focus:border-primary transition-colors font-sans text-base resize-none"
                    placeholder={c.fields.mensaje.placeholder}
                  />
                </div>
                <button
                  type="submit"
                  className="section-cta-rect section-cta-rect-primary w-full"
                >
                  {c.submitBtn}
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
