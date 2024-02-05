"use client";
import React from 'react';

import AuthForm from "@/features/AuthForm";

import GoBackButton from "@/shared/GoBackButton";

const Page = () => {

    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <GoBackButton buttonText={"I don't want to sign up"}/>

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