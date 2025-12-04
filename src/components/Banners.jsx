"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

export default function Banners() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-primary px-6 py-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm text-white font-semibold">
          <strong className="font-bold text-yellow-300">
            Student Global Summit 2025
          </strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-1.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us in Utkal University from December 18 – 20 to see what’s coming
          next.
        </p>
        <Link href="/register">
          <InteractiveHoverButton className="flex-none rounded-full bg-white p-1 px-6 text-sm font-semibold text-white shadow-xs inset-ring-white/20 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Register Now
          </InteractiveHoverButton>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="-m-3 p-3 focus-visible:-outline-offset-4"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon
            aria-hidden="true"
            className="size-5 text-gray-100 hover:text-yellow-300 transition cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
