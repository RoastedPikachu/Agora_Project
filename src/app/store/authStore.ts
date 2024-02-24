import {makeAutoObservable} from "mobx";

class AuthStore {
    name = "";
    email = "";
    password = "";

    inviteCode = "";

    constructor() {
       makeAutoObservable(this);
    }

    setName(name: string) {
        this.name = name;
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
        this.name = "";
        this.email = "";
        this.password = "";
    }
}

export default new AuthStore();