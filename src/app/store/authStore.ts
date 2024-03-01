import {makeAutoObservable} from "mobx";

class AuthStore {
    name = "";
    email = "";
    password = "";

    inviteCode = "";

    isSignUp = false;

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

    signUp() {
        this.isSignUp = true;
    }

    signOut() {
        this.isSignUp = false;
    }

    clearCredentials() {
        this.name = "";
        this.email = "";
        this.password = "";
    }
}

export default new AuthStore();