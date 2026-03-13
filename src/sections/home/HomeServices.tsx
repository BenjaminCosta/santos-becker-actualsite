import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

const SERVICES = [
  { title: "Estrategia Migratoria Corporativa", sub: "Visas · Compliance · Movilidad de Talento", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" },
  { title: "Servicios para Profesionales y Familias", sub: "Residencias · Reagrupamiento · Naturalización", img: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80" },
  { title: "Servicios Complementarios", sub: "Fiscal · Laboral · Consultoría Bespoke", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
];

export function HomeServices() {
  return (
    <section className="bg-gray-50 py-32 px-6 border-y border-border">
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="typo-eyebrow text-primary mb-4">Servicios</p>
              <h2 className="font-heading text-5xl md:text-6xl text-foreground font-bold">Soluciones migratorias integrales</h2>
            </div>
            <Link href="/servicios" className="hidden md:inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-primary hover:text-foreground transition-colors group shrink-0">
              Ver todos los servicios
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <Link key={i} href="/servicios" className="group block relative h-[480px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url("${svc.img}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-heading text-2xl text-white font-bold leading-snug mb-2">{svc.title}</h3>
                  <p className="typo-eyebrow text-white/50 mb-3">{svc.sub}</p>
                  <div className="w-10 h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"></div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link href="/servicios" className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-[11px] text-primary group">
              Ver todos los servicios
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
