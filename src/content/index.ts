import { es } from "./es";
import { en } from "./en";
import { zh } from "./zh";

export type Locale = "es" | "en" | "zh";

// Recursively widen all string literals to `string` so translations
// with different literal values satisfy the same dictionary shape.
type DeepString<T> =
  T extends string
    ? string
    : T extends readonly (infer U)[]
      ? readonly DeepString<U>[]
      : { readonly [K in keyof T]: DeepString<T[K]> };

export type ContentDictionary = DeepString<typeof es>;

export const contentMap: Record<Locale, ContentDictionary> = {
  es,
  en,
  zh,
};

export { es };
