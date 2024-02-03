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

                    {!isMobile && <p className="ml-[15px]">I don&lsquo;t want to sign up</p>}
                </Button>
            </Link>

            <AuthForm
                isSignIn={false}
                authHeader={"Insert you e-mail and password"}
                authDescription={"We recommend to use work e-mail"}
                otherChoiseText={"Sign in instead"}
            />
        </main>
    );
};

export default Page;