import { action, makeAutoObservable } from "mobx";

import firebaseGetChatsFromCompany from "../../../firebase/chat/read/getChats";

import { getCompanyId } from "@/utils/generalFunctions";
import makeFirebaseRequest from "../../../firebase/endpoints";

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

class ModalWindowsStore {
  isLoading = false;
  chats = [] as Chat[];

  constructor() {
    makeAutoObservable(this);
    this.getChats();
  }

  changeActiveChat(targetId: number) {
    this.chats = this.chats.map((chat) =>
      chat.id === targetId
        ? { ...chat, isOpened: true }
        : { ...chat, isOpened: false },
    );
  }

  @action async getChats() {
    this.isLoading = true;

    try {
      this.chats = await makeFirebaseRequest("chats/get", {
        companyId: getCompanyId(),
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default new ModalWindowsStore();
