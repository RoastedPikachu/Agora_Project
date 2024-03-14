"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import modalWindowsStore from "@/app/store/modalWindowsStore";

import MessangerSidebar from "@/widgets/MessangerSidebar";
import TheMessangerPageHeader from "@/widgets/TheMessangerPageHeader";

import InviteCodeModalWindow from "@/widgets/modals/InviteCodeModalWindow";
import ChatManager from "@/widgets/modals/ChatManager";
import ChatInputField from "@/widgets/ChatInputField";
import MessageSpace from "@/widgets/MessageSpace";

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
              <MessageSpace />

              <ChatInputField />
            </section>
          </main>
        </>
      )}
    </Observer>
  );
});

export default Page;
