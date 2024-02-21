import React from 'react';

import Link from 'next/link';

import Button from "@mui/material/Button";

const TheHomePageHeader = () => {
    return (
        <header className="relative flex justify-between items-center px-[10%] deskWide:px-[calc(((100%-1440px)/2)+144px)] w-full h-[65px] bg-[#ffffff] border-b-2 border-[#e5e8eb]">
           <div className="flex items-center w-[15%] h-[25px]">
               <img src="/static/header/logo/AgoraLogo.svg" alt="" className="w-[30px] h-[30px] border-2 border-[#2176d2] rounded-[5px]"/>

               <h2 className="mt-[-5px] ml-[25px] h-[27.5px] text-[#2176d2] text-[1.5rem] font-['Kamerik'] font-bold">Agora</h2>
           </div>

           <nav className="relative flex items-center w-[270px] h-[40px]">
               <Link href="/signUp" className="h-full">
                   <Button variant="contained" className="w-[120px] h-full bg-[#2176d2] rounded-[10px] font-semibold">Sign up</Button>
               </Link>

               <Link href="/signIn" className="h-full">
                   <Button variant="contained" className="ml-[30px] w-[120px] h-full bg-[#e5e8eb] hover:bg-[#e5e8eb] rounded-[10px] text-[#0d141c] font-semibold">Sign in</Button>
               </Link>
           </nav>
        </header>
    );
};

export default TheHomePageHeader;