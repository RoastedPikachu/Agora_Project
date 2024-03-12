import { action, makeAutoObservable } from "mobx";

import makeFirebaseRequest from "../../../firebase/endpoints";

import { getCompanyId } from "@/utils/generalFunctions";
import { Chat } from "@/utils/generalInterfaces";

class ModalWindowsStore {
  isLoading = false;
  isNewChatCreation = false;

  chats = [] as Chat[];

  currentChat = {} as Chat;

  constructor() {
    makeAutoObservable(this);
  }

  changeActiveChat(targetId: number) {
    this.chats = this.chats.map((chat) =>
      chat.id === targetId
        ? { ...chat, isOpened: true }
        : { ...chat, isOpened: false },
    );

    this.setCurrentChat(targetId);
  }

  setCurrentChat(targetId: number) {
    this.currentChat = this.chats.find((chat) => chat.id === targetId)!;
  }

  changeIsNewChatCreation(value: boolean) {
    this.isNewChatCreation = value;
  }

  @action async getChats() {
    this.isLoading = true;

    try {
      const response = await makeFirebaseRequest("chats/get", {
        companyId: getCompanyId(),
      });
      
      this.chats = response.val().chats;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default new ModalWindowsStore();
