"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2500); // video duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center 
        bg-black transition-opacity duration-700 
        ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <video
        autoPlay
        muted
        playsInline
        className="w-auto h-auto animate-logoIntro"
      >
        <source src="/videos/preloader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
