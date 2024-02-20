"use client";
import React from "react";

import Link from "next/link";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import TheHomePageHeader from "@/widgets/TheHomePageHeader";

export default function Home() {
  return (
    <main className="relative w-full h-auto">
        <TheHomePageHeader/>

        <section className="relative px-[10%] w-full h-[580px]">
          <div className="mt-[50px] px-[50px] py-[30px] w-full h-[580px] bg-[url('/static/GreetingsBackgroundImage.png')] bg-cover rounded-[20px]">
              <h1 className="pt-[170px] w-full text-[#ffffff] text-[4rem] text-left font-bold leading-[1.25] z-20">Agora is a new professional messaging service.</h1>

              <p className="mt-[20px] text-[#ffffff] text-[2rem] font-light">The best corporate messanger which made by people and for people</p>

              <div className="flex items-center mt-[30px] pl-[30px] pr-[10px] w-[460px] h-[60px] bg-[#ffffff] rounded-[15px]">
                  <input type="text" placeholder="Enter your work email" className="w-[380px] h-full placeholder:text-[#4f7396] text-[1.125rem] outline-0"/>

                  <Button variant="contained" className="w-[180px] h-[45px] bg-[#2076d2] rounded-[10px] font-semibold">Get started</Button>
              </div>
          </div>
        </section>

        <section className="relative mt-[50px] px-[10%] w-full h-[400px]">
            <h2 className="text-[#0d141c] text-[2.25rem] font-bold">Why use Agora?</h2>

            <p className="mt-[20px] text-[#4f7396] text-[1.25rem] font-medium">Agora is a new professional messaging service with a mission to help you do your best work. We&lsquo;re here to help you stay connected, get the word out, and bring in the experts.</p>

            <div className="flex justify-between items-center mt-[40px] w-full h-[200px]">
                <div className="p-[20px] w-[32%] h-full border-2 border-[#e5e8eb] rounded-[10px]">
                    <img src="/static/ConnectionIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                    <h3 className="mt-[15px] text-[#0d141c] text-[1.25rem] font-bold">Stay connected</h3>

                    <p className="mt-[10px] text-[#4f7396] text-[1rem] font-medium">With Agora, you&lsquo;ll never miss a beat. <br/> Stay in touch with your team and get updates on things that matter to you.</p>
                </div>

                <div className="p-[20px] w-[32%] h-full border-2 border-[#e5e8eb] rounded-[10px]">
                    <img src="/static/HomeIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                    <h3 className="mt-[15px] text-[#0d141c] text-[1.25rem] font-bold">Stay connected</h3>

                    <p className="mt-[10px] text-[#4f7396] text-[1rem] font-medium">With Agora, you&lsquo;ll never miss a beat. <br/> Stay in touch with your team and get updates on things that matter to you.</p>
                </div>

                <div className="p-[20px] w-[32%] h-full border-2 border-[#e5e8eb] rounded-[10px]">
                    <img src="/static/ExpertsIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                    <h3 className="mt-[15px] text-[#0d141c] text-[1.25rem] font-bold">Stay connected</h3>

                    <p className="mt-[10px] text-[#4f7396] text-[1rem] font-medium">With Agora, you&lsquo;ll never miss a beat. <br/> Stay in touch with your team and get updates on things that matter to you.</p>
                </div>
            </div>
        </section>
    </main>
  );
}


