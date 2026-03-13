import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
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
  const headerBg = isScrolled || !isHome ? "bg-white border-b border-border" : "bg-transparent";
  const textColor = isScrolled || !isHome ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="group flex flex-col items-start z-50">
          <span className={`font-heading text-3xl font-bold tracking-wider leading-none transition-colors ${textColor} group-hover:text-primary`}>
            SANTOS & BECKER
          </span>
          <span className={`font-sans text-[10px] uppercase tracking-[0.3em] mt-1 transition-colors ${isScrolled || !isHome ? "text-muted-foreground" : "text-white/80"}`}>
            Strategic Immigration
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-heading uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-4 px-6 py-3 bg-primary text-white font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
          >
            Consulta Inicial
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden z-50 p-2 ${mobileMenuOpen ? "text-foreground" : textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          <Link
            href="/"
            className="font-heading text-2xl uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="font-heading text-2xl uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-8 px-8 py-4 bg-primary text-white font-heading text-xl uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Consulta Inicial
          </Link>
        </nav>
      </div>
    </header>
  );
}
