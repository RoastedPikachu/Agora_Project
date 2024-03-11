"use client";
import React, {useState} from "react";

import { Observer, observer } from "mobx-react-lite";

import chatsStore from "@/app/store/chatsStore";
import modalWindowsStore from "@/app/store/modalWindowsStore";

import makeFirebaseRequest from "../../../firebase/endpoints";

import {getCompanyId} from "@/utils/generalFunctions";

import MessangerSidebar from "@/widgets/MessangerSidebar";
import TheMessangerPageHeader from "@/widgets/TheMessangerPageHeader";

import InviteCodeModalWindow from "@/shared/InviteCodeModalWindow";
import ChatManager from "@/shared/ChatManager";

const Page = observer(() => {
  const [messageText, setMessageText] = useState("");

  function getSendTime(): string {
    const date = new Date;

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  const handleNewMessage = () => {
     makeFirebaseRequest("chats/update/message", {
       companyId: getCompanyId(),
       chatId: chatsStore.currentChat.id,
       sendTime: getSendTime(),
       messageText: messageText
     })
  }

  return (
    <Observer>
      {() => (
        <>
          {modalWindowsStore.isInviteCodeModalOpened && (
            <InviteCodeModalWindow />
          )}

          <ChatManager />

          <TheMessangerPageHeader />

          <main className="relative flex w-full h-auto">
            <MessangerSidebar />

            <section className="relative px-[30px] py-[20px] w-[75%] h-[calc(100vh-65px)]">
              <div className="relative w-full h-[calc(100vh-160px)]"></div>

              <div className="relative flex items-center w-full h-[50px]">
                <div className="w-[50px] h-[50px] rounded-[10px]">
                  <img
                    src="/static/messangerPage/icons/DefaultAvatarIcon.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>

                <div className="flex items-center ml-[20px] px-[20px] w-full h-[50px] bg-[#e5e8eb] rounded-[10px]">
                  <button>
                    <img
                      src="/static/messangerPage/icons/AttachIcon.svg"
                      alt=""
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </button>

                  <input
                    type="text"
                    placeholder={`Message #${
                      chatsStore.currentChat.name || "There will be chat name"
                    }`}
                    onChange={(event) => setMessageText(event.target.value)}
                    className="ml-[20px] w-full h-[50px] bg-[#e5e8eb] text-[#0d141c] placeholder:text-[#4f7396] text-[1.25rem] font-medium outline-0"
                  />

                  <button onClick={handleNewMessage}>
                    <img
                      src="/static/messangerPage/icons/SendMessageIcon.svg"
                      alt=""
                      className="ml-[20px] w-[22.5px] h-[22.5px]"
                    />
                  </button>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </Observer>
  );
});

export default Page;
