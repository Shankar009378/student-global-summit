"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TextAnimate } from "@/components/ui/text-animate";

const faqs = [
  {
    q: "Who is eligible to attend the Student Global Summit 2025?",
    a: "Students, creators, and young professionals aged 16–30 who are passionate about technology, innovation, and building an ethical AI-driven future for India and beyond.",
  },
  {
    q: "What does the registration fee include?",
    a: "Your pass grants access to all keynotes, workshops, and showcase sessions, along with meals, cultural nights, networking events, and an official joint certificate from the Government of Odisha and VSSUT.",
  },
  {
    q: "Do I need prior technical or AI knowledge to participate?",
    a: "Not at all. The summit welcomes participants from all disciplines — law, design, business, policy, social sciences, and the arts.",
  },
  {
    q: "Will there be online participation or live-stream access?",
    a: "Yes. The entire summit will be streamed live with interactive Q&A for a fully immersive virtual experience.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-primary text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h6 className="text-lg text-white font-medium text-center mb-2">
          FAQs
        </h6>

        <TextAnimate
          animation="slideUp"
          by="character"
          duration={0.9}
          className="text-2xl lg:text-4xl font-bold text-center text-yellow-300"
        >
          Frequently Asked Questions
        </TextAnimate>

        <div className="mt-10 space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="
                group
                rounded-2xl p-[2px]
                bg-primary hover:bg-gradient-to-r from-[#2D0A63] via-[#5A1E7A] to-[#D34FA3]
                transition border border-white hover:border-yellow-300
              "
            >
              <div
                className="
                  rounded-2xl p-5 
                  bg-white/10 backdrop-blur-md 
                  group-hover:bg-white/15 
                  transition
                "
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left cursor-pointer"
                >
                  <span className="text-lg font-medium group-hover:text-yellow-300 transition">
                    {item.q}
                  </span>

                  {active === index ? (
                    <MinusIcon className="w-6 h-6 text-yellow-300 transition-transform duration-300 rotate-180" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-white transition-transform duration-300" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    active === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-white text-sm leading-6">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
