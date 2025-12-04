"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Perks() {
  return (
    <section
      id="perks"
      className="relative isolate overflow-hidden bg-gray-900 py-16"
    >
      <img
        alt=""
        src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 -z-20 w-full h-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px] bg-black/40"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14 text-center">
          <span
            className="py-1 px-4 bg-white/10 backdrop-blur-xl border border-white/20 
            rounded-full text-xs font-bold text-yellow-300"
          >
            EVENT PERKS
          </span>
          <TypingAnimation
            blinkCursor={true}
            pauseDelay={2000}
            loop
            className="text-2xl lg:text-4xl text-center font-bold text-pink-600 py-5"
          >
            Purpose. Prestige. Possibility.
          </TypingAnimation>
          <p className="text-md lg:text-lg font-semibold text-white max-w-md md:max-w-2xl mx-auto">
            Designed for India’s next generation of innovators — every perk
            reflects quality, comfort & impact.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
              <svg
                className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 20v-9l-4 1.125V20h4Zm0 0h8m-8 0V6.66667M16 20v-9l4 1.125V20h-4Zm0 0V6.66667M18 8l-6-4-6 4m5 1h2m-2 3h2"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-yellow-300 lg:mb-3 capitalize">
              Luxury Accomodation
            </h4>
            <p className="text-sm font-bold text-white">
              Enjoy premium comfort at Mayfair Lagoon, exclusively for our
              delegates
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
              <svg
                className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 17v2M12 5.5V10m-6 7v2m15-2v-4c0-1.6569-1.3431-3-3-3H6c-1.65685 0-3 1.3431-3 3v4h18Zm-2-7V8c0-1.65685-1.3431-3-3-3H8C6.34315 5 5 6.34315 5 8v2h14Z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-yellow-300 lg:mb-3 capitalize">
              Elite Hospitality
            </h4>
            <p className="text-sm font-bold text-white">
              All meals, refreshments & transport included — a luxury experience
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
              <svg
                className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-yellow-300 lg:mb-3 capitalize">
              Government Certification
            </h4>
            <p className="text-sm font-bold text-white">
              Official certificate endorsed by the Government of Odisha
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
              <svg
                className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-yellow-300 lg:mb-3 capitalize">
              Networking with Leaders
            </h4>
            <p className="text-sm font-bold text-white">
              Meet founders, investors, and global innovators shaping the future
              of AI
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 mt-8">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-red-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-red-600">
              <svg
                className="stroke-red-600 transition-all duration-500 group-hover:stroke-white w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-yellow-300 lg:mb-3 capitalize">
              Startup Growth Support
            </h4>
            <p className="text-sm font-bold text-white">
              Pitch your ideas, get expert feedback, and explore funding
              opportunities
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-blue-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-blue-600">
              <svg
                className="stroke-blue-600 transition-all duration-500 group-hover:stroke-white w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 18c0 1.1046-.89543 2-2 2s-2-.8954-2-2 .89543-2 2-2 2 .8954 2 2Zm0 0V6.33333L18 4v11.6667M8 10.3333 18 8m0 8c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-yellow-300 lg:mb-3 capitalize">
              Signature Cultural Night
            </h4>
            <p className="text-sm font-bold text-white">
              Experience curated cultural celebrations and immersive activities
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-lime-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-lime-600">
              <svg
                className="stroke-lime-600 transition-all duration-500 group-hover:stroke-white w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-yellow-300 lg:mb-3 capitalize">
              Recruitment Preview Access
            </h4>
            <p className="text-sm font-bold text-white">
              Early access to internship & fellowship opportunities shared by
              partners
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-sky-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-sky-600">
              <svg
                className="stroke-sky-600 transition-all duration-500 group-hover:stroke-white w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-yellow-300 lg:mb-3 capitalize">
              AI Future Readiness Kit
            </h4>
            <p className="text-sm font-bold text-white">
              A curated digital toolkit with guides, resources & premium
              templates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
