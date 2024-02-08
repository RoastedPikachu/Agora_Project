import React from 'react';
import GoBackButton from "@/shared/GoBackButton";

const Page = () => {
    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/signUp"} buttonText={"I don't want to join the company"}/>

            <form className="grid justify-items-center grid-rows-5 gap-y-[25px] w-[40%] max-w-[750px] h-auto">
                <h2 className="text-[#2076d2] text-[2.375rem] mmedium:text-[2.25rem] msmall:text-[2.125rem] text-center font-bold">Join the company</h2>
            </form>
        </main>
    );
};

export default Page;