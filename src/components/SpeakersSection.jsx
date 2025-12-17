"use client";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import RameshMishra from "@/assets/images/ramesh-mishra.png";
import SatyajitMohapatra from "@/assets/images/satyajit-mohapatra.jpg";
import PriyadarshiNanuPany from "@/assets/images/priyadarshi-nanu-pany.jpeg";
// import NipunSyal from "@/assets/images/nipun-syal.jpeg";
import SouravBharadwaj from "@/assets/images/sourav-bharadwaj.jpg";
import SukanyaDas from "@/assets/images/sukanya-das.jpeg";
import ChandanMalu from "@/assets/images/chandan-malu.jpeg";
import HeeCheolKim from "@/assets/images/hee.jpeg";
import DebiProsadDogra from "@/assets/images/debi.png";
// import Padmalochan from "@/assets/images/padmalochan.png";
// import Bodhisattwa from "@/assets/images/bodhisattwa.jpg";
import SubiniKumarRath from "@/assets/images/subini.jpeg";
import SubrataKumarPanda from "@/assets/images/subrata.webp";
import SugyaniMohapatra from "@/assets/images/sugyani.jpg";
import HimansuTripathy from "@/assets/images/himansu.jpeg";
// import ParichayPattnaik from "@/assets/images/parichay.jpeg";
import HariSaranDash from "@/assets/images/hari.jpeg";
import AjitMohanty from "@/assets/images/ajit.jpeg";
import Santosh from "@/assets/images/santosh.jpeg";

export default function SpeakersSection() {
  return (
    <section id="speakers" className="bg-primary py-16">
      <div className="container px-6 mx-auto">
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={5}
          className="text-2xl font-semibold text-center text-yellow-300 uppercase lg:text-3xl"
        >
          Distinguished Speakers & Thought Leaders
        </TextAnimate>

        <p className="max-w-2xl mx-auto my-6 text-center text-summit-lavender font-medium">
          A curated lineup of policymakers, researchers, founders, and
          innovators shaping the future of ethical and responsible AI.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
          {/* SPEAKER CARD */}
          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={HeeCheolKim}
              alt="Prof. Hee - Cheol Kim"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Prof. Hee - Cheol Kim
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              AI Convergence & IDA Institute
            </p>

            <p className="text-sm text-white mt-1 text-center">
              Department of Computer Engineering, Inje University, Republic of
              Korea
            </p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={Santosh}
              alt="Mr. Santosh Kumar Choudhury"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Santosh Kumar Choudhury
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Senior Director – Software Development
            </p>

            <p className="text-sm text-white mt-1 text-center">
              Oracle, Hyderabad
            </p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={HariSaranDash}
              alt="Mr. Harisaran Dash"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Harisaran Dash
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              AI/ML Expert
            </p>

            <p className="text-sm text-white mt-1 text-center">
              California, United States
            </p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={SubiniKumarRath}
              alt="Mr. Subini Kumar Rath"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Subini Kumar Rath
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Head of Enterprise Architecture
            </p>

            <p className="text-sm text-white mt-1 text-center">Huawei, Dubai</p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={PriyadarshiNanuPany}
              alt="Mr. Priyadarshi Nanu Pany"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr.Priyadarshi Nanu Pany
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              MD & CEO, CSM Technologies
            </p>

            <p className="text-sm text-white mt-1 text-center">Bhubaneswar</p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={AjitMohanty}
              alt="Mr. Ajit Mohanty"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Ajit Mohanty
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Head of Product Engineering
            </p>

            <p className="text-sm text-white mt-1 text-center">
              Tata Consultancy Services (TCS)
            </p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={RameshMishra}
              alt="Dr. Ramesh Kumar Mishra"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Dr. Ramesh Kumar Mishra
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Professor of Cognitive Science
            </p>

            <p className="text-sm text-white mt-1 text-center">
              University of Hyderabad
            </p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={HimansuTripathy}
              alt="Mr. Himansu Tripathy"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Himansu Tripathy
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Designs Data Solutions
            </p>

            <p className="text-sm text-white mt-1 text-center">
              United Arab Emirates
            </p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={ChandanMalu}
              alt="Mr. Chandan Malu"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Chandan Malu
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Principal Technology Architect
            </p>

            <p className="text-sm text-white mt-1 text-center">
              Infosys Topaz, Bhubaneswar
            </p>
          </div>

          {/* OTHER SAMPLE CARDS */}
          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={SatyajitMohapatra}
              alt="Dr. Satyajit Mohapatra"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Dr. Satyajit Mohapatra
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Professor & HoD, Pharmacology
            </p>

            <p className="text-sm text-white mt-1 text-center">
              AIIMS, Guwahati
            </p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={SubrataKumarPanda}
              alt="Prof. Subrata Kumar Panda"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Prof.Subrata KumarPanda
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              President, FTBI
            </p>

            <p className="text-sm text-white mt-1 text-center">NIT, Rourkela</p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={SukanyaDas}
              alt="Ms. Sukanya Das"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Ms. Sukanya Das
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Senior Gen AI Engineer
            </p>

            <p className="text-sm text-white mt-1 text-center">IBM, India</p>
          </div>

          {/* <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={NipunSyal}
              alt="Mr. Nipun Syal"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Nipun Syal
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Marketing Automation Expert
            </p>

            <p className="text-sm text-white mt-1 text-center">TEDx Speaker</p>
          </div> */}

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={DebiProsadDogra}
              alt="Dr. Debi Prosad Dogra"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Dr. Debi Prosad Dogra
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Head, Department of CSE
            </p>

            <p className="text-sm text-white mt-1 text-center">
              IIT, Bhubaneswar
            </p>
          </div>

          {/* <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={Padmalochan}
              alt="Dr. Padmalochan Bera"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Dr. Padmalochan Bera
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Associate Professor, EE & CSE
            </p>

            <p className="text-sm text-white mt-1 text-center">
              IIT, Bhubaneswar
            </p>
          </div> */}

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={SouravBharadwaj}
              alt="Mr. Sourav Bharadwaj"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Sourav Bharadwaj
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Playback Singer
            </p>

            <p className="text-sm text-white mt-1 text-center">
              Odia Music Artist
            </p>
          </div>

          <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={SugyaniMohapatra}
              alt="Ms. Sugyani Mohapatra"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Ms. Sugyani Mohapatra
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Playback Singer
            </p>

            <p className="text-sm text-white mt-1 text-center">
              Odia Music Artist
            </p>
          </div>

          {/* <div
            className="flex flex-col items-center p-8 rounded-2xl 
            bg-white/5 border border-white backdrop-blur-md
            hover:bg-summit-pink/20 hover:border-summit-pink transition cursor-pointer hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,128,0.25)]"
          >
            <Image
              src={ParichayPattnaik}
              alt="Mr. Parichay Pattnaik"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover object-top ring-4 ring-gray-300"
            />

            <h1 className="mt-4 text-lg font-semibold text-yellow-300 text-center">
              Mr. Parichay Pattnaik
            </h1>

            <p className="mt-1 text-sm font-medium text-white text-center">
              Academic Alliances Head
            </p>

            <p className="text-sm text-white mt-1 text-center">
              TCS, Bhubaneswar
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
