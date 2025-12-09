"use client";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";
import { ComicText } from "@/components/ui/comic-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function RewardsSection() {
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
            government-backed recognition for your brilliance.
          </p>

          <div className="mb-3 mt-4">
            <ComicText className="text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,200,0.7)]">
              100% FREE REGISTRATION
            </ComicText>
          </div>
        </div>

        {/* Prize Pool Block */}
        <div className="mt-6 flex justify-center">
          <div
            className="px-6 py-3 rounded-xl 
               bg-white/10 border border-yellow-300/40 
               shadow-[0_0_20px_rgba(255,215,0,0.25)]
               backdrop-blur-xl
               animate-pulse-slow
               text-center select-none"
          >
            <p
              className="text-xl font-extrabold 
                 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 
                 bg-clip-text text-transparent 
                 drop-shadow-[0_0_10px_rgba(255,230,0,0.5)]"
            >
              💰 TOTAL PRIZE POOL: ₹1,00,000+
            </p>

            <p className="text-sm text-gray-200 mt-1">
              Cash prizes • Recognition • Publication Opportunities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {/* CARD 1 */}
          <Link href="/register">
            <div
              className="group transform transition-all duration-500 
                       hover:scale-[1.03] hover:-translate-y-2 
                       hover:rotate-[1deg] 
                       hover:shadow-yellow-300/30 relative"
            >
              <img
                className="relative z-10 object-cover w-full rounded-md h-96 
                         transition-all duration-500 group-hover:brightness-110 
                         group-hover:contrast-125 border hover:border-yellow-300"
                src="https://images.unsplash.com/photo-1758426637769-a00c1edbbcf8?w=900&auto=format&fit=crop&q=60"
                alt="Yuva Swadeshi Navachar Pardarshini"
              />

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-md bg-yellow-300/20 
                         blur-xl opacity-0 group-hover:opacity-100 
                         transition duration-500 -z-10"
              ></div>

              <div
                className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-primary 
                            border border-white rounded-md shadow 
                            transition-all duration-500 
                            group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] 
                            group-hover:border-yellow-300"
              >
                <span
                  className="font-bold text-yellow-300 hover:underline dark:text-white md:text-xl hover:text-white"
                >
                  Yuva Swadeshi Navachar Pardarshini
                </span>

                <p className="mt-3 font-bold text-sm text-pink-600">
                  Showcase your breakthrough AI, SaaS, and tech innovations to
                  industry leaders, investors, and officials. Gain unmatched
                  visibility, mentorship, and opportunities to elevate your
                  work.
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  18 December 2025
                </p>
              </div>
            </div>
          </Link>

          {/* CARD 2 */}
          <Link href="/register">
            <div
              className="group transform transition-all duration-500 
                       hover:scale-[1.03] hover:-translate-y-2 hover:rotate-[-1deg] 
                       hover:shadow-yellow-300/30 relative hover:border-yellow-300"
            >
              <img
                className="relative z-10 object-cover w-full rounded-md h-96 
                         transition-all duration-500 group-hover:brightness-110 
                         group-hover:contrast-125 border hover:border-yellow-300"
                src="https://images.unsplash.com/photo-1691242716282-7e3ef5e93c68?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGViYXRlJTIwcm91bmQlMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-md bg-yellow-300/20 
                         blur-xl opacity-0 group-hover:opacity-100 
                         transition duration-500 -z-10"
              ></div>

              <div
                className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-primary 
                            border border-white rounded-md shadow 
                            transition-all duration-500 
                            group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] 
                            group-hover:border-yellow-300"
              >
                <span
                  className="font-bold text-yellow-300 hover:underline md:text-xl hover:text-white"
                >
                  Voices of Future, The Global Policy Nexus
                </span>

                <p className="mt-3 text-sm text-pink-600 font-bold">
                  Step into the role of global leaders as you debate and design
                  AI governance policies. Top proposals will be featured in the
                  summit magazine and presented to officials.
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  20 December 2025
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
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
