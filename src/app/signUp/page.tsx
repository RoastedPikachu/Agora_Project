"use client";
import React from 'react';

import {useIsMobileCheck} from "../../../customHooks";

import Link from "next/link";

import {signIn} from "next-auth/react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

            <form className="relative w-[40%] mlarge:w-[90%] h-auto">
                <div className="relative grid justify-items-center grid-rows-[10] grid-cols-1 gap-y-[25px] w-full h-full">
                    <h2 className="text-[#2076d2] text-[2.375rem] mmedium:text-[2.25rem] msmall:text-[2.125rem] text-center font-bold">Insert you e-mail and password</h2>

                    <p className="text-[#2076d2] text-[1.375rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-medium">We recommend to use work e-mail</p>

                    <TextField label="Insert E-mail" className="relative mx-[15%] mlarge:mx-[5%] w-[70%] mlarge:w-[80%] h-[50px] border-2 rounded-[5px] placeholder:text-[#120154]"/>

                    <TextField label="Insert password" className="relative mx-[15%] mlarge:mx-[5%] w-[70%] mlarge:w-[80%] h-[50px] border-2 rounded-[5px] placeholder:text-[#120154]"/>

                    <Button variant="contained" className="flex justify-center items-center mx-[15%] mlarge:mx-[5%] w-[70%] mlarge:w-[80%] h-[50px] bg-[#2076d2] rounded-[5px] text-[1.25rem] font-bold">Continue</Button>

                    <p className="text-[#2076f2] text-[1.25rem] font-bold">OR</p>

                    <Button variant="outlined" onClick={() => signIn('google')} className="googleOAuthButton">
                        <img src="/static/GoogleIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                        <p className="ml-[15px]">Continue with Google</p>
                    </Button>

                    <Button variant="contained" onClick={() => signIn('github')} className="githubOAuthButton">
                        <img src="/static/GithubIcon.svg" alt="" className="ml-[-5px] w-[25px] h-[30px]"/>

                        <p className="ml-[15px]">Continue with GitHub</p>
                    </Button>

                    <Link href="/signIn">
                        <Button variant="text">Sign in instead</Button>
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default Page;