import {action, makeAutoObservable} from "mobx";

class ModalWindowsStore {
    isInviteCodeModalOpened = false;
    isNewChatModalOpened = false;

    constructor() {
        makeAutoObservable(this);
    }

    @action changeInviteCodeModalOpened()  {
        this.isInviteCodeModalOpened = !this.isInviteCodeModalOpened;
    }

    @action changeNewChatModalOpened() {
        this.isNewChatModalOpened = !this.isNewChatModalOpened;
    }
}

export default new ModalWindowsStore();