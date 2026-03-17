"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimatedDropdownItem<T extends string = string> = {
  value: T;
  label: string;
  description?: string;
};

export type AnimatedDropdownProps<T extends string = string> = {
  items: AnimatedDropdownItem<T>[];
  value: T;
  onSelect: (value: T) => void;
  label?: string;
  className?: string;
  variant?: "transparent" | "solid";
  align?: "start" | "end";
};

function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void,
) {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handler]);
}

export function AnimatedDropdown<T extends string = string>({
  items,
  value,
  onSelect,
  label,
  className,
  variant = "solid",
  align = "end",
}: AnimatedDropdownProps<T>) {
  const [isOpen, setIsOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => setIsOpen(false));

  const activeItem = items.find((item) => item.value === value) ?? items[0];
  const triggerClasses =
    variant === "transparent"
      ? "border-white/18 bg-white/10 text-white shadow-[0_10px_30px_rgba(15,23,42,0.14)] hover:bg-white/14"
      : "border-foreground bg-foreground text-white shadow-[0_14px_34px_rgba(15,23,42,0.10)] hover:bg-foreground/92";
  const panelClasses =
    variant === "transparent"
      ? "border-white/20 bg-white/14 shadow-[0_18px_40px_rgba(15,23,42,0.18)] text-white"
      : "border-border bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] text-foreground";

  return (
    <div ref={wrapperRef} className={cn("relative inline-block", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label}
        onClick={() => setIsOpen((open) => !open)}
        className={cn(
          "group inline-flex h-10 items-center gap-2 border px-3.5 text-left transition-[background-color,border-color,box-shadow] duration-200 backdrop-blur-md",
          triggerClasses,
        )}
      >
        {label ? (
          <span
            className={cn(
              "typo-eyebrow",
              variant === "transparent" ? "text-white/62" : "text-white/60",
            )}
          >
            {label}
          </span>
        ) : null}
        <span className="font-heading text-[11px] uppercase tracking-[0.18em]">
          {activeItem?.label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={cn(
            variant === "transparent" ? "text-white/70" : "text-white/72",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "absolute top-[calc(100%+0.5rem)] z-50 min-w-[180px] overflow-hidden border backdrop-blur-xl",
              align === "end" ? "right-0" : "left-0",
              panelClasses,
            )}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.03,
                  },
                },
              }}
            >
              {items.map((item) => {
                const isActive = item.value === value;

                return (
                  <motion.button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      onSelect(item.value);
                      setIsOpen(false);
                    }}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-5 border-b px-3 py-3 text-left last:border-b-0 transition-colors",
                      variant === "transparent"
                        ? "border-white/10 hover:bg-white/10"
                        : "border-border/70 hover:bg-muted/45",
                    )}
                  >
                    <span className="flex flex-col">
                      <span
                        className={cn(
                          "font-heading text-[11px] uppercase tracking-[0.18em]",
                          isActive
                            ? "text-primary"
                            : variant === "transparent"
                              ? "text-white"
                              : "text-foreground",
                        )}
                      >
                        {item.label}
                      </span>
                      {item.description ? (
                        <span
                          className={cn(
                            "font-sans text-sm leading-snug",
                            variant === "transparent"
                              ? "text-white/68"
                              : "text-muted-foreground",
                          )}
                        >
                          {item.description}
                        </span>
                      ) : null}
                    </span>
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-colors",
                        isActive
                          ? "bg-primary"
                          : variant === "transparent"
                            ? "bg-white/24"
                            : "bg-border",
                      )}
                    />
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default AnimatedDropdown;
