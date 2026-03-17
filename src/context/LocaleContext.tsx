import { createContext, useContext, useState, type ReactNode } from "react";
import { contentMap, type ContentDictionary, type Locale } from "@/content/index";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  content: ContentDictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function detectLocale(): Locale {
  const saved = localStorage.getItem("sb-locale") as Locale | null;
  if (saved === "es" || saved === "en" || saved === "zh") return saved;
  return "es";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("sb-locale", l);
  };

  const content = contentMap[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

export function useContent(): ContentDictionary {
  return useLocale().content;
}
