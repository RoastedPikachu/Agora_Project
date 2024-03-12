"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import modalWindowsStore from "@/app/store/modalWindowsStore";

import MessangerSidebar from "@/widgets/MessangerSidebar";
import TheMessangerPageHeader from "@/widgets/TheMessangerPageHeader";

import InviteCodeModalWindow from "@/widgets/modals/InviteCodeModalWindow";
import ChatManager from "@/widgets/modals/ChatManager";
import ChatInputField from "@/widgets/ChatInputField";
import Message from "../../../entities/Message";

const Page = observer(() => {
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
              <div className="relative w-full h-[calc(100vh-160px)]">
                <Message
                  id={1}
                  author={{
                    uid: "4234424fgdg",
                    avatarPath: "",
                    name: "John Smith",
                  }}
                  sendTime={"15:35"}
                  text={"Hello, what about some old jew genocide?"}
                />
              </div>

              <ChatInputField />
            </section>
          </main>
        </>
      )}
    </Observer>
  );
});

export default Page;
