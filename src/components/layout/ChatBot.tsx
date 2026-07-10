import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Check, MessagesSquare, X } from "lucide-react";
import { useContent } from "@/context/LocaleContext";
import { es } from "@/content/index";

/* FormSubmit endpoint — same as the site's contact form */
const FORM_ENDPOINT = "https://formsubmit.co/info@santosbecker.com";
const FORM_TARGET = "formsubmit-chatbot-frame";

/* Ordered steps of the guided conversation */
const STEP_ORDER = [
  "nombre",
  "nacionalidad",
  "email",
  "telefono",
  "tipo",
  "mensaje",
] as const;
type StepKey = (typeof STEP_ORDER)[number];

/* Spanish field names for the email — kept constant so the inbox at
   info@santosbecker.com always receives a consistent, ordered table
   regardless of the visitor's UI language. */
const MAIL_LABELS = es.global.chatbot.fieldLabels;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EASE = [0.16, 1, 0.3, 1] as const;

type Phase = "collecting" | "sending" | "done";
interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

/* Circular assistant avatar with a pulsing "online" dot */
function Avatar({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <span className="relative inline-flex shrink-0">
      <span
        className={`sbr-full ${box} grid place-items-center bg-primary/15 ring-1 ring-primary/40 text-primary`}
      >
        <MessagesSquare className={icon} strokeWidth={1.7} aria-hidden />
      </span>
      <span className="sbr-full sb-pulse-dot absolute -top-0.5 -right-0.5 h-3 w-3 border-2 border-[#141315] bg-primary" />
    </span>
  );
}

export function ChatBot() {
  const chatbot = useContent().global.chatbot;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<StepKey, string>>>({});
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const [phase, setPhase] = useState<Phase>("collecting");

  const msgId = useRef(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const hasSubmittedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const typingTimerRef = useRef<number | null>(null);

  const currentKey = STEP_ORDER[stepIndex] as StepKey | undefined;
  const isTipoStep = currentKey === "tipo";
  const collecting = phase === "collecting" && stepIndex < STEP_ORDER.length;

  const nextId = () => {
    msgId.current += 1;
    return msgId.current;
  };

  const pushBot = (text: string) =>
    setMessages((m) => [...m, { id: nextId(), role: "bot", text }]);
  const pushUser = (text: string) =>
    setMessages((m) => [...m, { id: nextId(), role: "user", text }]);

  /* Bot "types" for a beat, then reveals the next prompt */
  const queuePrompt = (index: number) => {
    setBotTyping(true);
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    typingTimerRef.current = window.setTimeout(() => {
      const key = STEP_ORDER[index];
      pushBot(chatbot.steps[key].prompt);
      setBotTyping(false);
    }, 700);
  };

  /* Initialise the conversation the first time the panel opens */
  const openChat = () => {
    setOpen(true);
    if (messages.length === 0) {
      pushBot(chatbot.welcome);
      queuePrompt(0);
    }
  };

  const resetConversation = () => {
    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    hasSubmittedRef.current = false;
    setMessages([]);
    setAnswers({});
    setInput("");
    setError("");
    setStepIndex(0);
    setPhase("collecting");
    msgId.current = 0;
    pushBot(chatbot.welcome);
    queuePrompt(0);
  };

  const submitAnswer = (raw: string) => {
    if (!collecting || botTyping || !currentKey) return;
    const value = raw.trim();

    if (!value) {
      setError(chatbot.validation.required);
      return;
    }
    if (currentKey === "email" && !EMAIL_RE.test(value)) {
      setError(chatbot.validation.email);
      return;
    }

    setError("");
    pushUser(value);
    const nextAnswers = { ...answers, [currentKey]: value };
    setAnswers(nextAnswers);
    setInput("");

    const next = stepIndex + 1;
    setStepIndex(next);
    if (next < STEP_ORDER.length) {
      queuePrompt(next);
    } else {
      setPhase("sending");
    }
  };

  /* Fire the hidden FormSubmit form once all answers are committed to the DOM */
  useEffect(() => {
    if (phase !== "sending") return;
    hasSubmittedRef.current = true;
    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = window.setTimeout(finishSubmit, 5000);
    formRef.current?.submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  function finishSubmit() {
    if (!hasSubmittedRef.current) return;
    hasSubmittedRef.current = false;
    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    setPhase("done");
    pushBot(chatbot.success);
  }

  /* Auto-scroll to the latest message */
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, botTyping, phase]);

  /* Focus the text input when a new text step becomes active (desktop only —
     avoid forcing the mobile keyboard open the instant a step appears) */
  useEffect(() => {
    if (
      open &&
      collecting &&
      !botTyping &&
      !isTipoStep &&
      window.matchMedia("(min-width: 640px)").matches
    ) {
      inputRef.current?.focus();
    }
  }, [open, collecting, botTyping, isTipoStep, stepIndex]);

  /* Escape closes the panel */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Clean up timers on unmount */
  useEffect(
    () => () => {
      if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
      if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    },
    [],
  );

  const progress = phase === "done" ? 1 : stepIndex / STEP_ORDER.length;
  const stepContent = currentKey
    ? (chatbot.steps[currentKey] as { prompt: string; placeholder?: string })
    : undefined;
  const inputDisabled = !collecting || botTyping;

  return (
    <>
      {/* Hidden FormSubmit plumbing — mirrors the site's contact form */}
      <iframe name={FORM_TARGET} title="Envío de consulta" className="hidden" onLoad={finishSubmit} />
      <form ref={formRef} action={FORM_ENDPOINT} method="POST" target={FORM_TARGET} className="hidden">
        <input type="hidden" name="_subject" value={chatbot.emailSubject} readOnly />
        <input type="hidden" name="_template" value="table" readOnly />
        <input type="hidden" name="_captcha" value="false" readOnly />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" readOnly value="" />
        <input type="hidden" name={MAIL_LABELS.nombre} value={answers.nombre ?? ""} readOnly />
        <input type="hidden" name={MAIL_LABELS.nacionalidad} value={answers.nacionalidad ?? ""} readOnly />
        <input type="hidden" name={MAIL_LABELS.email} value={answers.email ?? ""} readOnly />
        <input type="hidden" name={MAIL_LABELS.telefono} value={answers.telefono ?? ""} readOnly />
        <input type="hidden" name={MAIL_LABELS.tipo} value={answers.tipo ?? ""} readOnly />
        <input type="hidden" name={MAIL_LABELS.mensaje} value={answers.mensaje ?? ""} readOnly />
      </form>

      {/* Launcher — modern glass pill */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            type="button"
            onClick={openChat}
            aria-label={chatbot.launchLabel}
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="sb-glass sbr-full group fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2.5rem)] items-center gap-3 border border-white/10 py-2 pl-2 pr-5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.65)] sm:bottom-6 sm:right-6"
          >
            <Avatar />
            <span className="flex min-w-0 flex-col text-left leading-tight">
              <span className="font-heading text-[11px] uppercase tracking-[0.16em] text-white">
                {chatbot.headerTitle}
              </span>
              <span className="truncate font-sans text-[13px] text-white/60">
                {chatbot.launchSubtitle}
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Mobile scrim */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] sm:hidden"
            />

            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label={chatbot.headerTitle}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="sb-glass-strong sbr-panel fixed z-50 flex flex-col overflow-hidden border border-white/10 text-white shadow-[0_-8px_60px_-12px_rgba(0,0,0,0.7)]
                inset-x-0 bottom-0 h-[88dvh] max-h-[88dvh]
                sm:inset-x-auto sm:right-6 sm:bottom-6 sm:left-auto sm:h-[620px] sm:max-h-[calc(100dvh-3rem)] sm:w-[400px] sm:shadow-[0_24px_70px_-15px_rgba(0,0,0,0.7)]"
            >
              {/* Mobile drag handle */}
              <div className="flex justify-center pt-2.5 sm:hidden">
                <span className="sbr-full h-1 w-10 bg-white/25" />
              </div>

              {/* Header */}
              <div className="relative flex items-center gap-3 px-5 pb-4 pt-3 sm:pt-4">
                <Avatar />
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-sm uppercase tracking-[0.12em] text-white">
                    {chatbot.headerTitle}
                  </p>
                  <p className="flex items-center gap-1.5 truncate font-sans text-[12px] text-white/55">
                    {chatbot.headerSubtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={chatbot.closeLabel}
                  className="sbr-full flex h-9 w-9 items-center justify-center bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4.5 w-4.5" strokeWidth={1.7} aria-hidden />
                </button>
                {/* Progress */}
                <div className="absolute inset-x-5 bottom-0 h-[3px] overflow-hidden bg-white/8">
                  <motion.div
                    className="sbr-full h-full"
                    style={{ background: "linear-gradient(90deg,#00B07C,#2fe3a8)" }}
                    initial={false}
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                </div>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="sb-scroll flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5"
              >
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className={m.role === "user" ? "flex justify-end" : "flex items-end gap-2 justify-start"}
                  >
                    {m.role === "bot" && (
                      <span className="sbr-full mb-0.5 grid h-6 w-6 shrink-0 place-items-center bg-primary/15 text-primary">
                        <MessagesSquare className="h-3 w-3" strokeWidth={1.8} aria-hidden />
                      </span>
                    )}
                    <p
                      className={
                        m.role === "user"
                          ? "sbr-user max-w-[80%] bg-primary px-4 py-2.5 text-[15px] leading-relaxed text-white shadow-sm"
                          : "sbr-bot sb-surface max-w-[82%] px-4 py-2.5 text-[15px] leading-relaxed text-white/90"
                      }
                    >
                      {m.text}
                    </p>
                  </motion.div>
                ))}

                {botTyping && (
                  <div className="flex items-end gap-2">
                    <span className="sbr-full grid h-6 w-6 shrink-0 place-items-center bg-primary/15 text-primary">
                      <MessagesSquare className="h-3 w-3" strokeWidth={1.8} aria-hidden />
                    </span>
                    <div className="sbr-bot sb-surface flex items-center gap-1.5 px-4 py-3.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="sbr-full h-1.5 w-1.5 bg-white/60"
                          animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input / actions */}
              <div className="border-t border-white/10 px-4 pt-3 sm:px-5 sm:pt-4 pb-[max(0.85rem,env(safe-area-inset-bottom))]">
                {phase === "done" ? (
                  <button
                    type="button"
                    onClick={resetConversation}
                    className="sbr-full flex w-full items-center justify-center gap-2 bg-white/5 py-3.5 font-heading text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary hover:text-white"
                  >
                    <Check className="h-4 w-4" strokeWidth={2} aria-hidden />
                    {chatbot.restart}
                  </button>
                ) : isTipoStep && collecting && !botTyping ? (
                  <div className="flex flex-wrap gap-2">
                    {chatbot.consultationTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => submitAnswer(type)}
                        className="sbr-full border border-white/20 bg-white/[0.03] px-4 py-2.5 font-sans text-[14px] text-white/85 transition-colors hover:border-primary hover:bg-primary/15 hover:text-white"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                ) : (
                  <>
                    <div
                      className={`sbr-2xl sb-surface flex items-end gap-2 border p-1.5 pl-4 transition-colors ${
                        error ? "border-red-400/50" : "border-white/12 focus-within:border-primary/60"
                      }`}
                    >
                      <textarea
                        ref={inputRef}
                        rows={1}
                        value={input}
                        disabled={inputDisabled}
                        placeholder={stepContent?.placeholder ?? ""}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            submitAnswer(input);
                          }
                        }}
                        className="max-h-28 min-h-[38px] flex-1 resize-none self-center bg-transparent py-2 font-sans text-[16px] leading-snug text-white placeholder-white/35 outline-none disabled:opacity-50"
                      />
                      <button
                        type="button"
                        onClick={() => submitAnswer(input)}
                        disabled={inputDisabled || !input.trim()}
                        aria-label={chatbot.sendLabel}
                        className="sbr-full flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40"
                      >
                        <ArrowUp className="h-5 w-5" strokeWidth={2} aria-hidden />
                      </button>
                    </div>
                    {error && (
                      <p role="alert" className="mt-2 px-1 font-sans text-[13px] text-red-400">
                        {error}
                      </p>
                    )}
                    {phase === "sending" && (
                      <p className="mt-2 px-1 font-heading text-[9px] uppercase tracking-[0.15em] text-primary">
                        {chatbot.sending}
                      </p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
