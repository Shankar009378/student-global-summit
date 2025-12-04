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
          <Link
            href="/"
            className="flex items-center gap-2 group lg:mb-0 mb-4"
          >
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
            FREE TO PARTICIPATE
          </ComicText>
        </div>

        {/* GLASS CONTAINER */}
        <div
          className="relative backdrop-blur-2xl bg-white/10 border border-white 
            shadow-[0_0_40px_rgba(255,255,255,0.15)] 
            rounded-3xl p-10 sm:p-14 
            transition-all duration-700 
            hover:bg-white/12 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
        >
          <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/10"></div>

          <FormLayout />
        </div>
      </div>
    </section>
  );
}
