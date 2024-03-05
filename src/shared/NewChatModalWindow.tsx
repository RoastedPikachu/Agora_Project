"use client";
import React from 'react';

import modalWindowsStore from "@/app/store/modalWindowsStore";

const NewChatModalWindow = () => {
    return (
        <div className="absolute mt-[85px] mx-[32.5%] px-[20px] py-[15px] w-[35%] h-auto bg-[#ffffff] border-2 border-[#2076d2] rounded-[10px] z-30">
            <button onClick={() => modalWindowsStore.changeInviteCodeModalOpened()} className="absolute top-[-20px] right-[-20px] w-[45px] h-[45px] cursor-pointer z-30">
                <img src="/static/icons/XMarkIcon.svg" alt="Button: remove avatar" className="w-[35px] h-[35px]"/>
            </button>
        </div>
    );
};

export default NewChatModalWindow;