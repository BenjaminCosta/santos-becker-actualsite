import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  distance?: number;
}

// Shared easing — expo-out feel, fast start, crisp landing
const EASE = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 18,
}: FadeInProps) {
  const offsets: Record<string, { x: number; y: number }> = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { x: distance,  y: 0 },
    right: { x: -distance, y: 0 },
    none:  { x: 0,         y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered wrapper — animates children in sequence
interface FadeInGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeInGroup({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
  direction = "up",
}: FadeInGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Item to use inside FadeInGroup
interface FadeInItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function FadeInItem({
  children,
  className = "",
  direction = "up",
  distance = 18,
}: FadeInItemProps) {
  const offsets: Record<string, { x: number; y: number }> = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { x: distance,  y: 0 },
    right: { x: -distance, y: 0 },
    none:  { x: 0,         y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, ...offsets[direction] },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.65, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
