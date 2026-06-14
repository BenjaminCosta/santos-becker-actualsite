import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-sans text-[0.95rem] text-foreground/70 leading-relaxed">{children}</p>;
}

export function AvisoRegulatorio() {
  return (
    <div className="bg-background">

      {/* Header */}
      <div className="bg-dark-accent pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.03) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="typo-eyebrow text-accent mb-5">Legal</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Aviso Regulatorio
          </h1>
          <p className="font-sans text-white/40 text-sm">Santos & Becker, S.C. — Versión vigente 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-12">

        <section className="mb-12">
          <h2 className="font-heading text-base uppercase tracking-[0.12em] text-foreground mb-5 border-l-[3px] border-accent pl-4">
            Naturaleza Informativa del Sitio
          </h2>
          <div className="pl-4 space-y-4">
            <P>
              El contenido publicado en el sitio web www.santosbecker.com tiene carácter exclusivamente
              informativo y de referencia general. Ningún contenido, artículo, descripción de servicio o
              información publicada en este Sitio constituye asesoría jurídica, migratoria, fiscal ni de ninguna
              otra índole.
            </P>
            <P>
              Santos & Becker, S.C. no asume responsabilidad alguna por las decisiones tomadas por el usuario
              con base en la información publicada en el Sitio, sin haber contratado previamente los servicios
              profesionales correspondientes mediante la suscripción del contrato respectivo.
            </P>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-base uppercase tracking-[0.12em] text-foreground mb-5 border-l-[3px] border-accent pl-4">
            Ejercicio Profesional y Marco Normativo
          </h2>
          <div className="pl-4 space-y-4">
            <P>
              Santos & Becker, S.C. es una firma de consultoría y estrategia en materia de movilidad global y
              cumplimiento migratorio, constituida y operando conforme a las leyes vigentes de los Estados Unidos
              Mexicanos.
            </P>
            <P>
              Los servicios de consultoría y representación migratoria prestados por la firma se rigen por la
              Ley de Migración, su Reglamento, y demás ordenamientos aplicables en materia migratoria en México.
              La firma opera en plena observancia de las disposiciones emitidas por el Instituto Nacional de
              Migración (INM) y demás autoridades competentes.
            </P>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-base uppercase tracking-[0.12em] text-foreground mb-5 border-l-[3px] border-accent pl-4">
            Confidencialidad y Protección de Datos
          </h2>
          <div className="pl-4 space-y-4">
            <P>
              Toda la información proporcionada por clientes y usuarios a Santos & Becker, S.C. es tratada con
              estricta confidencialidad, de conformidad con la Ley Federal de Protección de Datos Personales en
              Posesión de los Particulares (LFPDPPP), su Reglamento y el{" "}
              <Link href="/aviso-de-privacidad" className="text-primary hover:underline">
                Aviso de Privacidad
              </Link>{" "}
              vigente de la firma.
            </P>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-base uppercase tracking-[0.12em] text-foreground mb-5 border-l-[3px] border-accent pl-4">
            Política de Anticorrupción y Ética Profesional
          </h2>
          <div className="pl-4 space-y-4">
            <P>
              Santos & Becker, S.C. mantiene una política de cero tolerancia frente a prácticas de corrupción,
              soborno o cualquier conducta contraria a la ley o a la ética profesional. Todos los procesos y
              trámites son gestionados mediante canales legales y transparentes, en apego estricto a la normativa
              aplicable.
            </P>
            <P>
              La firma se rige por los principios de transparencia, integridad y responsabilidad profesional en
              cada interacción con clientes, autoridades y terceros.
            </P>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-base uppercase tracking-[0.12em] text-foreground mb-5 border-l-[3px] border-accent pl-4">
            Contacto
          </h2>
          <div className="pl-4 space-y-4">
            <P>
              Para consultas sobre este Aviso Regulatorio o sobre el ejercicio profesional de la firma, puede
              comunicarse a través de los siguientes medios:
            </P>
            <div className="mt-4 space-y-2">
              <p className="font-sans text-[0.95rem] text-foreground/70">
                <span className="font-heading text-xs uppercase tracking-[0.12em] text-foreground/40 mr-3">Email</span>
                <a href="mailto:info@santosbecker.com" className="text-primary hover:underline">
                  info@santosbecker.com
                </a>
              </p>
              <p className="font-sans text-[0.95rem] text-foreground/70">
                <span className="font-heading text-xs uppercase tracking-[0.12em] text-foreground/40 mr-3">Tel</span>
                +52 55 6617 7712
              </p>
              <p className="font-sans text-[0.95rem] text-foreground/70">
                <span className="font-heading text-xs uppercase tracking-[0.12em] text-foreground/40 mr-3">Domicilio</span>
                Calle Prado Norte 135, Oficinas 201 y 205, Lomas de Chapultepec III Sección, 11000 CDMX
              </p>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="border-t border-border pt-10">
          <Link href="/" className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}
