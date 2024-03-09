import { action, makeAutoObservable } from "mobx";

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
  }
}

export default new ModalWindowsStore();
