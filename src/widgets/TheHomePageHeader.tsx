import React from 'react';

import Link from 'next/link';

import Button from "@mui/material/Button";

const TheHomePageHeader = () => {
    return (
        <header className="relative flex justify-between items-center pl-[15%] pr-[20px] w-full h-[45px] bg-[#ffffff]">
           <h2 className="text-[#2076d2] text-[1.5rem] font-['Kamerik'] font-bold">Agora</h2>

           <nav className="flex justify-between items-center w-[15%]">
               <Link href="/signIn" className="">
                   <Button variant="text">Sign in</Button>
               </Link>

               <Link href="/signUp" className="">
                  <Button variant="contained" className="bg-[#2076d2]">Sign up</Button>
               </Link>
           </nav>
        </header>
    );
};

export default TheHomePageHeader;