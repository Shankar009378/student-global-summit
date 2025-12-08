import { NextSeo } from "next-seo";

import Banners from "@/components/Banners";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import LogoClouds from "@/components/LogoClouds";
import NewsletterSection from "@/components/NewsletterSection";
import Perks from "@/components/Perks";
import RewardsSection from "@/components/RewardsSection";
import ScheduleSection from "@/components/ScheduleSection";
import SpeakersSection from "@/components/SpeakersSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Student Global Summit 2025"
        description="India's biggest youth summit for innovation, entrepreneurship, technology, and leadership. Join the global movement shaping the future."
        canonical="https://studentglobalsummit.com"
        openGraph={{
          url: "https://studentglobalsummit.com",
          title: "Student Global Summit 2025",
          description:
            "Join India’s most dynamic youth summit featuring innovation showcases, global policy debates, startup exhibitions, and cultural confluence.",
          images: [
            {
              url: "/icon.png",
              width: 1200,
              height: 630,
              alt: "Student Global Summit 2025",
            },
          ],
          siteName: "Student Global Summit 2025",
        }}
        twitter={{
          handle: "@sgsummit2025",
          site: "@sgsummit2025",
          cardType: "summary_large_image",
        }}
      />
      <Banners />
      <HeroSection />
      <LogoClouds />
      <HeaderSection />
      <SpeakersSection />
      <Perks />
      <RewardsSection />
      <ScheduleSection />
      <Faq />
      <NewsletterSection />
      <Footer />
    </>
  );
}
