"use client";
import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import makeFirebaseRequest from "../../firebase/endpoints";

import chatsStore from "@/app/store/chatsStore";

import { getCompanyId } from "@/utils/generalFunctions";

import modalWindowsStore from "@/app/store/modalWindowsStore";

import ContainedButton from "@/shared/ContainedButton";

const ChatManager = () => {
  const [chatName, setChatName] = useState("");
  const [isNewChatCreation, changeIsNewChatCreation] = useState(false);

  const createNewChat = () => {
    const newChat = {
      id: chatsStore.chats[chatsStore.chats.length - 1].id + 1,
      name: chatName,
      isOpened: false,
      messages: [],
    };

    makeFirebaseRequest("chats/update/chat", {
      companyId: getCompanyId(),
      chat: newChat,
    });

    changeIsNewChatCreation(false);
  };

  // TODO: Добавить модалку с сообщением об успешном добавлении чата и затемнять экран с модалкой

  return (
    <div className="absolute mt-[85px] mx-[40%] px-[20px] py-[15px] w-[20%] h-auto bg-[#ffffff] border-2 border-[#2076d2] rounded-[10px] z-30">
      <button
        onClick={() => modalWindowsStore.changeChatManagerModalOpened()}
        className="absolute top-[-20px] right-[-20px] w-[45px] h-[45px] cursor-pointer z-30"
      >
        <img
          src="/static/icons/XMarkRoundedIcon.svg"
          alt="Button: close new chat creation window"
          className="w-[35px] h-[35px]"
        />
      </button>

      {!isNewChatCreation && (
        <>
          <h2 className="text-[#0d141c] text-[1.75rem] text-left font-['Space_Grotesk'] font-bold">
            Manage your chats
          </h2>

          {chatsStore.chats?.map((chat) => (
            <div
              key={chat.id}
              className="flex justify-between items-center mt-[20px] w-full h-[40px]"
            >
              <p className="text-[#0d141c] text-[1.5rem] text-left font-['Space_Grotesk'] font-medium">
                {chat.name}
              </p>

              <img
                src="/static/icons/XmarkIcon.svg"
                alt=""
                className="w-[20px] h-[20px]"
              />
            </div>
          ))}

          <ContainedButton
            styles={"mt-[20px] w-[200px] h-[50px] text-[#ffffff]"}
            text={"Add new chat"}
            handleFunction={() => changeIsNewChatCreation(true)}
          />
        </>
      )}

      {isNewChatCreation && (
        <>
          <h2 className="text-[#0d141c] text-[1.75rem] text-left font-['Space_Grotesk'] font-bold">
            Create new chat
          </h2>

          <form className="mt-[20px]">
            <TextField
              type="text"
              label="Enter chat name"
              required={true}
              onChange={(event) => setChatName(event.target.value)}
              className="relative row-span-1 w-full h-[50px] border-2 rounded-[10px]"
            />

            <ContainedButton
              styles={"mt-[40px] w-[200px] h-[50px] text-[#ffffff]"}
              text={"Create"}
              handleFunction={createNewChat}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default ChatManager;
