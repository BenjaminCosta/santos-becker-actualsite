import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logos/S_S&B Logo2_Color.png";
import { useLocale, useContent } from "@/context/LocaleContext";
import type { Locale } from "@/content/index";
import {
  AnimatedDropdown,
  type AnimatedDropdownItem,
} from "@/components/ui/animated-dropdown";

const LOCALES: AnimatedDropdownItem<Locale>[] = [
  { value: "es", label: "ESP", description: "Espanol" },
  { value: "en", label: "ENG", description: "English" },
  { value: "zh", label: "CHN", description: "Chinese" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { locale, setLocale } = useLocale();
  const c = useContent().global.nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: c.nosotros, path: "/nosotros" },
    { name: c.servicios, path: "/servicios" },
    { name: c.tecnologia, path: "/tecnologia" },
    { name: c.inclusion, path: "/inclusion-laboral" },
    { name: c.equipo, path: "/equipo" },
    { name: c.contacto, path: "/contacto" },
  ];

  const headerSurfaceClass = scrolled
    ? "header-surface-solid border-b border-[#E2E2DF]"
    : "header-surface-transparent border-b border-transparent";
  const textColorClass = scrolled ? "text-[#303336]" : "text-white";
  const mutedTextColorClass = scrolled ? "text-[#303336]/72" : "text-white/78";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[84px] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${headerSurfaceClass}`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-6 px-5 md:px-8 xl:px-10">
          <Link href="/" className="group relative flex shrink-0 items-center">
            <img
              src={logo}
              alt="Santos & Becker"
              className="h-[4.7rem] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03] md:h-[5.15rem]"
            />
          </Link>

          <nav className="hidden xl:flex flex-1 items-center justify-center gap-8">
            {navLinks.map((link) => {
              const active = location === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`group relative font-heading text-[0.78rem] uppercase tracking-[0.1em] transition-colors duration-200 ${
                    active ? "text-primary" : textColorClass
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1.5 -left-1 h-[2px] bg-primary transition-all duration-200 ${
                      active ? "-right-1" : "right-[calc(100%+0.25rem)] group-hover:-right-1"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex shrink-0 items-center gap-3">
            <AnimatedDropdown
              items={LOCALES}
              value={locale}
              onSelect={setLocale}
              label={c.languageLabel}
              variant={scrolled ? "solid" : "transparent"}
            />
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-primary px-6 py-[0.62rem] font-heading text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary/90"
            >
              {c.cta}
            </Link>
          </div>

          <button
            type="button"
            className={`inline-flex items-center justify-center p-2 transition-colors duration-200 xl:hidden ${textColorClass}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={c.menuLabel}
          >
            {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out xl:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "84px" }}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-4 py-10 md:px-6">
          <Link
            href="/"
            className={`font-heading text-3xl font-bold uppercase tracking-wider py-4 border-b border-[#E2E2DF] transition-colors duration-200 ${
              location === "/" ? "text-primary" : "text-[#303336]"
            }`}
          >
            {c.inicio}
          </Link>
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-heading text-3xl font-bold uppercase tracking-wider py-4 border-b border-[#E2E2DF] transition-colors duration-200 ${
                location === link.path ? "text-primary" : "text-[#303336]"
              }`}
              style={{
                transitionDelay: menuOpen ? `${index * 40}ms` : "0ms",
              }}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4 border-b border-[#E2E2DF] pb-5">
              <span className="typo-eyebrow text-muted-foreground">{c.languageLabel}</span>
              <AnimatedDropdown
                items={LOCALES}
                value={locale}
                onSelect={setLocale}
                variant="solid"
                align="end"
              />
            </div>

            <Link
              href="/contacto"
              className="inline-flex w-full items-center justify-center bg-primary px-6 py-4 font-heading text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary/90"
            >
              {c.cta}
            </Link>
            <p className={`font-sans text-sm ${mutedTextColorClass}`}>
              Santos &amp; Becker
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
