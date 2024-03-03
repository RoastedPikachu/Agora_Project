"use client";
import React, {useState, useEffect} from 'react';

import firebaseGetChatsFromCompany from "../../firebase/chat/read/getChats";

import {getCompanyId} from "@/lib/generalFunctions";

interface Message {
    id: number;
    author: string;
    sendDate: string;
    text: string;
}

interface Chat {
    id: number;
    name: string;
    isOpened: boolean;
    messages: Message[];
}

const MessangerSidebar = () => {
    const [chats, setChats] = useState([] as Chat[]);

    const changeActiveCategory = (targetId: number) => {
        setChats(chats.map((chat) => chat.id === targetId ? {...chat, isOpened: true} : {...chat, isOpened: false}));
    }

    useEffect(() => {
        firebaseGetChatsFromCompany(getCompanyId())
            .then(res => {
                setChats(res);
            })
    }, []);
    return (
        <aside className="relative px-[50px] py-[30px] w-[20%] h-[calc(100vh-65px)] border-r-2 border-[#e5e8eb]">
            <div className="grid justify-items-start grid-rows-[6] grid-cols-1 gap-y-[15px] h-auto">
                <h2 className="text-[#0d141c] text-[1.75rem] font-bold">Channels</h2>

                {chats.map(chat => (
                    <button key={chat.id}
                            onClick={() => changeActiveCategory(chat.id)}
                            className={`${chat.isOpened ? `w-full bg-[#e5e8eb] rounded-[10px]` : ""} flex items-center px-[20px] h-[50px]`}
                    >
                        <img src="/static/messangerPage/icons/ChatIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                        <p className="ml-[20px] text-[#0d141c] text-[1.375rem] text-left font-semibold">{chat.name}</p>
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default MessangerSidebar;