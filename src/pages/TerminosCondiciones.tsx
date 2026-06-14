import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

function LegalSection({ number, title, children }: { number?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-base uppercase tracking-[0.12em] text-foreground mb-5 flex gap-3 items-start border-l-[3px] border-accent pl-4">
        {number && <span className="text-accent/60 shrink-0">{number}.</span>}
        {title}
      </h2>
      <div className="pl-4 space-y-4">{children}</div>
    </section>
  );
}

function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-foreground/70 leading-relaxed text-[0.95rem] font-sans">
          <span className="text-accent shrink-0 mt-0.5">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-sans text-[0.95rem] text-foreground/70 leading-relaxed">{children}</p>;
}

export function TerminosCondiciones() {
  return (
    <div className="bg-background">

      {/* Header */}
      <div className="bg-dark-accent pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.03) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="typo-eyebrow text-accent mb-5">Legal</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Términos y Condiciones
          </h1>
          <p className="font-sans text-white/40 text-sm">Santos & Becker, S.C. — Versión vigente 2025</p>
        </div>
      </div>

      {/* Términos y Condiciones */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        <LegalSection number="1" title="Objeto y Aceptación">
          <P>
            Los presentes Términos y Condiciones (en adelante los "Términos") regulan el acceso y uso del sitio
            web www.santosbecker.com (en adelante el "Sitio"), propiedad de Santos & Becker, S.C.
            (RFC BGM200515CN2), con domicilio en Calle Prado Norte 135, Oficinas 201 y 205, Colonia Lomas de
            Chapultepec III Sección, Alcaldía Miguel Hidalgo, C.P. 11000, Ciudad de México.
          </P>
          <P>
            El acceso y uso del Sitio implica la aceptación plena y sin reservas de los presentes Términos. Si
            usted no está de acuerdo con alguna de sus disposiciones, deberá abstenerse de utilizar el Sitio.
          </P>
        </LegalSection>

        <LegalSection number="2" title="Usuarios">
          <P>
            El Sitio está dirigido exclusivamente a personas mayores de 18 años y a personas morales legalmente
            constituidas. S&B no recaba ni trata datos personales de menores de edad a través del Sitio. Si
            usted es menor de edad, deberá abstenerse de proporcionar información personal.
          </P>
        </LegalSection>

        <LegalSection number="3" title="Uso del Sitio y Conductas Prohibidas">
          <P>
            El usuario se compromete a utilizar el Sitio de conformidad con la ley aplicable, los presentes
            Términos y la moral. Queda expresamente prohibido:
          </P>
          <LegalList items={[
            "Utilizar el Sitio con fines ilícitos o contrarios a los presentes Términos.",
            "Reproducir, distribuir o modificar los contenidos del Sitio sin autorización expresa de S&B.",
            "Introducir o difundir virus informáticos o cualquier código malicioso que pueda comprometer la seguridad del Sitio o de sus usuarios.",
            "Realizar acciones que puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio o sus sistemas.",
            "Suplantar la identidad de cualquier persona o entidad, o proporcionar información falsa a través de los formularios del Sitio.",
          ]} />
        </LegalSection>

        <LegalSection number="4" title="Contenido e Información del Sitio">
          <P>
            La información publicada en el Sitio tiene carácter meramente informativo y no constituye asesoría
            jurídica, migratoria ni de ninguna otra índole. S&B no asume responsabilidad alguna por las
            decisiones que el usuario tome con base en dicha información sin haber contratado los servicios
            profesionales correspondientes.
          </P>
          <P>
            S&B se reserva el derecho de modificar, suspender o eliminar, sin previo aviso, cualquier contenido
            del Sitio.
          </P>
        </LegalSection>

        <LegalSection number="5" title="Formularios de Contacto">
          <P>
            Al completar cualquier formulario disponible en el Sitio, el usuario autoriza a S&B a utilizar los
            datos proporcionados para dar seguimiento a su solicitud, de conformidad con el{" "}
            <Link href="/aviso-de-privacidad" className="text-primary hover:underline">
              Aviso de Privacidad
            </Link>{" "}
            disponible en www.santosbecker.com.
          </P>
          <P>
            El envío de un formulario no genera obligación contractual alguna entre las partes ni constituye la
            formalización de un contrato de prestación de servicios profesionales. La relación de servicios solo
            se formaliza mediante la suscripción del contrato correspondiente.
          </P>
        </LegalSection>

        <LegalSection number="6" title="Propiedad Intelectual">
          <P>
            Todos los elementos del Sitio, incluyendo marca, logotipos, textos, imágenes, diseño, código fuente
            y estructura, son propiedad exclusiva de Santos & Becker, S.C. o de sus licenciantes, y están
            protegidos por la Ley Federal del Derecho de Autor y la Ley de la Propiedad Industrial vigentes en
            los Estados Unidos Mexicanos.
          </P>
          <P>
            Queda prohibida cualquier reproducción, distribución, comunicación pública o transformación de dichos
            elementos sin autorización previa y por escrito de S&B. El uso no autorizado podrá dar lugar a las
            acciones legales correspondientes.
          </P>
        </LegalSection>

        <LegalSection number="7" title="Indemnización">
          <P>
            El usuario se obliga a indemnizar y mantener en paz y a salvo a S&B, sus socios, directivos,
            empleados y colaboradores, frente a cualquier reclamación, daño, pérdida, responsabilidad, costo o
            gasto (incluyendo honorarios legales razonables) que surja de o esté relacionado con: (i) el
            incumplimiento de los presentes Términos; (ii) el uso indebido del Sitio; o (iii) la vulneración de
            derechos de terceros a través del uso del Sitio.
          </P>
        </LegalSection>

        <LegalSection number="8" title="Enlaces a Sitios de Terceros">
          <P>
            El Sitio puede contener enlaces a sitios web de terceros. S&B no tiene control sobre dichos sitios,
            no asume responsabilidad por su contenido, disponibilidad ni por las prácticas de privacidad que
            apliquen. El acceso a sitios de terceros es por cuenta y riesgo exclusivo del usuario.
          </P>
        </LegalSection>

        <LegalSection number="9" title="Limitación de Responsabilidad">
          <P>
            S&B no garantiza la disponibilidad continua e ininterrumpida del Sitio. El Sitio se ofrece "tal como
            está", sin garantías de ningún tipo, expresas o implícitas. En ningún caso S&B será responsable por
            daños directos, indirectos, incidentales, especiales o consecuentes derivados del acceso, uso o
            imposibilidad de uso del Sitio, incluso si S&B hubiera sido advertida de la posibilidad de dichos
            daños.
          </P>
        </LegalSection>

        <LegalSection number="10" title="Legislación Aplicable y Jurisdicción">
          <P>
            Los presentes Términos se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Para la
            resolución de cualquier controversia derivada de su interpretación o cumplimiento, las partes se
            someten expresamente a la jurisdicción de los tribunales competentes de la Ciudad de México,
            renunciando a cualquier otro fuero que pudiera corresponderles en razón de sus domicilios presentes
            o futuros.
          </P>
        </LegalSection>

        <LegalSection number="11" title="Modificaciones a los Términos">
          <P>
            S&B se reserva el derecho de modificar los presentes Términos en cualquier momento. Las
            modificaciones serán publicadas en el Sitio con indicación de la fecha de actualización. El uso
            continuado del Sitio tras la publicación de cambios implica la aceptación de los Términos vigentes.
          </P>
        </LegalSection>

        {/* Divider for Cookies section */}
        <div className="border-t border-border my-16 pt-16">
          <p className="typo-eyebrow text-accent mb-5">Política</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground tracking-tight mb-12">
            Política de Cookies
          </h2>

          <LegalSection title="Tipos de Cookies que Utilizamos">
            <div className="space-y-6">
              {[
                {
                  name: "Cookies técnicas y funcionales",
                  desc: "Necesarias para el funcionamiento básico del Sitio. Permiten la navegación y el uso de sus funciones esenciales. No requieren consentimiento del usuario y no pueden desactivarse sin afectar el funcionamiento del Sitio.",
                },
                {
                  name: "Cookies analíticas",
                  desc: "Permiten medir el número de visitas, la procedencia del tráfico y el comportamiento de los usuarios dentro del Sitio. La información recopilada es agregada y anónima, y se utiliza exclusivamente para mejorar el rendimiento y la usabilidad del Sitio.",
                },
                {
                  name: "Cookies de publicidad y remarketing",
                  desc: "Utilizadas para mostrar contenido y publicidad relevante en otras plataformas digitales, con base en el comportamiento de navegación del usuario en el Sitio. Estas cookies pueden ser instaladas por servicios de terceros especializados en publicidad digital.",
                },
                {
                  name: "Cookies de herramientas de gestión comercial",
                  desc: "Vinculadas a herramientas de gestión de relaciones con clientes para registrar, clasificar y dar seguimiento a las solicitudes de contacto realizadas a través del Sitio. Su uso se limita a fines operativos internos de S&B.",
                },
              ].map((cookie) => (
                <div key={cookie.name}>
                  <p className="font-heading text-xs uppercase tracking-[0.12em] text-foreground mb-2">{cookie.name}</p>
                  <P>{cookie.desc}</P>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection title="Cookies de Terceros">
            <P>
              El Sitio integra servicios de terceros especializados en analítica web, publicidad digital y gestión
              comercial. Dichos terceros pueden instalar sus propias cookies sujetas a sus respectivas políticas de
              privacidad. S&B no controla ni asume responsabilidad por las cookies instaladas por proveedores
              externos.
            </P>
          </LegalSection>

          <LegalSection title="Gestión y Desactivación de Cookies">
            <P>
              El usuario puede configurar su navegador para aceptar, rechazar o eliminar cookies en cualquier
              momento. A continuación se indican las instrucciones para los principales navegadores:
            </P>
            <LegalList items={[
              "Google Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios.",
              "Mozilla Firefox: Opciones > Privacidad y seguridad > Cookies y datos del sitio.",
              "Safari: Preferencias > Privacidad > Gestión de datos del sitio web.",
              "Microsoft Edge: Configuración > Cookies y permisos del sitio.",
            ]} />
            <P>
              La desactivación de cookies no técnicas puede afectar funcionalidades del Sitio o limitar la
              personalización de la experiencia de navegación.
            </P>
          </LegalSection>

          <LegalSection title="Consentimiento">
            <P>
              Al continuar navegando en el Sitio sin modificar la configuración de su navegador, el usuario acepta
              el uso de cookies conforme a la presente Política. S&B implementa un aviso visible de cookies en el
              Sitio que permite al usuario gestionar sus preferencias antes de que se instalen cookies no esenciales.
              El consentimiento para el uso de cookies puede ser retirado en cualquier momento mediante la
              configuración del navegador.
            </P>
          </LegalSection>
        </div>

        {/* Back link */}
        <div className="border-t border-border pt-10 mt-4">
          <Link href="/" className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}
