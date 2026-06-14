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

export function AvisoPrivacidad() {
  return (
    <div className="bg-background">

      {/* Header */}
      <div className="bg-dark-accent pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(235,215,35,0.03) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="typo-eyebrow text-accent mb-5">Legal</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Aviso de Privacidad
          </h1>
          <p className="font-sans text-white/40 text-sm">Santos & Becker, S.C. — Versión vigente 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        <LegalSection number="1" title="Identidad y Domicilio del Responsable">
          <P>
            Santos & Becker, S.C. (en adelante "S&B" o el "Responsable"), con RFC BGM200515CN2, con domicilio en
            Calle Prado Norte 135, Oficinas 201 y 205, Colonia Lomas de Chapultepec III Sección, Alcaldía Miguel
            Hidalgo, C.P. 11000, Ciudad de México, es responsable del tratamiento de los datos personales que usted
            nos proporcione a través del sitio web www.santosbecker.com, de conformidad con la Ley Federal de
            Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
          </P>
          <P>
            El área responsable de la protección de datos personales en S&B puede ser contactada a través del
            correo electrónico{" "}
            <a href="mailto:info@santosbecker.com" className="text-primary hover:underline">
              info@santosbecker.com
            </a>
            .
          </P>
        </LegalSection>

        <LegalSection number="2" title="Datos Personales que se Recaban">
          <P>A través de los formularios disponibles en el sitio web, S&B recaba los siguientes datos personales:</P>
          <LegalList items={[
            "Nombre completo",
            "Correo electrónico",
            "Número de teléfono o WhatsApp",
            "Empresa u organización a la que pertenece",
            "Mensaje o consulta",
          ]} />
          <P>
            S&B no recaba datos personales sensibles a través del sitio web. El uso del sitio está destinado
            exclusivamente a personas mayores de edad. S&B no recaba ni trata datos personales de menores de 18
            años a través de este medio.
          </P>
        </LegalSection>

        <LegalSection number="3" title="Finalidades del Tratamiento">
          <p className="font-heading text-xs uppercase tracking-[0.12em] text-foreground/50 mb-2 font-sans">Finalidades primarias</p>
          <P>Los datos personales recabados serán utilizados para:</P>
          <LegalList items={[
            "Atender y dar seguimiento a las solicitudes de información, cotización o contacto que usted realice.",
            "Identificar al usuario y establecer comunicación en respuesta a su consulta.",
            "Evaluar la viabilidad de una relación de servicios profesionales.",
          ]} />
          <p className="font-heading text-xs uppercase tracking-[0.12em] text-foreground/50 mb-2 mt-6 font-sans">Finalidades secundarias</p>
          <P>De manera adicional, S&B podrá utilizar sus datos personales para:</P>
          <LegalList items={[
            "Enviar comunicaciones sobre actualizaciones normativas, alertas migratorias y contenido de valor relacionado con los servicios de la firma.",
            "Fines estadísticos y de mejora de los servicios.",
          ]} />
          <P>
            Si usted no desea que sus datos sean tratados para las finalidades secundarias, puede manifestarlo
            enviando un correo a{" "}
            <a href="mailto:info@santosbecker.com" className="text-primary hover:underline">
              info@santosbecker.com
            </a>{" "}
            con el asunto "Oposición a finalidades secundarias". La negativa no afectará la atención de su solicitud principal.
          </P>
        </LegalSection>

        <LegalSection number="4" title="Base de Licitud y Consentimiento">
          <P>
            El tratamiento de sus datos personales se realiza con fundamento en su consentimiento, el cual otorga
            al completar y enviar cualquier formulario disponible en el Sitio, o al comunicarse con S&B a través de
            los canales de contacto disponibles en www.santosbecker.com.
          </P>
          <P>
            Usted puede revocar su consentimiento en cualquier momento, sin efectos retroactivos, enviando su
            solicitud a{" "}
            <a href="mailto:info@santosbecker.com" className="text-primary hover:underline">
              info@santosbecker.com
            </a>
            . La revocación no afectará los tratamientos realizados con anterioridad a dicha solicitud.
          </P>
        </LegalSection>

        <LegalSection number="5" title="Transferencias de Datos Personales">
          <P>
            S&B podrá transferir sus datos personales a las siguientes categorías de destinatarios, sin requerir
            su consentimiento adicional cuando dicha transferencia sea necesaria para la prestación del servicio
            contratado o solicitado:
          </P>
          <LegalList items={[
            "Autoridades migratorias y entidades gubernamentales competentes, en el curso ordinario de los trámites y servicios migratorios, con pleno conocimiento del titular.",
            "Firmas especializadas en derecho migratorio que forman parte de la red internacional de S&B, cuando la naturaleza del caso requiera coordinación en el extranjero, con conocimiento del titular.",
            "Proveedores tecnológicos y prestadores de servicios que actúan como encargados del tratamiento, bajo acuerdos de confidencialidad y únicamente para los fines descritos en este Aviso.",
          ]} />
          <P>En caso de transferencias distintas a las anteriores, S&B obtendrá su consentimiento previo.</P>
        </LegalSection>

        <LegalSection number="6" title="Plazo de Conservación de los Datos">
          <P>
            S&B conservará sus datos personales durante el tiempo necesario para cumplir con las finalidades para
            las que fueron recabados y, una vez concluida la relación con el titular, por el plazo que determine
            la legislación aplicable o resulte necesario para atender responsabilidades legales.
          </P>
          <P>
            Cuando los datos ya no sean necesarios para ninguna de las finalidades descritas, serán cancelados
            mediante su bloqueo y posterior supresión, conforme a los procedimientos establecidos en la LFPDPPP.
          </P>
        </LegalSection>

        <LegalSection number="7" title="Medidas de Seguridad">
          <P>
            S&B implementa medidas de seguridad técnicas, administrativas y físicas, proporcionales a la
            naturaleza de los datos tratados y a los riesgos identificados, con el fin de proteger los datos
            personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado.
          </P>
          <P>
            El personal de S&B con acceso a datos personales está sujeto a obligaciones de confidencialidad. Los
            proveedores tecnológicos que actúan como encargados del tratamiento están vinculados contractualmente
            a estándares equivalentes de seguridad.
          </P>
        </LegalSection>

        <LegalSection number="8" title="Derechos ARCO y Mecanismo de Ejercicio">
          <P>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales
            (derechos ARCO), así como a revocar el consentimiento otorgado y limitar el uso o divulgación de sus
            datos.
          </P>
          <P>
            Para ejercer cualquiera de estos derechos, deberá enviar su solicitud al correo electrónico:{" "}
            <a href="mailto:info@santosbecker.com" className="text-primary hover:underline">
              info@santosbecker.com
            </a>
            . Su solicitud deberá incluir: (i) nombre completo y correo electrónico del titular; (ii) descripción
            clara del derecho que desea ejercer; (iii) cualquier elemento que facilite la localización de sus datos.
          </P>
          <P>
            S&B acusará recibo de su solicitud y dará respuesta en un plazo máximo de 20 días hábiles,
            prorrogables por 20 días adicionales cuando las circunstancias lo justifiquen.
          </P>
        </LegalSection>

        <LegalSection number="9" title="Uso de Cookies y Tecnologías de Seguimiento">
          <P>El sitio www.santosbecker.com utiliza cookies y tecnologías similares con las siguientes finalidades:</P>
          <LegalList items={[
            "Cookies técnicas y funcionales: necesarias para el correcto funcionamiento del sitio.",
            "Cookies analíticas: permiten conocer el comportamiento de los usuarios para mejorar la experiencia de navegación.",
            "Cookies de publicidad y remarketing: utilizadas para mostrar contenido relevante en otras plataformas digitales.",
            "Herramientas de CRM: para la gestión de solicitudes de contacto y seguimiento comercial.",
          ]} />
          <P>
            Para más información sobre el uso de cookies y las opciones de configuración disponibles, consulte
            nuestra{" "}
            <Link href="/terminos-y-condiciones" className="text-primary hover:underline">
              Política de Cookies
            </Link>
            , disponible en www.santosbecker.com.
          </P>
        </LegalSection>

        <LegalSection number="10" title="Modificaciones al Aviso de Privacidad">
          <P>
            S&B se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento para
            reflejar cambios normativos, operativos o en los servicios ofrecidos. Cualquier modificación será
            publicada en www.santosbecker.com. Se recomienda al usuario revisar periódicamente este Aviso.
          </P>
        </LegalSection>

        <LegalSection number="11" title="Autoridad Competente">
          <P>
            Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede presentar
            una queja ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos
            Personales (INAI), con domicilio en Insurgentes Sur 3211, Col. Insurgentes Cuicuilco, Alcaldía
            Coyoacán, C.P. 04530, Ciudad de México, o a través de{" "}
            <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              www.inai.org.mx
            </a>
            .
          </P>
        </LegalSection>

        {/* Back link */}
        <div className="border-t border-border pt-10 mt-16">
          <Link href="/" className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}
