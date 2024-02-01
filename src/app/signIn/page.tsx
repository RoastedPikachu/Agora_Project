"use client";
import React from 'react';

import Link from "next/link";

import { useSession, signIn, signOut } from 'next-auth/react';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Page = () => {
    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <Link href="/" className="absolute top-[30px] left-[30px]">
                <Button variant="text">
                    <img src="/static/LeftArrowIcon.svg" alt=""/>
                    
                    <p className="ml-[15px]">I don&lsquo;t want to sign in</p>
                </Button>
            </Link>
            
            <form className="relative w-[40%] h-auto">
                <div className="relative grid justify-items-center grid-rows-[10] grid-cols-1 gap-y-[25px] w-full h-full">
                    <h2 className="text-[#2076d2] text-[2.375rem] text-center font-bold">Sign in to Agora</h2>

                    <p className="text-[#2076d2] text-[1.375rem] text-center font-medium">We recommend to use work e-mail</p>

                    <Button variant="outlined" onClick={() => signIn('google')} className="row-span-2 mx-[15%] w-[70%] h-[50px] border-2 hover:border-[2px] rounded-[5px] text-[1rem] font-bold">
                        <img src="/static/GoogleIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                        <p className="ml-[15px]">Continue with Google</p>
                    </Button>

                    <Button variant="contained" onClick={() => signIn('github')} className="githubOAuthButton">
                        <img src="/static/GithubIcon.svg" alt="" className="ml-[-5px] w-[25px] h-[30px]"/>

                        <p className="ml-[15px]">Continue with GitHub</p>
                    </Button>

                    <p className="text-[#2076d2] text-[1.25rem] font-bold">OR</p>

                    <TextField label="Insert E-mail" className="relative mx-[15%] w-[70%] h-[50px] border-2 rounded-[5px]"/>

                    <TextField label="Insert password" className="relative mx-[15%] w-[70%] h-[50px] border-2 rounded-[5px]"/>

                    <Button variant="contained" className="flex justify-center items-center mx-[15%] w-[70%] h-[50px] bg-[#2076d2] rounded-[5px] text-[1.25rem] font-bold">Sign in</Button>

                    <Link href="/signUp">
                        <Button variant="text">Create an account</Button>
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default Page;