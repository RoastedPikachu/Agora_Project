"use client";
import React, {useState} from 'react';

import ProfileModalWindow from "@/shared/ProfileModalWindow";

const TheMessangerPageHeader = () => {
    const [isProfileModalActive, setProfileModalActive] = useState(false);

    return (
        <header className="relative flex justify-between items-center pl-[50px] pr-[5%] w-full h-[65px] bg-[#ffffff] border-b-2 border-[#e5e8eb]">
            <div className="flex items-center w-[15%] h-[25px]">
                <img src="/static/header/logo/AgoraLogo.svg" alt="" className="w-[30px] h-[30px] border-2 border-[#2176d2] rounded-[5px]"/>

                <h2 className="mt-[-5px] ml-[25px] h-[27.5px] text-[#2176d2] text-[1.5rem] font-['Kamerik'] font-bold">Agora</h2>
            </div>

            <div className="flex items-center w-[165px]">
                <button className="flex justify-center items-center w-[40px] h-[40px] bg-[#e5e8eb] rounded-[7.5px]">
                    <img src="/static/messangerPage/icons/SearchIcon.svg" alt="" className="w-[20px] h-[20px]"/>
                </button>

                <button className="flex justify-center items-center ml-[15px] w-[40px] h-[40px] bg-[#e5e8eb] rounded-[7.5px]">
                    <img src="/static/messangerPage/icons/NotificationsIcon.svg" alt="" className="w-[20px] h-[20px]"/>
                </button>

                <div className="relative ml-[30px] w-[40px] h-[40px]">
                    <button onClick={() => setProfileModalActive(prevState => !prevState)} className="w-full h-full bg-[#747474] rounded-[7.5px]"></button>

                    {isProfileModalActive && <ProfileModalWindow/>}
                </div>
            </div>
        </header>
    );
};

export default TheMessangerPageHeader;