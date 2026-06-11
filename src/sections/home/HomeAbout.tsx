import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { peopleInTransit } from "@/assets/photos";
import {
  Clock,
  Briefcase,
  Users,
  Star,
  MapPin,
  Globe,
  type LucideIcon,
} from "lucide-react";

const STAT_ICONS: LucideIcon[] = [Clock, Briefcase, Users, Star, MapPin, Globe];

function AnimatedStat({
  value,
  prefix = "",
  suffix = "",
  label,
  icon: Icon,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(value * eased);
      setCount(nextValue);

      if (progress < 1) {
        raf = requestAnimationFrame(update);
      }
    };

    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="group relative border border-border/50 bg-white px-5 py-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 bg-primary/8 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
        </div>
        <div className="h-px flex-1 mx-3 bg-border/40" />
      </div>

      <div>
        <p className="font-heading text-2xl md:text-3xl text-foreground font-bold leading-none tracking-tight mb-1.5">
          {prefix}
          {new Intl.NumberFormat("es-MX").format(count)}
          {suffix}
        </p>
        <p className="font-sans text-[13px] text-muted-foreground leading-snug">
          {label}
        </p>
      </div>
    </div>
  );
}

export function HomeAbout() {
  const c = useContent().home.about;

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <img
            src={peopleInTransit}
            alt="Santos & Becker"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 px-8 md:px-16 py-24 flex flex-col justify-center bg-white">
          <FadeIn direction="left">
            <SectionHeading
              eyebrow={c.eyebrow}
              title={c.title}
              description={
                <div className="space-y-5">
                  {c.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              }
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mb-10">
              {c.stats.map((stat, i) => (
                <AnimatedStat
                  key={i}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  icon={STAT_ICONS[i] ?? Globe}
                />
              ))}
            </div>

            <Link href="/nosotros" className="group section-cta-inline section-cta-inline-dark">
              {c.cta}
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
