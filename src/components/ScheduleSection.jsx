"use client";

import { useState } from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(1);

  // Updated schedule with timings
  const scheduleData = {
    1: [
      {
        time: "08:00 AM",
        event: "Registration of Students & Delegates",
      },
      {
        time: "09:30 AM",
        event:
          "Arrival of Dignitaries and Inauguration of Yuva Swadeshi Navachar Pradarshani",
      },
      { time: "09:35 AM", event: "Dipa Prajwalan and Opening Rituals" },
      {
        time: "09:40 AM",
        event:
          "Address by Prof. Jagneshwar Dandapat, Vice Chancellor, Utkal University",
      },
      {
        time: "09:45 AM",
        event:
          "Address by Prof. Dipak Kumar Sahoo, Vice Chancellor, VSSUT, Burla",
      },
      {
        time: "09:50 AM",
        event:
          "Address by Shri Bhupendra Singh Poonia, IAS, Commissioner-cum-Secretary, Skill Development & Technical Education Department, Government of Odisha",
      },
      {
        time: "10:10 AM",
        event:
          "Address by Shri Vishal Kumar Dev, IAS, Principal Secretary, Electronics & Information Technology Department, Government of Odisha",
      },
      {
        time: "10:20 AM",
        event:
          "Address by Shri Suryabanshi Suraj, Hon'ble Minister of Higher Education, Sports & Youth Services, Odia Language, Literature & Culture, Government of Odisha",
      },
      {
        time: "10:30 AM",
        event:
          "Address by Dr. Mukesh Mahaling, Hon'ble Cabinet Minister, Electronics & Information Technology, Government of Odisha",
      },
      {
        time: "10:40 AM",
        event: "Vote of Thanks by Organizing Secretary",
      },
      {
        time: "11:00 AM",
        event:
          "Keynote Session by Prof. Hee-Cheol Kim, College of AI Convergence/Institute of Digital Anti-aging Healthcare (IDA), Inje University, Republic of Korea - AI in Healthcare: Unlocking a New Era of Possibility with Ethical Responsibility",
      },
      {
        time: "11:50 AM",
        event:
          "Keynote Session by Mr. Himansu Tripathy, Head of Engineering, Datavogue United Arab Emirates: Evolution of Generative and Agentic AI",
      },
      {
        time: "-- AM",
        event: "LUNCH BREAK",
      },
      {
        time: "02:30 PM",
        event:
          "Expert Session by Mr. Biswa Ranjan Nayak, Founder & CEO, 33crores.acom: AI in Spirituality, Culture and Heritage",
      },
      {
        time: "03:30 PM",
        event:
          "Expert talk by Dr. Satyajit Mahapatra, Professor, Department of Pharmacology, AIIMS, Guwahati: Ensuring Ethical Integrity in AI-Driven Biomedical Research and Healthcare Systems",
      },
      {
        time: "04:15 PM",
        event:
          "Invited Talk by Dr. Debi Prosad Dogra, Head, Department of CSE, IIT, Bhubaneswar: AI and Ethics: Applications in Education and Healthcare",
      },
      {
        time: "05:00 PM",
        event:
          "Invited Talk by Prof. Subrata Kumar Panda, President, FTBI, NIT Rourkela: AI Application in Startup Ecosystem – A Blessing or Curse",
      },
      {
        time: "-- PM",
        event: "BREAK",
      },
      {
        time: "06:00 PM",
        event:
          "Cultural Evening (Documentary on Odisha Culture, Varanasi Dance Group, Sugyeni Mohapatra, Rajasthani Folk Dance by Meena Sapera and group)",
      },
      {
        time: "08:00 PM",
        event: "DINNER",
      },
    ],
    2: [
      {
        time: "09:00 AM",
        event: "Assembly & Welcome",
      },
      {
        time: "09:30 AM",
        event:
          "Expert talk by Dr. Ramesh Kumar Mishra, Professor of Cognitive Science at the University of Hyderabad: Consciousness in AI - what it is and what it is not  ",
      },
      {
        time: "10:15 AM",
        event:
          "Mr. Ajit Mohanty, Head of Product Engineering, Tata Consultancy Services (TCS): The Age of Responsible Intelligence (Technology, AI, and Emerging Leaders)",
      },
      {
        time: "11:45 AM",
        event:
          "Plenary session led by Mr. Chandan Malu, Principal Technology Architect, Infosys: AI in Business, Industry, and the Future of Work",
      },
      {
        time: "-- AM",
        event: "LUNCH BREAK",
      },
      {
        time: "02:30 PM",
        event:
          "Expert talk by Mr. Rakesh Kumar Sahoo, Associate Director at Accenture: Unleashing the power of AI in Banking and Financial Industry",
      },
      {
        time: "03:25 PM",
        event:
          "Keynote Session by Mr. Santosh Kumar Choudhury, Senior Director – Software Development, Oracle, Hyderabad",
      },
      {
        time: "04:20 PM",
        event:
          "Keynote Session by Mr. Subini Kumar Rath, Head of Principal Enterprise Architects, Huawei, Dubai; Digital Trust in Telecom: Embedding Responsible AI Practices in Telecom Transformation",
      },
      {
        time: "-- PM",
        event: "BREAK",
      },
      {
        time: "06:00 PM",
        event:
          "Cultural Evening (Odishi Dance by Odisha Dance Academy, Bargad Dance Group, Drama by UU Students, Performance by Sourav Bhardwaj)",
      },
      {
        time: "08:00 PM",
        event: "DINNER",
      },
    ],
    3: [
      {
        time: "09:00 AM",
        event: "Assembly & Welcome",
      },
      {
        time: "09:05 AM",
        event: "Voices of the Future (Final Round)",
      },
      {
        time: "10:00 AM",
        event:
          "Plenary Session: Academic Leadership Dialogue on Ethical Governance of AI",
      },
      {
        time: "11:30 AM",
        event:
          "Plenary Session: Industry Leadership Dialogue on Ethical Governance of AI",
      },
      {
        time: "-- PM",
        event: "LUNCH BREAK",
      },
      {
        time: "03:00 PM",
        event: "Opening Rituals",
      },
      {
        time: "03:05 PM",
        event: "Address by Organizing Secretary",
      },
      {
        time: "03:15 PM",
        event:
          "Address by Prof. Dipak Kumar Sahoo, Vice Chancellor, VSSUT, Burla",
      },
      {
        time: "03:20 PM",
        event:
          "Address by Shri Aravind Agrawal, IAS, Commissioner-cum-Secretary, Higher Education Department, Government of Odisha",
      },
      {
        time: "-- PM",
        event: "Winner announcement and prize distribution",
      },
      {
        time: "03:35 PM",
        event: "Vote of Thanks by Organizing Secretary",
      },
    ],
  };

  return (
    <section
      id="schedule"
      className="relative bg-black text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 via-black to-black" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADING */}
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={0.8}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-yellow-300"
        >
          THE SUMMIT SCHEDULE
        </TextAnimate>

        <p className="mt-4 text-center text-white/90 text-sm sm:text-base max-w-xl mx-auto">
          Three transformative days of innovation, leadership & culture.
        </p>

        {/* DAY TABS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`w-full rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer
                ${
                  activeDay === day
                    ? "bg-yellow-300 text-black font-bold shadow-lg"
                    : "bg-white/5 text-white border border-white/20 hover:bg-white/10"
                }`}
            >
              <div className="flex justify-between sm:flex-col sm:items-center sm:gap-1">
                <span>Day {day}</span>
                <span className="text-xs sm:text-sm opacity-80">
                  {day === 1 ? "18 Dec" : day === 2 ? "19 Dec" : "20 Dec"} 2025
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* SCHEDULE LIST */}
        <div className="mt-12 bg-white/5 border border-white/20 rounded-2xl p-4 sm:p-8 backdrop-blur">
          <div className="space-y-5">
            {scheduleData[activeDay].map((item, i) => {
              const isBreak =
                item.event.includes("BREAK") || item.event.includes("DINNER");

              return (
                <div
                  key={i}
                  className={`rounded-xl p-4 transition
                    ${
                      isBreak
                        ? "bg-yellow-300/10 border border-yellow-300/30"
                        : "bg-black/30 hover:bg-black/40"
                    }`}
                >
                  {/* MOBILE LAYOUT */}
                  <div className="sm:hidden">
                    <p className="text-xs font-bold text-pink-400 mb-1">
                      {item.time}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        isBreak ? "text-yellow-300" : "text-white"
                      }`}
                    >
                      {item.event}
                    </p>
                  </div>

                  {/* DESKTOP LAYOUT */}
                  <div className="hidden sm:flex items-start gap-6">
                    <div className="min-w-[90px] text-right">
                      <p className="text-sm font-bold text-pink-400">
                        {item.time}
                      </p>
                    </div>

                    <div className="relative">
                      <span className="block w-3 h-3 rounded-full bg-yellow-300 mt-1" />
                      <span className="absolute top-5 left-[5px] h-full w-[1px] bg-white/20" />
                    </div>

                    <p
                      className={`text-sm sm:text-base font-medium leading-relaxed ${
                        isBreak ? "text-yellow-300" : "text-white"
                      }`}
                    >
                      {item.event}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link href="/register">
            <InteractiveHoverButton className="px-6 py-3 text-sm font-semibold bg-white">
              Register Now
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
