"use client";
import React, {useState, useEffect} from 'react';

import makeFirebaseRequest from "../../firebase/endpoints";

import modalWindowsStore from "@/app/store/modalWindowsStore";

import {getCompanyId} from "@/utils/generalFunctions";

import ContainedButton from "@/shared/ContainedButton";

const InviteCodeModalWindow = () => {
    const [inviteCode, setInviteCode] = useState("");

    const generateInviteCode = () => {
        setInviteCode(crypto.randomUUID() + "/" + getCompanyId());
    }

    useEffect(() => {
        makeFirebaseRequest("company/update/inviteCode", {companyId: getCompanyId(), inviteCode: inviteCode});
    }, [inviteCode]);

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(inviteCode);
    }

    const copyLinkToClipboard = () => {
        navigator.clipboard.writeText(`http://localhost:3000/signUp?inviteCode=${inviteCode}`);
    }

    useEffect(() => {
        generateInviteCode();
    }, []);

    return (
        <div className="absolute mt-[85px] mx-[32.5%] px-[20px] py-[15px] w-[35%] h-auto bg-[#ffffff] border-2 border-[#2076d2] rounded-[10px] z-30">
            <button onClick={() => modalWindowsStore.changeInviteCodeModalOpened()} className="absolute top-[-20px] right-[-20px] w-[45px] h-[45px] cursor-pointer z-30">
                <img src="/static/icons/XMarkIcon.svg" alt="Button: remove avatar" className="w-[35px] h-[35px]"/>
            </button>

            <h2 className="text-[#0d140c] text-[1.25rem] text-center font-['Space_Grotesk'] font-semibold">Invite code and invite link successfully generated</h2>

            <div className="flex justify-between items-center mt-[20px] w-full h-[50px]">
                <ContainedButton
                    styles={"w-[200px] h-[50px] text-[#ffffff]"}
                    text={"Copy code"}
                    handleFunction={copyCodeToClipboard}
                />

                <ContainedButton
                    styles={"w-[200px] h-[50px] text-[#ffffff]"}
                    text={"Copy link"}
                    handleFunction={copyLinkToClipboard}
                />
            </div>
        </div>
    );
};

export default InviteCodeModalWindow;