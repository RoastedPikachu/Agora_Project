"use client";
import React from 'react';

import AuthForm from "@/features/AuthForm";

import GoBackButton from "@/shared/GoBackButton";

const Page = () => {
    return (
        <main className="relative flex flex-col justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/"} buttonText={"I don't want to sign up"}/>

            <img src="/static/logo/AgoraLogoPlusText.svg" alt="" className="relative w-[200px] h-[50px]"/>

            <AuthForm
                isSignIn={false}
                authHeader={"Insert you e-mail and password"}
                authDescription={"We recommend to use work e-mail"}
                otherChoiceText={"Sign in instead"}
            />
        </main>
    );
};

export default Page;