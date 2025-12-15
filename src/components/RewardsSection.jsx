"use client";

import { useState } from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";
import { ComicText } from "@/components/ui/comic-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function RewardsSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const closedEvents = ["startup"]; // "startup" = Yuva Swadeshi Navachar Pradarshani

  // Event Guidelines
  const guidelines = {
    startup: {
      title: "Yuva Swadeshi Navachar Pradarshani – Event Guidelines",
      desc: "A national-level innovation platform under SGSUMMIT 2025 for the Amrit Peedhi.",
      points: [
        "National-level student innovation platform under SGSUMMIT 2025 for Amrit Peedhi.",
        "Participation through a structured ‘Call for Paper’ submission.",
        "Ideas must be submitted as a formal article/paper as per the official template (link).",
        "Submissions must be original and unpublished.",
        "Papers will be reviewed by academicians and industry experts.",
        "Only selected papers will be approved for publication.",
        "Selected papers will be assigned a DOI (Digital Object Identifier).",
        "All selected participants will receive Copyright Grant Approval from IP India (Government of India).",
        "Selected works will be published in a Special Issue of Utkal University Journal of Computing & Communications (UUJCC).",
        "Intellectual ownership remains with the author(s).",
        "Organiser’s and review committee’s decisions will be final and binding.",
      ],
      highlight: [
        "Academic recognition for your original idea.",
        "Government-approved intellectual protection.",
        "Peer-reviewed journal publication.",
        "Strong foundation for research, innovation, and future opportunities.",
      ],
      footer:
        "SGSUMMIT 2025 — Where student ideas move beyond showcase to launch, backed by our support.",
      date: "18 December 2025",
    },

    policy: {
      title: "Voices of Future – The Global Policy Nexus (Event Guidelines)",
      desc: "A national-level policy drafting & debate platform under SGSUMMIT 2025 where young minds shape the future of AI governance.",
      points: [
        "Participants must submit a structured Policy Brief adhering to the official guidelines & format (link).",
        "Policy briefs should address real-world challenges in AI ethics, global governance, data protection, or socio-economic impact.",
        "Submissions must be original, analytical, and unpublished.",
        "Policy drafts will be reviewed by academicians, domain experts, and senior policymakers.",
        "Only shortlisted policy briefs will move to the final presentation round.",
        "Shortlisted participants will present their policy recommendations before an expert panel during the summit.",
        "Top policy briefs will be published in the official Summit Policy Compendium (Digital Publication).",
        "Outstanding recommendations may be forwarded to associated governmental and institutional bodies for consideration.",
        "Intellectual ownership of the policy brief remains with the author(s).",
        "Organiser’s and review committee’s decisions will be final and binding.",
      ],
      highlight: [
        "Gain national-level recognition for your policy insights.",
        "Showcase your work to policymakers, researchers, and thought leaders.",
        "Build a strong foundation for careers in public policy, governance, and diplomacy.",
        "Opportunity for your ideas to contribute to real-world policy frameworks.",
      ],
      footer:
        "SGSUMMIT 2025 — Empowering youth to influence tomorrow’s governance through informed policymaking.",
      date: "20 December 2025",
    },
  };

  // Open Modal Handler
  const handleOpenModal = (eventType) => {
    setSelectedEvent(eventType);
    setOpenModal(true);
  };

  return (
    <section id="rewards" className="bg-primary dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={0.9}
            className="text-2xl font-bold text-yellow-300 capitalize lg:text-3xl dark:text-white"
          >
            WIN BIG REWARDS
          </TextAnimate>

          <p className="max-w-lg mx-auto text-xs lg:text-lg mt-4 text-white font-semibold">
            Your ideas have value. Earn rewards, visibility, and
            government-backed recognition.
          </p>

          <div className="mb-3 mt-4">
            <ComicText className="text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,200,0.7)]">
              100% FREE REGISTRATION
            </ComicText>
          </div>
        </div>

        {/* Prize Pool */}
        <div className="mt-6 flex justify-center">
          <div className="px-6 py-3 rounded-xl bg-white/10 border border-yellow-300/40 shadow-[0_0_20px_rgba(255,215,0,0.25)] backdrop-blur-xl text-center">
            <p className="text-xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,230,0,0.5)]">
              💰 TOTAL PRIZE POOL: ₹1,00,000+
            </p>
            <p className="text-sm text-gray-200 mt-1">
              Cash prizes • Recognition • Publication Opportunities
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {/* CARD 1 - STARTUP */}
          <div
            onClick={() => {
              if (!closedEvents.includes("startup")) handleOpenModal("startup");
            }}
            className={`relative group transform transition-all duration-500 
    ${
      closedEvents.includes("startup")
        ? "cursor-not-allowed opacity-50"
        : "cursor-pointer hover:scale-[1.03] hover:-translate-y-2 hover:rotate-[1deg]"
    }`}
          >
            {closedEvents.includes("startup") && (
              <div className="absolute top-3 left-3 z-30 bg-red-600 px-3 py-1 rounded-md text-white text-xs font-bold shadow-md">
                REGISTRATION CLOSED
              </div>
            )}

            <img
              src="https://images.unsplash.com/photo-1758426637769-a00c1edbbcf8?w=900&auto=format&fit=crop&q=60"
              className="relative z-10 object-cover w-full rounded-md h-96 border group-hover:border-yellow-300"
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-primary border border-white rounded-md shadow group-hover:border-yellow-300">
              <span className="font-bold text-yellow-300 md:text-xl">
                Yuva Swadeshi Navachar Pardarshini
              </span>

              <p className="mt-3 font-bold text-sm text-pink-600">
                Showcase your breakthrough AI, SaaS, and tech innovations to
                industry leaders, investors, and officials.
              </p>

              <p className="mt-3 text-sm font-semibold text-white">
                18 December 2025
              </p>
            </div>
          </div>

          {/* CARD 2 - POLICY */}
          <div
            onClick={() => handleOpenModal("policy")}
            className="cursor-pointer group transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:rotate-[-1deg]"
          >
            <img
              src="https://images.unsplash.com/photo-1691242716282-7e3ef5e93c68?w=900&auto=format&fit=crop&q=60"
              className="relative z-10 object-cover w-full rounded-md h-96 border group-hover:border-yellow-300"
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-primary border border-white rounded-md shadow group-hover:border-yellow-300">
              <span className="font-bold text-yellow-300 md:text-xl">
                Voices of Future, The Global Policy Nexus
              </span>

              <p className="mt-3 text-sm text-pink-600 font-bold">
                Debate and design AI governance policies. Top proposals will be
                published & presented to officials.
              </p>

              <p className="mt-3 text-sm font-semibold text-white">
                20 December 2025
              </p>
            </div>
          </div>
        </div>

        {/* Modal */}
        {openModal &&
          selectedEvent &&
          !closedEvents.includes(selectedEvent) && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4 sm:p-6">
              {/* Responsive Modal Box */}
              <div
                className="bg-primary border border-white/30 rounded-xl w-full 
                    max-w-md sm:max-w-lg md:max-w-xl 
                    max-h-[90vh] overflow-y-auto 
                    p-6 sm:p-8 shadow-xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setOpenModal(false)}
                  className="absolute top-3 right-3 text-white cursor-pointer text-2xl font-bold hover:text-red-400 transition-all duration-200"
                >
                  ✖
                </button>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-yellow-300">
                  {guidelines[selectedEvent].title}
                </h2>

                {/* Description */}
                <p className="text-white mt-2 text-sm sm:text-base">
                  {guidelines[selectedEvent].desc}
                </p>

                {/* Main Guidelines */}
                <ul className="mt-4 text-white space-y-2 text-sm sm:text-base leading-relaxed">
                  {guidelines[selectedEvent].points.map((pt, index) => (
                    <li key={index}>• {pt}</li>
                  ))}
                </ul>

                {/* Why Participate Section */}
                {guidelines[selectedEvent].highlight && (
                  <>
                    <hr className="my-4 border-white/20" />

                    <h3 className="text-lg font-semibold text-yellow-300">
                      Why Participate
                    </h3>

                    <ul className="mt-2 text-white space-y-2 text-sm sm:text-base leading-relaxed">
                      {guidelines[selectedEvent].highlight.map((pt, i) => (
                        <li key={i}>• {pt}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Footer */}
                {guidelines[selectedEvent].footer && (
                  <p className="mt-4 text-pink-400 font-semibold text-sm sm:text-base">
                    {guidelines[selectedEvent].footer}
                  </p>
                )}

                {/* Date */}
                <p className="text-pink-500 font-bold mt-4 text-sm sm:text-base">
                  Event Date: {guidelines[selectedEvent].date}
                </p>

                {/* Register Button */}
                <div className="mt-6 flex justify-center">
                  <Link href={`/register`}>
                    <InteractiveHoverButton className="px-6 py-3 text-sm font-semibold bg-white">
                      Proceed to Registration
                    </InteractiveHoverButton>
                  </Link>
                </div>
              </div>
            </div>
          )}

        {/* Bottom Button */}
        <div className="mt-10 flex justify-center gap-5">
          <Link href="/register">
            <InteractiveHoverButton className="px-6 py-3 text-sm font-semibold bg-white">
              Register Now
            </InteractiveHoverButton>
          </Link>

          <a href="/callforpaper.pdf" download>
            <InteractiveHoverButton className="px-6 py-3 text-sm font-semibold bg-white">
              Call For Paper
            </InteractiveHoverButton>
          </a>
        </div>
      </div>
    </section>
  );
}
