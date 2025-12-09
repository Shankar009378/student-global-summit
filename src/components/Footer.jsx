import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { LightRays } from "@/components/ui/light-rays";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-primary py-14 border-t border-white/10 backdrop-blur-xl">
      {/* Background Gradient Glow (same as NewsletterSection) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl opacity-40"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-yellow-300/40 to-pink-500/40"
        />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="#" className="-m-1.5 p-1.5 items-center gap-2 flex">
            <Image
              src={Logo}
              alt="Student Global Summit Logo"
              className="h-10 w-auto"
            />
            <span className="text-white font-bold tracking-wider text-lg">
              Student Global Summit
            </span>
          </a>

          {/* Subtitle */}
          <p className="max-w-lg mx-auto mt-4 text-yellow-300 font-medium">
            Empowering students, creators, and innovators to shape the future of
            Ethical & Responsible AI.
          </p>

          {/* Buttons */}
          <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center gap-5">
            <a href="/brochure.pdf" download>
              <InteractiveHoverButton className="backdrop-blur-xl bg-white border border-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                Download Student Brochure
              </InteractiveHoverButton>
            </a>

            <a href="/partnership.pdf" download>
              <InteractiveHoverButton className="backdrop-blur-xl bg-white border border-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                Download Partnership Brochure
              </InteractiveHoverButton>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-white/40" />

        {/* Footer Bottom Row */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-white">
            © Student Global Summit 2025. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/studentglobalsummit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-yellow-300 transition"
            >
              <svg
                className="w-6 h-6 text-white hover:text-yellow-300 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/R4RAKrBKa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-yellow-300 transition"
            >
              <svg
                className="w-6 h-6 text-white hover:text-yellow-300 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/sgsummit2025?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-yellow-300 transition"
            >
              <svg
                className="w-5 h-5 text-white hover:text-yellow-300 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Light Rays Effect */}
      {/* <LightRays /> */}
    </footer>
  );
}
