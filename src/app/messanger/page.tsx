import React from 'react';

import TheMessangerPageHeader from "@/widgets/TheMessangerPageHeader";

import MessangerSidebar from "@/widgets/MessangerSidebar";

const Page = () => {
    return (
        <>
            <TheMessangerPageHeader/>

            <main className='relative flex w-full h-[calc(100vh-45px)]'>
                <MessangerSidebar/>

                <div className="relative w-[81%] h-full bg-[#e3f2fd]">

                </div>
            </main>
        </>
    );
};

export default Page;