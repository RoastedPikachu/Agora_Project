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
        <main className="relative flex justify-center items-center mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-screen">
            <div className="relative grid justify-items-center grid-rows-6 grid-cols-1 gap-y-[10px] w-auto h-auto">
                <h1 className="row-span-3 text-[#2076d2] text-[10rem] text-center font-['Space_Grotesk'] font-bold">OOOps!</h1>

                <div className="grid justify-items-center grid-rows-3 row-span-3 h-[200px]">
                    <h2 className="text-[2rem] text-center font-['Space_Grotesk'] font-bold">404 - Not Found</h2>

                    <p className="text-[1.375rem] text-center font-['Space_Grotesk'] font-medium">The page you&lsquo;re looking for doesn&lsquo;t exist.</p>

                    <ContainedButton
                        styles={"mt-[15px] w-[180px] h-[40px] text-[#ffffff]"}
                        text={"Return to Home"}
                        handleFunction={handleHomeRedirect}
                    />
                </div>
            </div>
        </main>
    );
};

export default NotFound;