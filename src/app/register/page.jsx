import FormLayout from "@/components/FormLayout";
import { TextAnimate } from "@/components/ui/text-animate";
import { ComicText } from "@/components/ui/comic-text";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* DARK GLOSS + MIRROR OVERLAY */}
      <div className="absolute inset-0 bg-black backdrop-blur-[0.5px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 py-14 relative">
        {/* 🔙 BACK BUTTON + TITLE BAR */}
        <div
          className="
            flex lg:flex-row flex-col items-center justify-between
            w-full mb-6
          "
        >
          {/* BACK BUTTON - EXTREME LEFT */}
          <Link href="/" className="flex items-center gap-2 group lg:mb-0 mb-4">
            <ArrowLeftIcon
              className="h-8 w-8 text-white group-hover:text-pink-400 transition duration-300 
                         drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            />
            <span className="text-white font-semibold text-sm group-hover:text-pink-400 transition">
              Back to Home
            </span>
          </Link>

          {/* TITLE - CENTERED */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={0.7}
            className="text-lg lg:text-4xl font-extrabold bg-clip-text text-yellow-300 
                       drop-shadow-lg tracking-wide text-center flex-1"
          >
            Join the Global Summit 2025
          </TextAnimate>

          {/* RIGHT SIDE EMPTY FOR PERFECT CENTERING */}
          <div className="w-24"></div>
        </div>

        {/* ⭐ COMIC FREE BADGE */}
        <div className="flex justify-center mb-12">
          <ComicText className="text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,200,0.7)]">
            100% FREE REGISTRATION
          </ComicText>
        </div>

        {/* MAIN MESSAGE CARD */}
        <div
          className="relative backdrop-blur-2xl bg-white/10 border border-white/20 
                     shadow-[0_0_50px_rgba(255,255,255,0.2)] 
                     rounded-3xl p-10 sm:p-14 text-center"
        >
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={0.8}
            className="text-xl sm:text-4xl font-extrabold text-yellow-300 
                       drop-shadow-lg tracking-wide"
          >
            ⚠️ REGISTRATION TEMPORARILY PAUSED
          </TextAnimate>

          <p className="mt-6 text-white/90 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We are currently verifying and counting registrations.
            <br />
            <span className="font-semibold">
              No new submissions are being accepted at this moment.
            </span>
          </p>

          <p className="mt-4 text-blue-300 text-sm sm:text-base font-semibold">
            ⏳ Registrations will reopen shortly.
          </p>

          <p className="mt-2 text-white/70 text-sm">
            Thank you for your patience.
          </p>
        </div>

        {/* GLASS CONTAINER */}
        {/* <div
          className="relative backdrop-blur-2xl bg-white/10 border border-white 
            shadow-[0_0_40px_rgba(255,255,255,0.15)] 
            rounded-3xl p-10 sm:p-14 
            transition-all duration-700 
            hover:bg-white/12 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
        >
          <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/10"></div>

          <FormLayout />
        </div> */}
      </div>
    </section>
  );
}
