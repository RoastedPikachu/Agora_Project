import React from 'react';

import Link from 'next/link';

import Button from "@mui/material/Button";
import ContainedButton from "@/shared/ContainedButton";

const TheHomePageHeader = () => {
    return (
        <header className="relative flex justify-between items-center px-[10%] deskWide:px-[calc(((100%-1440px)/2)+144px)] w-full h-[65px] bg-[#ffffff] border-b-2 border-[#e5e8eb]">
           <div className="flex items-center w-[15%] h-[25px]">
               <img src="/static/header/logo/AgoraLogo.svg" alt="" className="w-[30px] h-[30px] border-2 border-[#2176d2] rounded-[5px]"/>

               <h2 className="mt-[-5px] ml-[25px] h-[27.5px] text-[#2176d2] text-[1.5rem] font-['Kamerik'] font-bold">Agora</h2>
           </div>

           <nav className="relative flex items-center w-[270px] h-[40px]">
               <Link href="/signUp" className="h-full">
                   <ContainedButton styles={"w-[120px] h-full"} text={"Sign Up"}/>
               </Link>

               <Link href="/signIn" className="h-full">
                   <ContainedButton styles={"ml-[30px] w-[120px] h-full bg-[#e5e8eb] hover:bg-[#e5e8eb] text-[#0d1410]"} text={"Sign in"}/>
               </Link>
           </nav>
        </header>
    );
};

export default TheHomePageHeader;