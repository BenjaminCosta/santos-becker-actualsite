import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HomeTechnology() {
  const c = useContent().home.technology;

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col-reverse lg:flex-row min-h-[80vh]">
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center">
          <FadeIn direction="right">
            <SectionHeading
              eyebrow={c.eyebrow}
              title={c.title}
              description={c.intro}
              className="mb-10"
            />
            <ul className="space-y-5 mb-12">
              {c.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-sans text-lg text-foreground">
                  <span className="w-[6px] h-[6px] shrink-0 bg-accent"></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/tecnologia" className="section-cta-rect section-cta-rect-dark">
              {c.cta}
            </Link>
          </FadeIn>
        </div>
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=960&q=80"
            alt="Tecnología Santos & Becker"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
