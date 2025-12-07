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
