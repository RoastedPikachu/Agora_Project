"use client";
import React from "react";

import { Observer, observer } from "mobx-react-lite";

import modalWindowsStore from "@/app/store/modalWindowsStore";

import MessangerSidebar from "@/widgets/MessangerSidebar";
import TheMessangerPageHeader from "@/widgets/TheMessangerPageHeader";

import InviteCodeModalWindow from "@/shared/InviteCodeModalWindow";
import ChatManager from "@/shared/ChatManager";

const Page = observer(() => {
  return (
    <Observer>
      {() => (
        <>
          {modalWindowsStore.isInviteCodeModalOpened && (
            <InviteCodeModalWindow />
          )}

          {modalWindowsStore.isChatManagerModalOpened && <ChatManager />}

          <TheMessangerPageHeader />

          <main className="relative flex w-full h-auto">
            <MessangerSidebar />

            <section className="relative px-[30px] py-[20px] w-[75%] h-[calc(100vh-65px)]">
              <div className="relative w-full h-[calc(100vh-160px)]"></div>

              <div className="relative flex items-center w-full h-[50px]">
                <div className="w-[50px] h-[50px] bg-[#747474] rounded-[10px]"></div>

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
                    placeholder="Message #channel"
                    className="ml-[20px] w-full h-[50px] bg-[#e5e8eb] text-[#0d141c] placeholder:text-[#4f7396] text-[1.25rem] font-medium outline-0"
                  />

                  <button>
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
