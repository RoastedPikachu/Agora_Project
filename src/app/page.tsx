import Image from "next/image";

import TheHomePageHeader from "@/widgets/TheHomePageHeader";

export default function Home() {
  return (
    <main className="relative w-full h-auto">
        <TheHomePageHeader/>

        <section className="relative flex justify-center items-center w-full h-[750px]">
          <img src="/static/ForestBackgroundImage.png" alt="" className="absolute w-full h-full brightness-[0.6] z-10"/>

          <h1 className="absolute w-full text-[#ffffff] text-[4rem] text-center font-['MerryWeather'] font-bold z-20"><strong className="text-[6rem] font-['Kamerik']">Agora</strong> <br/> New communication level</h1>
        </section>                  
    </main>
  );
}


