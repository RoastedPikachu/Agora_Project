"use client";
import React, { useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import makeFirebaseRequest from "../../firebase/endpoints";

import chatsStore from "@/app/store/chatsStore";

import { getCompanyId } from "@/utils/generalFunctions";

const ChatInputField = observer(() => {
  const [messageText, setMessageText] = useState("");

  function getSendTime(): string {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  const handleNewMessage = () => {
    makeFirebaseRequest("chats/update/message", {
      companyId: getCompanyId(),
      chatId: chatsStore.currentChat.id,
      sendTime: getSendTime(),
      messageText: messageText,
    });

    chatsStore.getChats();
  };

  return (
    <Observer>
      {() => (
        <div className="relative flex items-center w-full h-[50px]">
          <div className="w-[50px] h-[50px] rounded-[10px]">
            <img
              src="/static/messengerPage/icons/DefaultAvatarIcon.svg"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="flex items-center ml-[20px] px-[20px] w-full h-[50px] bg-[#e5e8eb] rounded-[10px]">
            <button>
              <img
                src="/static/messengerPage/icons/AttachIcon.svg"
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
                src="/static/messengerPage/icons/SendMessageIcon.svg"
                alt=""
                className="ml-[20px] w-[22.5px] h-[22.5px]"
              />
            </button>
          </div>
        </div>
      )}
    </Observer>
  );
});

export default ChatInputField;
