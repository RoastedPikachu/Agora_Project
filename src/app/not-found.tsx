"use client";
import React from 'react';

import {useRouter} from "next/navigation";

import authStore from "@/app/store/authStore";

import ContainedButton from "@/shared/ContainedButton";

const NotFound = () => {
    const router = useRouter();

    const handleHomeRedirect = () => {
        if(authStore.isSignUp) {
            router.push("/messanger");
        }

        router.push("/");
    }

    return (
        <main className="relative grid justify-items-center grid-rows-10 grid-cols-1 gap-y-[25px] mt-[65px] mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-auto max-h-[875px]">
            <img src="/static/errorPage/ErrorPageImage.png" alt="" className="relative row-span-7 w-[80%] h-[560px] rounded-[10px]"/>

            <div className="grid justify-items-center grid-rows-3 row-span-3 h-[180px]">
                <h1 className="text-[2rem] text-center font-['Space_Grotesk'] font-bold">404 - Not Found</h1>

                <p className="text-[1.375rem] text-center font-['Space_Grotesk'] font-medium">The page you&lsquo;re looking for doesn&lsquo;t exist.</p>

                <ContainedButton
                    styles={"mt-[10px] w-[180px] h-[40px]"}
                    text={"Return to Home"}
                    handleFunction={handleHomeRedirect}
                />
            </div>
        </main>
    );
};

export default NotFound;