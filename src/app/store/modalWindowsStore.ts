import { action, makeAutoObservable } from "mobx";
import chatsStore from "@/app/store/chatsStore";

class ModalWindowsStore {
  isInviteCodeModalOpened = false;
  isChatManagerModalOpened = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action changeInviteCodeModalOpened() {
    this.isInviteCodeModalOpened = !this.isInviteCodeModalOpened;
  }

  @action changeChatManagerModalOpened() {
    this.isChatManagerModalOpened = !this.isChatManagerModalOpened;

    chatsStore.changeIsNewChatCreation(false);
  }
}

export default new ModalWindowsStore();
