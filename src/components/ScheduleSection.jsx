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
        time: "09:50 AM",
        event:
          "Address by Prof. Dipak Kumar Sahoo, Vice Chancellor, VSSUT, Burla",
      },
      {
        time: "10:00 AM",
        event: "Address by the Guest of Honour",
      },
      {
        time: "10:10 AM",
        event: "Address by the Guest of Honour",
      },
      {
        time: "10:20 AM",
        event: "Address by Chief Guest",
      },
      {
        time: "10:45 AM",
        event: "Vote of Thanks by Organizing Secretary",
      },
      {
        time: "10:45 AM",
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
          "Keynote Session by Mr. Harisaran Dash, AI/ML Expert, California, United States: Empowering Enterprise with Agentic AI",
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
          "Keynote Session by Mr. Subini Kumar Rath, Head of Principal Enterprise Architects, Huawei, Dubai; Digital Trust in Telecom: Embedding Responsible AI Practices in Telecom Transformation",
      },
      {
        time: "04:20 PM",
        event:
          "Ms. Purabee Purnasha Mishra, COO, STPI Bhubaneswar: India’s innovation narrative—from grassroots to global",
      },
      {
        time: "-- PM",
        event: "Plenary session by Industry Experts",
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
        event: "Plenary Session: Academic Leadership Dialogue on Ethical Governance of AI",
      },
      {
        time: "11:30 AM",
        event: "Plenary Session: Industry Leadership Dialogue on Ethical Governance of AI",
      },
      {
        time: "-- PM",
        event: "LUNCH BREAK",
      },
      {
        time: "03:00 PM",
        event: "Valedictory Session followed by performance of VSSUT and UU students",
      },
    ],
  };

  return (
    <section
      id="schedule"
      className="bg-black text-white py-16 px-6 relative overflow-hidden"
    >
      {/* Decorative gradient glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 via-black to-black"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={0.9}
          className="text-3xl font-extrabold text-center text-yellow-300 drop-shadow-lg"
        >
          THE SUMMIT SCHEDULE
        </TextAnimate>

        <p className="max-w-2xl mx-auto mt-4 text-center text-white font-semibold">
          Three transformative days of innovation, culture, leadership, and
          unstoppable energy.
        </p>

        {/* TAB BUTTONS */}
        <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3">
          {/* DAY 1 TAB */}
          <div
            onClick={() => setActiveDay(1)}
            className={`group p-4 border rounded-xl cursor-pointer transition-all duration-300
              ${
                activeDay === 1
                  ? "bg-yellow-300 text-black border-yellow-400 shadow-[0_0_25px_rgba(255,230,0,0.7)]"
                  : "bg-white/5 border-white/20 hover:bg-white/10"
              }`}
          >
            <div className="flex justify-between items-center">
              <h2
                className={`text-xl font-bold ${
                  activeDay === 1 ? "text-black" : "text-yellow-300"
                }`}
              >
                Day 1
              </h2>
              <h2 className="text-xl font-bold">18 Dec 2025</h2>
            </div>
          </div>

          {/* DAY 2 TAB */}
          <div
            onClick={() => setActiveDay(2)}
            className={`group p-4 border rounded-xl cursor-pointer transition-all duration-300
              ${
                activeDay === 2
                  ? "bg-pink-600 text-white border-pink-500 shadow-[0_0_25px_rgba(255,0,100,0.7)]"
                  : "bg-white/5 border-white/20 hover:bg-white/10"
              }`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Day 2</h2>
              <h2 className="text-xl font-bold">19 Dec 2025</h2>
            </div>
          </div>

          {/* DAY 3 TAB */}
          <div
            onClick={() => setActiveDay(3)}
            className={`group p-4 border rounded-xl cursor-pointer transition-all duration-300
              ${
                activeDay === 3
                  ? "bg-yellow-300 text-black border-yellow-400 shadow-[0_0_25px_rgba(255,230,0,0.7)]"
                  : "bg-white/5 border-white/20 hover:bg-white/10"
              }`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Day 3</h2>
              <h2 className="text-xl font-bold">20 Dec 2025</h2>
            </div>
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="p-8 mt-12 space-y-6 bg-white/5 border border-white/20 rounded-xl backdrop-blur">
          {scheduleData[activeDay].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start text-gray-300"
            >
              <p className="text-lg w-3/4 text-left">{item.event}</p>
              <p className="text-sm font-semibold text-yellow-300">
                {item.time}
              </p>
            </div>
          ))}
        </div>

        {/* Register Button */}
        <div className="flex justify-center mt-10">
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
