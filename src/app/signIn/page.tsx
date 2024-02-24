import React from 'react';

import AuthForm from "@/features/AuthForm";

import GoBackButton from "@/shared/GoBackButton";

const Page = () => {
    return (
        <main className="relative flex flex-col justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/"} buttonText={"I don't want to sign in"}/>

            <img src="/static/logos/AgoraLogoPlusText.svg" alt="" className="relative w-[200px] h-[50px]"/>

            <AuthForm
                isSignIn={true}
                authHeader={"Sign in to Agora"}
                authDescription={"We recommend to use work e-mail"}
                otherChoiceText={"Create an account"}
            />
        </main>
    );
};

export default Page;