import React from 'react';

import GoBackButton from "@/shared/GoBackButton";

const Page = () => {
    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <GoBackButton designation={"/signUp"} buttonText={"I don't want to create company"}/>

            <form className="grid justify-items-center w-[50%] h-auto">
                <div className="relative w-full h-[100px]">
                    <label className="w-[100px] h-[100px] bg-[#747474]"></label>

                    <input type="file" className="hidden"/>
                </div>
            </form>
        </main>
    );
};

export default Page;