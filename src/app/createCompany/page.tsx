import React from 'react';

import GoBackButton from "@/shared/GoBackButton";

const Page = () => {
    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/signUp"} buttonText={"I don't want to sign in"}/>

            <form className="">

            </form>
        </main>
    );
};

export default Page;