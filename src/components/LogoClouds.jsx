import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import Vssut from "@/assets/images/vssut.png";
import EduMin from "@/assets/images/educ-min.svg";
import Utkal from "@/assets/images/utkal.png";
import Odisha from "@/assets/images/odisha.png";
import DigitalIndia from "@/assets/images/digitalIndia.png";
import NitiAayog from "@/assets/images/niti.svg";

export default function LogoClouds() {
  return (
    <div className="bg-primary py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={5}
          className="text-center text-xl font-semibold text-white"
        >
          Trusted by Leading Government, Academic & Technology Partners
        </TextAnimate>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 md:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image
            src={EduMin}
            alt="Ministry of Education Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />

          <Image
            src={Vssut}
            alt="Veer Surendra Sai University of Technology Logo"
            className="h-40 w-auto"
          />

          <Image
            src={Odisha}
            alt="State of Odisha Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />

          <Image
            src={NitiAayog}
            alt="Niti Aayog Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />

          <Image
            src={Utkal}
            alt="Utkal University Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />

          <Image
            src={DigitalIndia}
            alt="Digital India Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />
        </div>
      </div>
    </div>
  );
}
