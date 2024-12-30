
'use client';

import AppLaunch from "@/components/AppLaunch";
import ArrowBtn from "@/components/ArrowBtn";
import Card from "@/components/Card";
import Landing from "@/components/Landing";


export default function Home() {
  return (
    <div className=" items-center justify-center relative bg-hero-pattern bg-center bg-cover bg-purple-300 justify-items-center p-3 font-[family-name:var(--font-geist-sans)] ">

      <div className=" w-full flex flex-col  relative lg:pt-10 backdrop-blur-md bg-opacity-50 bg-white  rounded-md  lg:w-[1300px] overflow-y-scroll no-scrollbar md:h-[590px]">

        <main className="w-full">
          <Landing />
          <ArrowBtn />
          <AppLaunch />
          <Card />
        </main>




      </div>

    </div>
  );
}
