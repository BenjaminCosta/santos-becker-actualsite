import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
  titleAs?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "light",
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
  titleAs = "h2",
}: SectionHeadingProps) {
  const TitleTag = titleAs;

  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "typo-eyebrow",
            variant === "dark" ? "text-accent" : "text-primary",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <TitleTag
        className={cn(
          "typo-title text-4xl md:text-5xl",
          variant === "dark" ? "text-white" : "text-foreground",
          titleClassName,
        )}
      >
        {title}
      </TitleTag>

      {description ? (
        <div
          className={cn(
            "font-sans text-lg md:text-xl leading-relaxed",
            variant === "dark" ? "text-white/65" : "text-muted-foreground",
            descriptionClassName,
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
