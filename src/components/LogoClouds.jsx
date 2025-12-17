import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import Vssut from "@/assets/images/vssut.png";
import BPUT from "@/assets/images/biju.png";
import OUTR from "@/assets/images/outr.png";
import OUAC from "@/assets/images/ouac.png";
import OSOU from "@/assets/images/osou.png";
import Sambalpur from "@/assets/images/sambalpur.png";
import Gangadhar from "@/assets/images/gangadhar.png";
import EduMin from "@/assets/images/odishaedu.jpg";
import Utkal from "@/assets/images/utkal.png";
import Odisha from "@/assets/images/odisha.png";
import TCS from "@/assets/images/tcs.png";
import Infosys from "@/assets/images/infosys.webp";
import RedBull from "@/assets/images/redbull.png";
import KFC from "@/assets/images/kfc.png";
import Centurion from "@/assets/images/centurion.png";
import Dominos from "@/assets/images/dominos.png";
import Wow from "@/assets/images/wow.jpg";
import ZingBer from "@/assets/images/zingber.png";
import SambalpuriHub from "@/assets/images/sambalpurihub.png";
import Dahibara from "@/assets/images/dahibara.jpeg";

export default function LogoClouds() {
  return (
    <div className="bg-primary py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={1.5}
          className="text-center text-xl font-semibold text-white"
        >
          Trusted by Leading Government, Academic, Technology & Global Partners
        </TextAnimate>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 md:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image
            src={EduMin}
            alt="Ministry of Education Logo"
            className="h-40 w-auto bg-black"
          />

          <Image
            src={Odisha}
            alt="State of Odisha Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />

          <Image
            src={Vssut}
            alt="Veer Surendra Sai University of Technology Logo"
            className="h-40 w-auto"
          />

          <Image
            src={Utkal}
            alt="Utkal University Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />

          <Image src={BPUT} alt="BPUT Logo" className="h-40 w-auto" />

          <Image
            src={Sambalpur}
            alt="Sambalpur University Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 md:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image
            src={OUTR}
            alt="Odisha University of Technology and Research Logo"
            className="h-40 w-auto"
          />

          <Image
            src={Gangadhar}
            alt="Gangadhar Meher University Logo"
            className="h-40 w-auto"
          />

          <Image
            src={OUAC}
            alt="Odisha University of Agriculture & Technology Logo"
            className="h-40 w-auto filter brightness-0 invert"
          />

          <Image
            src={OSOU}
            alt="Odisha State Open University Logo"
            className="h-40 w-auto"
          />

          <Image src={Centurion} alt="Centurion Logo" className="h-40 w-auto" />

          <Image
            src={TCS}
            alt="Tata Consultancy Services Logo"
            className="h-40 w-auto"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 md:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image src={Infosys} alt="Infosys Logo" className="h-40 w-auto" />

          <Image src={RedBull} alt="Red Bull Logo" className="h-40 w-auto" />

          <Image src={KFC} alt="KFC Logo" className="h-40 w-auto" />

          <Image
            src={Dominos}
            alt="Dominos Pizza Logo"
            className="h-40 w-auto"
          />

          <Image src={Wow} alt="Wow Momo Logo" className="h-40 w-auto" />

          <Image src={ZingBer} alt="ZingBer Logo" className="h-40 w-auto" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 md:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image
            src={Dahibara}
            alt="Dahibara Express Logo"
            className="h-40 w-auto"
          />
          <Image
            src={SambalpuriHub}
            alt="Sambalpuri Hub Logo"
            className="h-40 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
