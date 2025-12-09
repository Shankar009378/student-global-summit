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
        event:
          "Address by Dr. Mukesh Mahaling, Hon'ble Cabinet Minister, Electronics & Information Technology, Government of Odisha",
      },
      {
        time: "10:10 AM",
        event:
          "Address by Shri Suryabanshi Suraj, Hon'ble Minister of Higher Education, Sports & Youth Services, Odia Language, Literature & Culture, Government of Odisha",
      },
      {
        time: "10:20 AM",
        event: "Address by Chief Guest (To be finalized)",
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
        time: "11:45 AM",
        event:
          "Keynote Session by Subini Kumar Rath, Head of Principal Enterprise Architects, Huawei, Dubai; AI in autonomous decision-making for enterprises",
      },
      {
        time: "-- AM",
        event:
          "Lunch Break",
      },
      {
        time: "02:30 PM",
        event:
          "Plenary session led by Mr. Parichay Pattnaik, Regional Head - Academic Alliances at TCS Bhubaneswar",
      },
      {
        time: "03:30 PM",
        event:
          "Expert talk by Dr. Satyajit Mahapatra, Professor, Department of Pharmacology, AIIMS, Guwahati",
      },
      {
        time: "04:15 PM",
        event:
          "Invited Talk by Dr. Debi Prosad Dogra, Head, Department of Computer Science and Engineering, IIT, Bhubaneswar",
      },
      {
        time: "05:00 PM",
        event:
          "Invited Talk by Prof. Subrata Kumar Panda, President, FTBI, NIT Rourkela",
      },
      {
        time: "-- PM",
        event:
          "Break",
      },
      {
        time: "06:00 PM",
        event:
          "Cultural Evening (Documentary on Odisha Culture, Varanasi Dance Group, Sugyeni Mohapatra)",
      },
      {
        time: "08:00 PM",
        event:
          "Dinner",
      },
    ],
    2: [
      {
        time: "09:30 AM",
        event: "Assembly & Welcome",
      },
      {
        time: "10:00 AM",
        event: "Keynote Session by Mr. Himansu Tripathy, Designs Data Solutions, Dubai, United Arab Emirates",
      },
      {
        time: "10:45 AM",
        event: "Keynote Session by Mr. Harisaran Dash, AI/ML Expert, California, United States",
      },
      {
        time: "11:30 AM",
        event: "Plenary session led by Mr. Chandan Malu, Principal Technology Architect, Infosys",
      },
      {
        time: "-- AM",
        event: "Lunch Break",
      },
      {
        time: "02:30 PM",
        event: "Dr. Ramesh Kumar Mishra, Professor of cognitive science at the University of Hyderabad",
      },
      {
        time: "03:15 PM",
        event: "Expert talk by Mr. Rakesh Sahoo, Application Development Team Lead at Accenture ",
      },
      {
        time: "04:00 PM",
        event: "Expert talk by Dr. Padmalochan Bera, IIT, Bhubaneswar",
      },
      {
        time: "-- PM",
        event: "Plenary session by Industry Experts",
      },
      {
        time: "-- PM",
        event: "Break",
      },
      {
        time: "06:30 PM",
        event: "Cultural Evening (Odishi Dance by Odisha Dance Academy, Sourav Bhardwaj/Krisna Beura)",
      },
      {
        time: "08:00 PM",
        event: "Dinner",
      },
    ],
    3: [
      {
        time: "09:30 AM",
        event: "Assembly & Welcome",
      },
      { time: "10:00 AM", event: "Workshop on AI in day-to-day life: Collaboration with Industry" },
      {
        time: "12:00 PM",
        event: "Voices of the Future",
      },
      {
        time: "-- PM",
        event: "Lunch Break",
      },
      {
        time: "02:30 PM",
        event: "Panel discussion by Vice Chancellors of different Universities",
      },
      {
        time: "03:30 PM",
        event: "Valedictory Session ",
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
