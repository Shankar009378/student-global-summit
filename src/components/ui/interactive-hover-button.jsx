import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-primary hover:border-pink-600 bg-transparent p-2 px-6 text-center font-semibold text-white transition-all duration-300 hover:bg-pink-600",
        className
      )}
      {...props}
    >
      {/* LEFT SIDE DOT + TEXT */}
      <div className="flex items-center gap-2">
        {/* Animated dot */}
        <div className="bg-pink-600 h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>

        {/* Main text */}
        <span className="inline-block text-primary transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      {/* RIGHT SIDE HOVER TEXT + ICON */}
      <div
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 text-white"
      >
        <span>{children}</span>
        <ArrowRight className="text-white" />
      </div>
    </button>
  );
}
