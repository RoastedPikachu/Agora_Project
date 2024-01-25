import React from 'react';

import TheHeader from "@/widgets/shared/TheHeader";
import TheCompanyChats from "@/widgets/features/TheCompanyChats";

const Page = () => {
    return (
        <>
            <TheHeader/>

            <main className='relative flex w-full h-[calc(100vh-45px)]'>
                <TheCompanyChats/>

                <div className="relative w-[81%] h-full bg-[#e3f2fd]">

                </div>
            </main>
        </>
    );
};

export default Page;