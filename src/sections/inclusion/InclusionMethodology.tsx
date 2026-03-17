import { Search, Target, FileText, Activity } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";

const STEP_ICONS = [Search, Target, FileText, Activity];

export function InclusionMethodology() {
  const c = useContent().inclusion.methodology;

  return (
    <section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* Left: sticky title column */}
        <div className="lg:col-span-4 px-6 lg:px-12 xl:px-16 py-20 lg:py-28 flex flex-col justify-start">
          <FadeIn direction="right">
            <p className="typo-eyebrow text-primary mb-6">{c.eyebrow}</p>
            <h2 className="typo-title text-4xl md:text-5xl lg:text-5xl text-foreground mb-6">
              {c.title}
            </h2>
            <div className="w-12 h-0.5 bg-accent" />
          </FadeIn>
        </div>

        {/* Right: cards grid */}
        <div className="lg:col-span-8 bg-gray-50">
          <FadeIn direction="left" delay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {c.steps.map((step, i) => {
                const Icon = STEP_ICONS[i];
                const isPrimary = i === 1 || i === 3;

                return (
                  <div
                    key={i}
                    className={[
                      "p-10 md:p-12 flex flex-col gap-6",
                      i % 2 === 0 ? "border-r border-gray-200/60" : "",
                      i < 2 ? "border-b border-gray-200/60" : "",
                    ].join(" ")}
                  >
                    <div>
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className={"text-primary"}
                      />
                    </div>
                    <div>
                      <p
                        className={`font-heading text-[9px] uppercase tracking-[0.2em] mb-3 ${
"text-muted-foreground"
                        }`}
                      >
                        {step.n}
                      </p>
                      <h3
                        className={`font-heading text-lg font-bold uppercase tracking-[0.05em] mb-4 ${"text-foreground"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`font-sans text-base leading-relaxed ${
                     "text-muted-foreground"
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
