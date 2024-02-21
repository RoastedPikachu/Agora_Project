"use client";
import React from "react";

import Advantage from "@/shared/Advantage";

import TheHomePageHeader from "@/widgets/TheHomePageHeader";
import GreetingsBlock from "@/widgets/GreetingsBlock";

export default function Home() {
  const advantages = [
      {
          id: 1,
          iconPath: "/static/ConnectionIcon.svg",
          title: "Stay connected",
          description: "With Agora, you'll never miss a beat. Stay in touch with your team and get updates on things that matter to you."
      },
      {
          id: 2,
          iconPath: "/static/HomeIcon.svg",
          title: "Get the word out",
          description: "Share info with the right people at the right time. With Agora, you can easily send messages, tag your team, and share files."
      },
      {
          id: 3,
          iconPath: "/static/ExpertsIcon.svg",
          title: "Bring in the experts",
          description: "Need help? Get it from the pros. With Agora, you can tag someone from your company and ask for their expertise."
      },
  ]

  return (
    <>
        <TheHomePageHeader/>

        <main className="relative mx-[calc((100%-1440px)/2)] pb-[50px] w-full max-w-[1440px] h-auto">
            <GreetingsBlock/>

            <section className="relative mt-[50px] px-[10%] w-full h-[400px]">
                <h2 className="text-[#0d141c] text-[2.25rem] font-bold">Why use Agora?</h2>

                <p className="mt-[20px] text-[#4f7396] text-[1.25rem] font-medium">Agora is a new professional messaging service with a mission to help you do your best work. We&lsquo;re here to help you stay connected, get the word out, and bring in the experts.</p>

                <div className="flex justify-between items-center mt-[40px] w-full h-[220px]">
                    {advantages.map(advantage => (
                        <Advantage
                            key={advantage.id}
                            id={advantage.id}
                            iconPath={advantage.iconPath}
                            title={advantage.title}
                            description={advantage.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    </>
  );
}


