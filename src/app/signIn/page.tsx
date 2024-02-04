import React from 'react';

import AuthForm from "@/features/AuthForm";

import GoBackButton from "@/shared/GoBackButton";

const Page = () => {
    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <GoBackButton buttonText={"I don't want to sign in"}/>

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