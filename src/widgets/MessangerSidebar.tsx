"use client";
import React from 'react';

import {Observer, observer} from "mobx-react-lite";

import firebaseAddChatToCompany from "../../firebase/chat/update/addChat";

import chatsStore from "@/app/store/chatsStore";
import {getCompanyId} from "@/lib/generalFunctions";

const MessangerSidebar = observer(() => {

    const createNewChat = () => {
        // TODO: Change chat creation system to modal window
        const chatName = prompt("Enter chat name") as string;

        const newChat = {
            id: chatsStore.chats[chatsStore.chats.length - 1].id + 1,
            name: chatName,
            isOpened: false,
            messages: []
        }

        firebaseAddChatToCompany(getCompanyId(), newChat);
    }

    return <Observer>{() =>
        <aside className="relative px-[50px] py-[30px] w-[25%] max-w-[510px] h-[calc(100vh-65px)] border-r-2 border-[#e5e8eb]">
            <div className="grid justify-items-start grid-rows-[6] grid-cols-1 gap-y-[15px] h-auto">
                <h2 className="text-[#0d141c] text-[1.75rem] font-bold">Channels</h2>

                {chatsStore.chats?.map(chat => (
                    <button key={chat.id}
                            onClick={() => chatsStore.changeActiveChat(chat.id)}
                            className={`${chat.isOpened ? `w-full bg-[#e5e8eb] rounded-[10px]` : ""} flex items-center px-[20px] h-[50px]`}
                    >
                        <img src="/static/messangerPage/icons/ChatIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                        <p className="ml-[20px] text-[#0d141c] text-[1.375rem] text-left font-semibold">{chat.name}</p>
                    </button>
                ))}

                <button onClick={() => createNewChat()} className="flex items-center px-[20px] h-[50px]">
                    <img src="/static/messangerPage/icons/AddIcon.svg" alt="" className="w-[25px] h-[25px]"/>

                    <p className="ml-[20px] text-[#0d141c] text-[1.375rem] text-left font-semibold">Add new Chat</p>
                </button>
            </div>
        </aside>
    }</Observer>;
});

export default MessangerSidebar;