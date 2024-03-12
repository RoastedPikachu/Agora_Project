"use client";
import React, { useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import TextField from "@mui/material/TextField";

import makeFirebaseRequest from "../../../firebase/endpoints";

import chatsStore from "@/app/store/chatsStore";
import modalWindowsStore from "@/app/store/modalWindowsStore";

import { getCompanyId } from "@/utils/generalFunctions";

import ContainedButton from "@/shared/ContainedButton";

const ChatManager = observer(() => {
  const [chatName, setChatName] = useState("");

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

    chatsStore.changeIsNewChatCreation(false);
  };

  const deleteChat = (targetChatId: number) => {
    makeFirebaseRequest("chats/delete/chat", {
      companyId: getCompanyId(),
      chatId: targetChatId,
    });
  };

  // TODO: Добавить модалку с сообщением об успешном добавлении чата и затемнять экран с модалкой

  return (
    <Observer>
      {() => (
        <div
          className={`absolute ${
            modalWindowsStore.isChatManagerModalOpened
              ? "mt-[85px]"
              : "mt-[-100vh]"
          } mx-[32.5%] px-[20px] py-[15px] w-[35%] max-w-[500px] h-auto bg-[#ffffff] border-2 border-[#2076d2] rounded-[10px] duration-700 ease-in-out z-30`}
        >
          <button       
            onClick={() => modalWindowsStore.changeChatManagerModalOpened()}
            className="absolute top-[-12.5px] right-[-12.5px] cursor-pointer z-30"
          >
            <img
              src="/static/icons/XMarkRoundedIcon.svg"
              alt="Button: close new chat creation window"
              className="w-[35px] h-[35px]"
            />
          </button>

          {!chatsStore.isNewChatCreation && (
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

                  <button onClick={() => deleteChat(chat.id)}>
                    <img
                      src="/static/icons/XMarkIcon.svg"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />
                  </button>
                </div>
              ))}

              <ContainedButton
                styles={"mt-[20px] w-[200px] h-[50px] text-[#ffffff]"}
                text={"Add new chat"}
                handleFunction={() => chatsStore.changeIsNewChatCreation(true)}
              />
            </>
          )}

          {chatsStore.isNewChatCreation && (
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
      )}
    </Observer>
  );
});

export default ChatManager;
