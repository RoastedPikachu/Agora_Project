import {action, makeAutoObservable} from "mobx";

class ModalWindowsStore {
    isInviteCodeModalOpened = false;

    constructor() {
        makeAutoObservable(this);
    }

    @action changeInviteCodeModalOpened()  {
        this.isInviteCodeModalOpened = !this.isInviteCodeModalOpened;
    }
}

export default new ModalWindowsStore();