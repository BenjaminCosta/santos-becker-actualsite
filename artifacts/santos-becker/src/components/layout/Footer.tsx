import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#303336] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col">
            <span className="font-heading text-3xl font-bold tracking-wider leading-none mb-2">
              SANTOS & BECKER
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-white/60 mb-6">
              Strategic Immigration
            </span>
            <p className="text-white/70 font-sans text-lg pr-4">
              Asesoría premium en inmigración corporativa y cumplimiento normativo para empresas globales y talentos de alto perfil.
            </p>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white/50 mb-6">Firma</h4>
            <ul className="space-y-4 font-sans text-lg text-white/80">
              <li><Link href="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link href="/tecnologia" className="hover:text-primary transition-colors">Tecnología</Link></li>
              <li><Link href="/inclusion-laboral" className="hover:text-primary transition-colors">Inclusión Laboral</Link></li>
              <li><Link href="/equipo" className="hover:text-primary transition-colors">Equipo</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white/50 mb-6">Servicios</h4>
            <ul className="space-y-4 font-sans text-lg text-white/80">
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Visas Corporativas</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Compliance Migratorio</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Movilidad de Talento</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Consultoría Estratégica</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white/50 mb-6">Contacto</h4>
            <ul className="space-y-4 font-sans text-lg text-white/80">
              <li>info@santosbecker.com</li>
              <li>+52 (55) 1234 5678</li>
              <li className="pt-4">
                <Link href="/contacto" className="inline-block px-6 py-3 border border-white/20 hover:bg-white hover:text-[#303336] transition-colors font-heading uppercase tracking-widest text-sm">
                  Contactar
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-sans">
          <p>© {new Date().getFullYear()} Santos & Becker. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
