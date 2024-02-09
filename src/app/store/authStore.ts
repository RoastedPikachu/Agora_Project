import {makeAutoObservable} from "mobx";

class AuthStore {
    email = "";
    password = "";

    inviteCode = "";

    constructor() {
       makeAutoObservable(this);
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setInviteCode(code: string) {
        this.inviteCode = code;
    }

    clearCredentials() {
        this.email = "";
        this.password = "";
    }
}

export default new AuthStore();