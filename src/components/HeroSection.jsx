"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { HyperText } from "@/components/ui/hyper-text";
import Link from "next/link";
import { ComicText } from "@/components/ui/comic-text";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

const navigation = [
  { name: "Theme", href: "#theme" },
  { name: "Speakers", href: "#speakers" },
  { name: "Perks", href: "#perks" },
  { name: "Schedule", href: "#schedule" },
  { name: "FAQ", href: "#faq" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Auto-open popup when page loads
  useEffect(() => {
    setShowPopup(true);

    // Auto-close after 6 seconds
    const timer = setTimeout(() => setShowPopup(false), 7000);

    return () => clearTimeout(timer);
  }, []);

  const triggerSpeakerScroll = () => {
    // 1️⃣ Trigger Confetti
    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();

    // 2️⃣ Smooth scroll to speakers section
    document.getElementById("speakers")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* AUTOMATIC LIMITED SLOT POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn">
          {/* SHINE BORDER WRAPPER */}
          <div className="relative w-[90%] max-w-lg rounded-3xl overflow-hidden">
            <BorderBeam
              borderWidth={3}
              duration={10}
              shineColor={[
                "rgba(45, 0, 90, 0.9)", // Deep purple
                "rgba(20, 20, 60, 0.9)", // Midnight navy
                "rgba(80, 0, 120, 0.8)", // Dark lavender
                "rgba(0, 60, 120, 0.8)", // Deep electric blue
              ]}
            />

            {/* POPUP CONTENT */}
            <div
              className="relative bg-black backdrop-blur-2xl 
        border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.45)] 
        rounded-3xl p-10 text-center"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white text-2xl cursor-pointer"
              >
                ✕
              </button>

              <RainbowButton
                className="text-pink-600 rounded-2xl mb-4"
                variant="outline"
              >
                Exclusive Announcement{" "}
              </RainbowButton>

              <div className="flex justify-center items-center gap-2">
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  duration={1}
                  className="text-center text-xl font-semibold text-red-600"
                >
                  LIMITED SLOTS OPEN
                </TextAnimate>

                {/* Blinking Siren Icon */}
                <span className="text-2xl animate-pulse drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">
                  🚨
                </span>
              </div>

              {/* YUVA SWADESHI CLOSED NOTICE */}
              <div
                className="mt-4 mx-auto max-w-md rounded-xl border border-red-500/40 
                bg-red-900/20 px-4 py-3 text-center"
              >
                <p className="text-red-400 text-sm font-semibold tracking-wide">
                  🔒 Yuva Swadeshi Navachar Pradarshini
                </p>
                <p className="text-white text-xs mt-1">
                  Registration for Startup Exhibition is{" "}
                  <span className="font-bold">CLOSED</span>
                </p>
              </div>

              {/* SUBTITLE */}
              <p className="text-white/90 mt-4 text-lg font-semibold">
                🏨 Only{" "}
                <span className="text-yellow-300 font-extrabold">
                  300 Premium Accommodation Passes
                </span>{" "}
                Available
              </p>

              {/* PREMIUM LINE */}
              <p className="text-pink-600 mt-3 text-sm tracking-wider font-medium uppercase">
                Priority Access • VIP Networking • Elite Student Delegation
              </p>

              {/* REGISTER BUTTON */}
              <Link href="/register">
                <InteractiveHoverButton className="mt-4 flex-none rounded-full bg-white p-2 px-6 text-sm font-semibold text-white shadow-xs inset-ring-white/20 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Register Now
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </div>
      )}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/summit-bg.mp4" type="video/mp4" />
      </video>

      {/* SOFT BLUR OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10 -z-10"></div>

      <header className="sticky top-0 z-50">
        <nav
          aria-label="Global"
          className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-between p-4 lg:px-6"
        >
          <div className="flex items-center gap-3 lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 items-center gap-2 flex">
              <Image
                src={Logo}
                alt="Students Global Summit Logo"
                className="h-8 w-auto"
              />
              <span className="text-white font-bold tracking-wider">
                Students Global Summit
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-bold text-black hover:text-pink-600"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/register">
              <InteractiveHoverButton>Register Now</InteractiveHoverButton>
            </Link>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 items-center gap-2 flex">
                <Image
                  src={Logo}
                  alt="Students Global Summit Logo"
                  className="h-8 w-auto"
                />
                <span className="text-white font-bold tracking-wider">
                  Students Global Summit
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-black/40">
                {/* <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold text-black hover:text-pink-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div> */}
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        const section = document.querySelector(item.href);

                        // Close menu first
                        setMobileMenuOpen(false);

                        // Smooth scroll to section
                        setTimeout(() => {
                          if (section) {
                            section.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }, 300); // small delay for animation
                      }}
                      className="-mx-3 w-full text-left block rounded-lg px-3 py-2 text-base/7 font-bold text-white hover:text-pink-600"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                <div className="py-6">
                  <Link href="/register">
                    <InteractiveHoverButton className="border border-white">
                      Register Now
                    </InteractiveHoverButton>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 lg:pt-10 pt-8 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 sm:py-20 lg:py-8">
          <div className="mb-8">
            <ComicText className="text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,200,0.7)]">
              100% FREE REGISTRATION
            </ComicText>
          </div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6">
              <RainbowButton
                className="text-pink-600 rounded-2xl"
                variant="outline"
              >
                DEC 18–20, 2025 • UTKAL UNIVERSITY • BHUBANESWAR, INDIA.{" "}
              </RainbowButton>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-7xl">
              STUDENTS <AuroraText>GLOBAL</AuroraText> SUMMIT 2025
            </h1>
            {/* <TextAnimate
              animation="slideUp"
              by="word"
              duration={0.6}
              className="mt-6 text-xl font-semibold text-yellow-300 sm:text-2xl"
            >
              INDIA'S PREMIER STUDENT-LED SUMMIT ON AI GOVERNANCE & ETHICS
            </TextAnimate> */}

            <HyperText
              className="mt-6 text-lg font-bold text-yellow-300 sm:text-2xl"
              duration={1200}
              delay={500}
            >
              GOVERNANCE OF AI & IT'S ETHICS
            </HyperText>

            <TextAnimate
              animation="slideUp"
              by="word"
              delay={0.2}
              duration={0.6}
              className="mt-4 text-md  text-white sm:text-xl"
            >
              Jointly Organized By Veer Surendra Sai University of Technology &
              Utkal University, Odisha • Supported By Higher Education
              Department • Government of Odisha
            </TextAnimate>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 gap-x-6 w-full px-4">
              <Link href="/register">
                <InteractiveHoverButton className="backdrop-blur-xl bg-white border-b border-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  Register Now
                </InteractiveHoverButton>
              </Link>
              {/* <button
                onClick={() => {
                  const theme = document.querySelector("#theme");
                  theme?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-md font-semibold text-yellow-300 hover:text-yellow-400 cursor-pointer"
              >
                Learn more →
              </button> */}

              <a href="#speakers">
                <InteractiveHoverButton
                  onClick={triggerSpeakerScroll}
                  className="backdrop-blur-xl bg-white border-b border-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  See Speakers
                </InteractiveHoverButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
