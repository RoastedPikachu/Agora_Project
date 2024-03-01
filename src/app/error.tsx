"use client";
import React from 'react';

import ContainedButton from "@/shared/ContainedButton";

const Error = () => {
    return (
        <main className="relative grid justify-items-center grid-rows-7 grid-cols-1 gap-y-[25px] mt-[195px] mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-auto max-h-[875px]">
            <h1 className="row-span-3 text-[#2076d2] text-[10rem] text-center font-['Space_Grotesk'] font-bold">OOOps!</h1>

            <div className="grid justify-items-center grid-rows-4 row-span-4 h-[200px]">
                <h2 className="text-[2rem] text-center font-['Space_Grotesk'] font-bold">Something went wrong</h2>

                <p className="row-span-2 pt-[10px] w-[80%] text-[1.375rem] text-center font-['Space_Grotesk'] font-medium">We&lsquo;re sorry. It looks like error happened. Now we are trying to fix it.</p>

                <ContainedButton
                    styles={"mt-[15px] w-[180px] h-[40px]"}
                    text={"Return to Home"}
                />
            </div>
        </main>
    );
};

export default Error;