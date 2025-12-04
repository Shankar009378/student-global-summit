"use client";

import confetti from "canvas-confetti";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { NumberTicker } from "@/components/ui/number-ticker";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

const features = [
  {
    name: "Policy Labs & Ethical AI Workshops",
    desc: "Hands-on sessions on AI governance, ethics & responsible innovation.",
  },
  {
    name: "Student Innovation Showcases",
    desc: "Prototype demos, product clinics, and creative tech exhibitions.",
  },
  {
    name: "Mentorship & Scholarship Tracks",
    desc: "Meet mentors, win grants, and unlock global opportunities.",
  },
  {
    name: "Government & Industry Roundtables",
    desc: "Exclusive dialogues with policymakers, researchers & founders.",
  },
];

const stats = [
  { name: "Participating Delegates", value: "2000+" },
  { name: "No. of Days", value: "3" },
  { name: "Participating Institutions", value: "50+" },
  { name: "Scholarships & Grants", value: "₹10L+" },
];

function parseStatValue(value) {
  const prefix = value.match(/^[^\d]+/)?.[0] || ""; // symbols like ₹
  const number = value.match(/\d+/)?.[0] || null; // digits
  const suffix = value.match(/[^\d]+$/)?.[0] || ""; // L, +, D, etc.

  return { prefix, number, suffix };
}

export default function HeaderSection() {
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
    <section
      id="theme"
      className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-16"
    >
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-yellow-300 sm:text-7xl mb-8">
            SUMMIT THEME
          </h2>
          <TypingAnimation
            blinkCursor={true}
            pauseDelay={2000}
            loop
            className="mt-8 text-lg font-medium text-pretty text-pink-600 sm:text-3xl"
          >
            Governance of AI — Ethics, Policy & Student Power
          </TypingAnimation>
          <p className="mt-4 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            This Summit flips the old narrative. Celebrating Indian students not
            as cheap talent but as creators of billion $ outcomes. For 3 days it
            brings together students, founders, and innovators to explore the
            blend of culture, code and ethics shaping the future. See you there!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.name}
                className="group p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-300 transition"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-pink-600">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const { prefix, number, suffix } = parseStatValue(stat.value);

              return (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base text-gray-300">{stat.name}</dt>

                  <dd className="text-4xl font-semibold tracking-tight text-yellow-300 flex items-baseline gap-1">
                    {/* Prefix (₹ etc.) */}
                    {prefix && <span>{prefix}</span>}

                    {/* Number ticker only if a number exists */}
                    {number ? (
                      <NumberTicker
                        startValue={0}
                        value={parseInt(number)}
                        className="text-4xl font-semibold tracking-tight text-yellow-300"
                      />
                    ) : (
                      <span>{value}</span>
                    )}

                    {/* Suffix like L, D, + */}
                    {suffix && <span>{suffix}</span>}
                  </dd>
                </div>
              );
            })}
          </dl>

          <div className="mt-12 flex flex-col sm:flex-row sm:justify-center gap-4">
            <Link href="/register">
              <InteractiveHoverButton className="w-fit backdrop-blur-xl bg-white border-b border-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                Register Now
              </InteractiveHoverButton>
            </Link>

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
    </section>
  );
}
