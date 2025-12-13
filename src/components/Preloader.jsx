"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import PreLogo from "@/assets/images/prelogo.png";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1800); // 1.8 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center 
        bg-black transition-opacity duration-700 
        ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="animate-logoIntro">
        <Image
          src={PreLogo}
          alt="Student Global Summit Logo"
          className="w-40 h-auto"
          priority
        />
      </div>
    </div>
  );
}
