import {makeAutoObservable} from "mobx";

class ModalWindowsStore {
    isInviteCodeModalOpened = false;

    constructor() {
        makeAutoObservable(this);
    }

    changeInviteCodeModalOpened()  {
        this.isInviteCodeModalOpened = !this.isInviteCodeModalOpened;
    }
}

export default new ModalWindowsStore();