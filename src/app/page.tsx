
'use client';

import AppLaunch from "@/components/AbstactBackground";
import ArrowBtn from "@/components/ArrowBtn";
import BenefitsList from "@/components/BenefitList";
import Card from "@/components/Card";
import Conclusion from "@/components/Conclusion";
import Landing from "@/components/Landing";
import ReadingComponent from "@/components/Reading";


export default function Home() {
  return (
    <div className=" items-center justify-center relative bg-hero-pattern bg-center bg-cover bg-purple-300 justify-items-center p-3 font-[family-name:var(--font-geist-sans)] ">

      <div className=" w-full flex flex-col  relative lg:pt-10 backdrop-blur-md bg-opacity-50 bg-white  rounded-md  lg:w-[1300px] overflow-y-scroll no-scrollbar md:h-[590px]">

        <main className="w-full">
          <Landing />
          <ArrowBtn />
          <AppLaunch />
          <BenefitsList />
          <ReadingComponent />
          <Conclusion />
          <Card />
        </main>




      </div>

    </div>
  );
}
