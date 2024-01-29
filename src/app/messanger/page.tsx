import React from 'react';

import TheHeader from "@/widgets/TheHeader";

import MessangerSidebar from "@/widgets/MessangerSidebar";

const Page = () => {
    return (
        <>
            <TheHeader/>

            <main className='relative flex w-full h-[calc(100vh-45px)]'>
                <MessangerSidebar/>

                <div className="relative w-[81%] h-full bg-[#e3f2fd]">

                </div>
            </main>
        </>
    );
};

export default Page;