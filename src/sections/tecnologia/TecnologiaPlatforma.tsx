import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TecnologiaPlatforma() {
  const c = useContent().tecnologia.plataforma;

  return (
    <section className="bg-white">
      {/* Intro */}
      <div className="py-28 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <FadeIn>
          <div className="w-12 h-[3px] bg-accent mb-10 mx-auto"></div>
          <SectionHeading
            eyebrow={c.eyebrow}
            title={c.title}
            description={c.intro}
            align="center"
            className="max-w-3xl"
          />
        </FadeIn>
      </div>

      {/* Features Grid */}
      <div className="pb-24 px-6 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.features.map((f, i) => (
              <div key={i} className="bg-gray-50 p-10 border-t-2 border-accent">
                <span className="font-heading text-[3.5rem] font-bold mb-4 block leading-none" style={{ color: '#EBD723', opacity: 0.22 }}>{f.n}</span>
                <h3 className="font-heading text-2xl font-bold mb-4">{f.title}</h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Split — Platform Detail */}
      <div className="w-full" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
            <FadeIn direction="right">
              <SectionHeading
                eyebrow={c.capabilitiesEyebrow}
                title={c.capabilitiesTitle}
                titleAs="h3"
                titleClassName="text-3xl md:text-4xl"
                className="mb-8"
              />
              <ul className="space-y-5 mb-12">
                {c.capabilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-lg text-foreground">
                    <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="section-cta-inline section-cta-inline-dark">
                {c.cta}
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
              alt="Plataforma Santos & Becker"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-32 px-6 bg-dark-accent text-white" style={{ borderTop: '2px solid #EBD723' }}>
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionHeading
              eyebrow={c.workflowEyebrow}
              title={c.workflowTitle}
              variant="dark"
              align="center"
              titleAs="h3"
              className="mb-20"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {c.workflow.map((p, i) => (
                <div key={i} className="relative pt-10">
                  <div className="absolute top-0 left-0 font-heading text-6xl font-bold leading-none" style={{ color: '#EBD723', opacity: 0.12 }}>{p.step}</div>
                  <div className="w-8 h-[2px] bg-accent mb-6"></div>
                  <h4 className="font-heading text-2xl font-bold mb-4 text-white">{p.title}</h4>
                  <p className="font-sans text-lg text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
