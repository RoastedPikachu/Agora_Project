"use client";
import React, {useState} from 'react';

import TextField from "@mui/material/TextField";

import makeFirebaseRequest from "../../firebase/endpoints";

import chatsStore from "@/app/store/chatsStore";

import {getCompanyId} from "@/lib/generalFunctions";

import modalWindowsStore from "@/app/store/modalWindowsStore";

import ContainedButton from "@/shared/ContainedButton";

const NewChatModalWindow = () => {
    const [chatName, setChatName] = useState("");

    const createNewChat = () => {
        const newChat = {
            id: chatsStore.chats[chatsStore.chats.length - 1].id + 1,
            name: chatName,
            isOpened: false,
            messages: []
        }

        makeFirebaseRequest("chats/update/chat", {companyId: getCompanyId(), chat: newChat});

        modalWindowsStore.changeNewChatModalOpened();
    }

    // TODO: Добавить модалку с сообщением об успешном добавлении чата и затемнять экран с модалкой

    return (
        <div className="absolute mt-[85px] mx-[40%] px-[20px] py-[15px] w-[20%] h-auto bg-[#ffffff] border-2 border-[#2076d2] rounded-[10px] z-30">
            <button onClick={() => modalWindowsStore.changeNewChatModalOpened()} className="absolute top-[-20px] right-[-20px] w-[45px] h-[45px] cursor-pointer z-30">
                <img src="/static/icons/XMarkIcon.svg" alt="Button: close new chat creation window" className="w-[35px] h-[35px]"/>
            </button>

            <h2 className="text-[#0d141c] text-[1.75rem] text-left font-['Space_Grotesk'] font-bold">New chat</h2>

            <form className="mt-[20px]">
                <TextField type="text" label="Enter chat name" required={true} onChange={(event) => setChatName(event.target.value)} className="relative row-span-1 w-full h-[50px] border-2 rounded-[10px]"/>

                <ContainedButton styles={"mt-[40px] w-[200px] h-[50px] text-[#ffffff]"} text={"Create"} handleFunction={createNewChat}/>
            </form>
        </div>
    );
};

export default NewChatModalWindow;