"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ComicText({
  children,
  className,
  style,
  fontSize = 1.5,
}) {
  if (typeof children !== "string") {
    throw new Error("children must be a string");
  }

  // THEME COLORS (Summit Optimized)
  const fillColor = "#FF2EC4";        // Vibrant Summit Pink
  const dotColor = "#FACC15";         // Summit Yellow
  const shadowGlow = "rgba(255, 46, 196, 0.9)"; // Neon Pink Glow

  return (
    <motion.div
      className={cn("text-center select-none", className)}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
        fontWeight: "900",
        WebkitTextStroke: `${fontSize * 0.30}px #000000`,
        transform: "skewX(-10deg)",
        textTransform: "uppercase",

        // ✔ Neon Glow + Sharp Outline
        filter: `
          drop-shadow(3px 3px 0px #000000) 
          drop-shadow(0px 0px 8px ${shadowGlow})
        `,

        // ✔ Pink Fill Patterned With Yellow Dots
        backgroundColor: fillColor,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
        backgroundSize: "10px 10px",

        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275],
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
}
