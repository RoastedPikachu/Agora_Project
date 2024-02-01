"use client";
import React from "react";

import Link from "next/link";

import Button from "@mui/material/Button";

import {signIn} from "next-auth/react";

import TheHomePageHeader from "@/widgets/TheHomePageHeader";

export default function Home() {
  return (
    <main className="relative w-full h-auto">
        <TheHomePageHeader/>

        <section className="relative px-[10%] w-full h-[755px] bg-[#2076d2]">
          <h1 className="pt-[150px] w-full text-[#ffffff] text-[4rem] text-left font-['MerryWeather'] font-bold leading-[1.25] z-20"><strong className="text-[6rem] font-['Kamerik']">Agora</strong> <br/> New communication level</h1>

          <p className="mt-[20px] text-[#ffffff] text-[2rem] font-['MerryWeather'] font-medium">The best corporate messanger which <br/> made by people and for people</p>

          <div className="relative flex justify-between items-center mt-[30px] w-[70%] h-[50px]">
              <Link href="/signUp" className="w-[26%] h-full">
                  <Button variant="contained" className="w-full h-full bg-[#ffffff] text-[#2076d2] text-[1rem] hover:text-[#ffffff] font-bold">Sign up</Button>
              </Link>

              <Button variant="outlined" onClick={() => signIn('google')} className="flex justify-center items-center row-span-2 w-[35%] h-full bg-[#ffffff] border-2 rounded-[5px] text-[1rem] font-bold">
                  <img src="/static/GoogleIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                  <p className="ml-[15px]">Sign Up with Google</p>
              </Button>

              <Button variant="contained" onClick={() => signIn('github')} className="row-span-2 w-[35%] h-full bg-[#000000] hover:bg-[#111111] border-2 hover:border-[2px] rounded-[5px] text-[1rem] font-bold">
                  <img src="/static/GithubIcon.svg" alt="" className="ml-[-5px] w-[25px] h-[30px]"/>

                  <p className="ml-[15px]">Sign Up with GitHub</p>
              </Button>
          </div>
        </section>                  
    </main>
  );
}


