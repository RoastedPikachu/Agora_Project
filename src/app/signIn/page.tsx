"use client";
import React from 'react';

import Link from "next/link";

import Button from "@mui/material/Button";

import {useIsMobileCheck} from "../../../customHooks";

import AuthForm from "@/features/AuthForm";

const Page = () => {
    const isMobile = useIsMobileCheck();

    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <Link href="/" className="absolute top-[30px] mlarge:top-[20px] left-[30px] mlarge:left-[10px]">
                <Button variant="text">
                    <img src="/static/LeftArrowIcon.svg" alt=""/>

                    {!isMobile && <p className="ml-[15px]">I don&lsquo;t want to sign in</p>}
                </Button>
            </Link>

            <AuthForm
                isSignIn={true}
                authHeader={"Sign in to Agora"}
                authDescription={"We recommend to use work e-mail"}
                otherChoiseText={"Create an account"}
            />
        </main>
    );
};

export default Page;