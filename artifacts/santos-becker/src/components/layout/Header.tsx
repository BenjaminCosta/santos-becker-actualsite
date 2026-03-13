import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
    { name: "Tecnología", path: "/tecnologia" },
    { name: "Inclusión Laboral", path: "/inclusion-laboral" },
    { name: "Equipo", path: "/equipo" },
    { name: "Contacto", path: "/contacto" },
  ];

  const isHome = location === "/";
  const isTransparent = !isScrolled && isHome;

  const headerBg = isTransparent
    ? "bg-transparent"
    : "bg-white border-b border-border/60";
  const textColor = isTransparent ? "text-white" : "text-foreground";
  const mutedColor = isTransparent ? "text-white/60" : "text-muted-foreground";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${headerBg}`}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 h-[80px] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="group flex flex-col items-start z-50 shrink-0">
          <span className={`font-heading text-[1.6rem] font-bold tracking-[0.08em] leading-none transition-colors duration-300 ${textColor} group-hover:text-primary`}>
            SANTOS & BECKER
          </span>
          <span className={`font-sans text-[9px] uppercase tracking-[0.35em] mt-[5px] transition-colors duration-300 ${mutedColor}`}>
            Strategic Immigration
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-heading uppercase tracking-[0.12em] text-[11px] font-medium transition-colors duration-200 hover:text-primary relative group ${textColor}`}
            >
              {link.name}
              <span className="absolute -bottom-[2px] left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right side: CTA + Language selector */}
        <div className="hidden xl:flex items-center gap-6 shrink-0">
          {/* Language selector — decorative */}
          <div className={`flex items-center gap-0 font-heading text-[10px] tracking-[0.15em] ${mutedColor}`}>
            <span className="cursor-default hover:text-primary transition-colors px-2 py-1">ESP</span>
            <span className={`${isTransparent ? 'text-white/20' : 'text-border'}`}>|</span>
            <span className="cursor-default hover:text-primary transition-colors px-2 py-1 opacity-50">ENG</span>
            <span className={`${isTransparent ? 'text-white/20' : 'text-border'}`}>|</span>
            <span className="cursor-default hover:text-primary transition-colors px-2 py-1 opacity-50">CHN</span>
          </div>

          {/* Divider */}
          <div className={`h-5 w-[1px] ${isTransparent ? 'bg-white/20' : 'bg-border'}`}></div>

          {/* CTA */}
          <Link
            href="/contacto"
            className="px-6 py-[10px] bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors"
          >
            Consulta Inicial
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`xl:hidden z-50 p-2 transition-colors ${mobileMenuOpen ? "text-foreground" : textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out xl:hidden flex flex-col ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center gap-8 px-8">
          <Link href="/" className="font-heading text-2xl uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors">
            Inicio
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="font-heading text-2xl uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3 font-heading text-sm tracking-[0.15em] text-muted-foreground">
            <span>ESP</span>
            <span className="text-border">|</span>
            <span className="opacity-50">ENG</span>
            <span className="text-border">|</span>
            <span className="opacity-50">CHN</span>
          </div>
          <Link
            href="/contacto"
            className="mt-4 px-10 py-4 bg-primary text-white font-heading uppercase tracking-[0.15em] text-sm hover:bg-primary/90 transition-colors"
          >
            Consulta Inicial
          </Link>
        </div>
      </div>
    </header>
  );
}
