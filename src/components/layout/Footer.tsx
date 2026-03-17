import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { useContent } from "@/context/LocaleContext";

/* ── Animated entrance container (blur + float in) ── */
function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: {
  className?: ComponentProps<typeof motion.div>["className"];
  delay?: number;
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ filter: "blur(4px)", y: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const OFFICES = [
  {
    city: "CDMX",
    address: "Paseo de la Reforma 222\nColonia Juárez, 06600",
    phone: "+52 55 6617 7712",
    email: "cdmx@santosbecker.com",
  },
  {
    city: "Monterrey",
    address: "Av. David Alfaro Siqueiros 104\nSan Pedro Garza García, 66269",
    phone: "+52 81 8765 4321",
    email: "mty@santosbecker.com",
  },
  {
    city: "Guadalajara",
    address: "Av. Américas 1500\nCountry Club, 44610",
    phone: "+52 33 2468 1357",
    email: "gdl@santosbecker.com",
  },
  {
    city: "Cancún",
    address: "Blvd. Kukulcan Km 12.5\nZona Hotelera, 77500",
    phone: "+52 998 112 2334",
    email: "cun@santosbecker.com",
  },
];

export function Footer() {
  const { footer, nav } = useContent().global;

  return (
    <footer className="bg-dark-accent text-white relative pt-32 pb-12 overflow-hidden ">

      {/* Monumental S&B watermark */}
      <div className="absolute top-0 right-0 -mr-16 -mt-6 opacity-[0.03] select-none pointer-events-none">
        <span
          className="font-heading font-bold tracking-tighter text-white leading-none block"
          style={{ fontSize: "20rem" }}
        >
          S&amp;B
        </span>
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-12 relative z-10">

        {/* ── Brand + newsletter ── */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <AnimatedContainer className="max-w-2xl">
            <span className="block font-heading text-4xl tracking-wider text-white mb-6">
              Santos &amp; Becker
            </span>
            <p className="font-sans text-xl text-white/55 max-w-[560px] leading-relaxed">
              {footer.description}
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2} className="w-full md:w-96 shrink-0">
            <label className="block font-heading text-[9px] uppercase tracking-[0.28em] text-white/40 mb-4">
              {footer.newsletter.label}
            </label>
            <div className="flex border-b border-white/20 focus-within:border-primary transition-colors duration-300">
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="w-full bg-transparent py-4 font-sans text-base outline-none placeholder:text-white/25 text-white"
              />
              <button className="shrink-0 px-6 py-4 bg-primary text-white font-heading text-[10px] tracking-[0.2em] uppercase hover:bg-primary/85 transition-colors duration-300">
                {footer.newsletter.cta}
              </button>
            </div>
            <p className="mt-3 font-sans text-xs italic text-white/30">
              {footer.newsletter.disclaimer}
            </p>
          </AnimatedContainer>
        </div>

        {/* ── Office nodes grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-28">
          {OFFICES.map((o, i) => (
            <AnimatedContainer key={o.city} delay={0.1 + i * 0.08}>
              <div className="group border-t border-white/15 pt-8 hover:border-primary transition-colors duration-500">
                <h3 className="font-heading text-[10px] font-bold tracking-[0.22em] uppercase text-white mb-5">
                  {o.city} {footer.officeLabel}
                </h3>
                <address className="not-italic font-sans text-sm text-white/45 leading-loose group-hover:text-white/75 transition-colors duration-500">
                  {o.address.split("\n").map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                  <span className="block mt-2">{o.phone}</span>
                  <a
                    href={`mailto:${o.email}`}
                    className="block hover:text-primary transition-colors"
                  >
                    {o.email}
                  </a>
                </address>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* ── Editorial block ── */}
        <AnimatedContainer delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-12 mb-20 border-t border-white/10">

            {/* Left: brand statement */}
            <div className="md:col-span-7 py-16   ">
              <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
                {footer.editorial.heading.split("\n").map((line, i) => (
                  <span key={i}>{line}{i < footer.editorial.heading.split("\n").length - 1 && <br />}</span>
                ))}
              </h2>
              <p className="font-sans text-lg text-white/50 max-w-[460px] leading-relaxed">
                {footer.editorial.body}
              </p>
            </div>

            {/* Right: nav links */}
            <div className="md:col-span-5 p-10 md:p-20 grid grid-cols-2 gap-10 content-start">
              <div>
                <h4 className="font-heading text-[9px] uppercase tracking-[0.28em] text-white/30 mb-6">
                  {footer.firma.heading}
                </h4>
                <ul className="space-y-3">
                  {[
                    { href: "/nosotros", label: nav.nosotros },
                    { href: "/tecnologia", label: nav.tecnologia },
                    { href: "/inclusion-laboral", label: nav.inclusion },
                    { href: "/equipo", label: nav.equipo },
                    { href: "/servicios", label: nav.servicios },
                    { href: "/contacto", label: nav.contacto },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="font-sans text-sm text-white/45 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        <span className="transform group-hover:translate-x-1 transition-transform text-white/20 group-hover:text-primary">→</span>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-[9px] uppercase tracking-[0.28em] text-white/30 mb-6">
                  {footer.servicios.heading}
                </h4>
                <ul className="space-y-3">
                  {footer.servicios.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href="/servicios"
                        className="font-sans text-sm text-white/45 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        <span className="transform group-hover:translate-x-1 transition-transform text-white/20 group-hover:text-primary">→</span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </AnimatedContainer>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-t border-white/10 gap-6">
          <div className="flex flex-wrap gap-8">
            <a
              href="#"
              className="font-heading text-[9px] tracking-[0.22em] uppercase text-white hover:text-primary transition-colors duration-300 border-b-2 border-accent/50 pb-0.5"
            >
              {footer.privacy}
            </a>
            <a
              href="#"
              className="font-heading text-[9px] tracking-[0.22em] uppercase text-white/40 hover:text-primary transition-colors duration-300"
            >
              {footer.terms}
            </a>
            <a
              href="#"
              className="font-heading text-[9px] tracking-[0.22em] uppercase text-white/40 hover:text-primary transition-colors duration-300"
            >
              {footer.regulatory}
            </a>
          </div>
          <p className="font-sans text-xs text-white/30 md:text-right">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
