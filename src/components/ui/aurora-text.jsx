"use client";
import React, { memo } from "react";

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#2D0A63", "#5A1E7A", "#D34FA3", "#FF74C9"],
    speed = 2,
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, 
        ${colors[0]} 0%, 
        ${colors[1]} 35%, 
        ${colors[2]} 65%, 
        ${colors[3]} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    };

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = "AuroraText";
