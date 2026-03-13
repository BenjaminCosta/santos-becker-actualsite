import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

export function HomeBespoke() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/68"></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.06) 0%, transparent 60%)' }}></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="typo-eyebrow mb-6" style={{ color: '#EBD723' }}>Servicio Bespoke</p>
          <h2 className="font-heading text-5xl md:text-7xl text-white font-bold mb-8 leading-[0.9]">
            Atención exclusiva para perfiles de alto impacto
          </h2>
          <p className="font-sans text-xl md:text-2xl text-white/75 mb-14 italic leading-relaxed max-w-2xl mx-auto">
            Para ejecutivos, inversores y talentos excepcionales que requieren un servicio absolutamente personalizado. Sin plantillas. Sin compromisos.
          </p>
          <Link href="/contacto" className="inline-block px-12 py-5 bg-primary text-white font-heading uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-colors">
            Solicitar Consulta Bespoke
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
