"use client";

import { useState, useRef } from "react";
import {
  CalendarDaysIcon,
  HandRaisedIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { TextAnimate } from "@/components/ui/text-animate";

export default function NewsletterSection() {
  const [active, setActive] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    if (!active) {
      setActive(true);
    }

    const res = await fetch("/api/addSubscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: input }),
    });
    const data = await res.json();

    if (data.error) {
      setErrorMessage("Hey, you are already subscribed!");
      setSuccessMessage(undefined);
      return;
    }

    setSuccessMessage("You are successfully subscribed!");
    setErrorMessage("Hey, you are already subscribed!");
    setInput("");
  };

  return (
    <div className="relative isolate overflow-hidden bg-primary py-8 sm:py-12 lg:py-20 border-t border-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(successMessage || errorMessage) && (
          <div className="mb-6 max-w-lg mx-auto">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg backdrop-blur-xl border
                ${
                  successMessage
                    ? "bg-green-600/20 border-green-400"
                    : "bg-red-600/20 border-red-400"
                }`}
            >
              {successMessage ? (
                <CheckCircleIcon className="h-6 w-6 text-green-400" />
              ) : (
                <XCircleIcon className="h-6 w-6 text-red-400" />
              )}

              <p className="text-white font-medium text-sm">
                {successMessage || errorMessage}
              </p>
            </div>
          </div>
        )}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <TextAnimate
              animation="blurInUp"
              by="character"
              duration={0.9}
              className="text-2xl lgtext-4xl font-bold tracking-tight text-yellow-300"
            >
              Subscribe to our newsletter
            </TextAnimate>
            <p className="mt-4 text-md lg:text-lg text-gray-300">
              Get key updates, speaker announcements, and exclusive
              opportunities for the Students Global Summit 2025.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col lg:flex-row gap-5 max-w-md gap-x-4"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-w-0 flex-auto rounded-lg bg-white/10 px-4 py-2.5 text-base text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-offset-primary focus:ring-yellow-300 sm:text-sm/6"
              />
              <InteractiveHoverButton
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold 
             backdrop-blur-xl bg-white text-primary border border-white 
             shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-lg"
              >
                Subscribe
              </InteractiveHoverButton>
            </form>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-yellow-300"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Summit Alerts
              </dt>
              <dd className="mt-2 text-base/7 text-gray-300">
                Be the first to know about schedule updates, new sessions, and
                last-minute opportunities.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-yellow-300"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Zero Spam. Only Value.
              </dt>
              <dd className="mt-2 text-base/7 text-gray-300">
                You’ll only receive curated updates we believe matter to your
                growth, learning, and summit experience.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-yellow-300/40 to-pink-500/40 opacity-30"
        />
      </div>
    </div>
  );
}
