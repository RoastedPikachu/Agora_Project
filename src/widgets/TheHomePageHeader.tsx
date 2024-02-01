import React from 'react';

import Link from 'next/link';

import Button from "@mui/material/Button";

const TheHomePageHeader = () => {
    return (
        <header className="relative flex justify-between items-center pl-[10%] pr-[50px] w-full h-[50px] bg-[#2076d2]">
           <div className="flex items-center w-[15%]">
               <img src="/static/AgoraLogo.svg" alt="" className="w-[25px] h-[25px]"/>

               <h2 className="ml-[15px] text-[#ffffff] text-[1.5rem] font-['Kamerik'] font-bold">Agora</h2>
           </div>

           <nav className="flex justify-between items-center w-[15%]">
               <Link href="/signIn">
                   <Button variant="text" className="textMUIWhiteButton">Sign in</Button>
               </Link>

               <Link href="/signUp">
                  <Button variant="contained" className="containedMUIWhiteButton">Sign up</Button>
               </Link>
           </nav>
        </header>
    );
};

export default TheHomePageHeader;