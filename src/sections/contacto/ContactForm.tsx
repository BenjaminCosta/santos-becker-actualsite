import { type FormEvent, useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useContent } from "@/context/LocaleContext";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const FLOAT_LABEL = [
  "absolute left-0 -top-4",
  "font-heading text-[9px] uppercase tracking-[0.15em] text-muted-foreground",
  "transition-all pointer-events-none",
  "peer-placeholder-shown:text-base peer-placeholder-shown:font-sans peer-placeholder-shown:normal-case",
  "peer-placeholder-shown:tracking-normal peer-placeholder-shown:top-3 peer-placeholder-shown:text-foreground/40",
  "peer-focus:-top-4 peer-focus:text-[9px] peer-focus:font-heading peer-focus:uppercase",
  "peer-focus:tracking-[0.15em] peer-focus:text-primary",
].join(" ");

const FIELD =
  "peer w-full bg-transparent border-0 border-b border-border focus:ring-0 focus:border-primary py-3 transition-colors placeholder-transparent font-sans text-lg";

const SOCIAL_ICONS = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  YouTube: FaYoutube,
  WhatsApp: FaWhatsapp,
} as const;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const FORM_ENDPOINT = "https://formsubmit.co/info@santosbecker.com";
const FORM_TARGET = "formsubmit-contact-frame";

export function ContactForm() {
  const { form, contactInfo } = useContent().contacto;
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const hasSubmittedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);

  function finishSubmit() {
    if (!hasSubmittedRef.current) return;

    hasSubmittedRef.current = false;
    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }

    formRef.current?.reset();
    setStatus("success");
    setStatusMessage(
      "Consulta enviada. Si es la primera vez que se usa el formulario, confirme el correo de autorización de FormSubmit.",
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);

    if (String(formData.get("botcheck") || "").trim()) {
      e.preventDefault();
      return;
    }

    hasSubmittedRef.current = true;
    setStatus("submitting");
    setStatusMessage("");

    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = window.setTimeout(finishSubmit, 5000);
  }

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: contact details */}
          <div className="lg:col-span-4 flex flex-col gap-14">
            <FadeIn direction="right">
              <p className="typo-eyebrow text-primary mb-10">{contactInfo.eyebrow}</p>

              <div className="space-y-10">
                <div>
                  <p className="font-heading text-[9px] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    {contactInfo.emailLabel}
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-sans text-2xl font-light text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 inline-block"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div>
                  <p className="font-heading text-[9px] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    {contactInfo.phoneLabel}
                  </p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="font-sans text-2xl font-light text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 inline-block"
                  >
                    {contactInfo.phone}
                  </a>
                </div>

              </div>

              {/* Social box */}
              <div className="bg-gray-50 p-10 -mx-6 md:mx-0 mt-12">
                <p className="typo-eyebrow text-primary mb-6">{contactInfo.socialEyebrow}</p>
                <ul className="space-y-4 divide-y divide-border">
                  {contactInfo.socials.map((s) => {
                    const Icon = SOCIAL_ICONS[s.name as keyof typeof SOCIAL_ICONS];

                    return (
                      <li key={s.name} className="pt-4 first:pt-0">
                        <a
                          href={s.href}
                          target={s.href.startsWith("http") ? "_blank" : undefined}
                          rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-sans text-base text-foreground hover:text-primary transition-colors flex items-center justify-between gap-5 group"
                        >
                          <span className="flex items-center gap-4 min-w-0">
                            {Icon ? (
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-white text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                                <Icon aria-hidden className="h-4 w-4" />
                              </span>
                            ) : null}
                            <span className="min-w-0">
                              {s.name}
                              <span className="block text-sm text-muted-foreground truncate">{s.label}</span>
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 transform transition-transform group-hover:translate-x-1" aria-hidden />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </FadeIn>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            <FadeIn direction="left" delay={0.1}>
              <div className="bg-white border border-border/50 shadow-sm p-8 md:p-16">
                <p className="typo-eyebrow text-primary mb-3">{form.eyebrow}</p>
                <h2 className="typo-title text-3xl md:text-4xl text-foreground mb-14">{form.title}</h2>

                <iframe
                  name={FORM_TARGET}
                  title="Envio de formulario"
                  className="hidden"
                  onLoad={finishSubmit}
                />

                <form
                  ref={formRef}
                  action={FORM_ENDPOINT}
                  method="POST"
                  target={FORM_TARGET}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                >
                  <input type="hidden" name="_subject" value="Nueva consulta desde santosbecker.com" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  {/* Name */}
                  <div className="relative">
                    <input id="contact-nombre" type="text" name="nombre" required placeholder=" " className={FIELD} />
                    <label htmlFor="contact-nombre" className={FLOAT_LABEL}>{form.labels.nombre}</label>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <input id="contact-empresa" type="text" name="empresa" placeholder=" " className={FIELD} />
                    <label htmlFor="contact-empresa" className={FLOAT_LABEL}>{form.labels.empresa}</label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input id="contact-email" type="email" name="email" required placeholder=" " className={FIELD} />
                    <label htmlFor="contact-email" className={FLOAT_LABEL}>{form.labels.email}</label>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input id="contact-telefono" type="tel" name="telefono" placeholder=" " className={FIELD} />
                    <label htmlFor="contact-telefono" className={FLOAT_LABEL}>{form.labels.telefono}</label>
                  </div>

                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Inquiry type */}
                  <div className="md:col-span-2">
                    <label htmlFor="contact-tipo" className="block font-heading text-[9px] uppercase tracking-[0.15em] text-muted-foreground mb-3">
                      {form.labels.tipo}
                    </label>
                    <div className="relative">
                      <select
                        id="contact-tipo"
                        name="tipo_consulta"
                        className="w-full bg-transparent border-0 border-b border-border focus:ring-0 focus:border-primary py-3 font-sans text-lg text-foreground appearance-none cursor-pointer"
                        style={{ borderRadius: 0 }}
                      >
                        {form.consultationTypes.map((type, i) => (
                          <option key={i}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-0 bottom-3.5 h-4 w-4 pointer-events-none text-muted-foreground" aria-hidden />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 relative">
                    <textarea id="contact-mensaje" name="mensaje" rows={4} required placeholder=" " className={`${FIELD} resize-none`} />
                    <label htmlFor="contact-mensaje" className={FLOAT_LABEL}>{form.labels.mensaje}</label>
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-5 bg-primary text-white font-heading uppercase tracking-[0.2em] text-[11px] hover:bg-primary/90 active:translate-y-px disabled:cursor-wait disabled:opacity-70 transition-all"
                    >
                      {status === "submitting" ? "Enviando..." : form.submitBtn}
                    </button>
                    {statusMessage ? (
                      <p
                        role="status"
                        className={`font-sans text-sm mt-4 ${
                          status === "success" ? "text-primary" : "text-red-700"
                        }`}
                      >
                        {statusMessage}
                      </p>
                    ) : null}
                    <p className="font-sans text-sm text-muted-foreground mt-4">
                      {form.privacyNote.split("aviso de privacidad").length > 1 ? (
                        <>
                          {form.privacyNote.split("aviso de privacidad")[0]}
                          <a href="/aviso-de-privacidad" className="underline hover:text-primary transition-colors">
                            aviso de privacidad
                          </a>
                          {form.privacyNote.split("aviso de privacidad")[1]}
                        </>
                      ) : (
                        form.privacyNote
                      )}
                    </p>
                  </div>

                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
