import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  const fontStyle: React.CSSProperties = {
    fontFamily: "DIN Alternate, Barlow Condensed, sans-serif",
    fontWeight: 700,
    fontSize: 30,
    letterSpacing: "0.05em",
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-default", className)}
    >
      <defs>
        <linearGradient id="sbTextGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="40%" stopColor="#00B07C" />
              <stop offset="70%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="#00B07C" />
            </>
          )}
        </linearGradient>

        <radialGradient
          id="sbRevealMask"
          gradientUnits="userSpaceOnUse"
          r="25%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id="sbTextMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#sbRevealMask)" />
        </mask>
      </defs>

      {/* Subtle white outline — fades in on hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        style={{
          ...fontStyle,
          fill: "transparent",
          stroke: "rgba(255,255,255,0.06)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        {text}
      </text>

      {/* Draw-on stroke animation (on mount) */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        style={{
          ...fontStyle,
          fill: "transparent",
          stroke: "rgba(235,215,35,0.25)",
        }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Gradient reveal on hover via mask */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        stroke="url(#sbTextGradient)"
        mask="url(#sbTextMask)"
        style={{
          ...fontStyle,
          fill: "transparent",
        }}
      >
        {text}
      </text>
    </svg>
  );
};
