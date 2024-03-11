import { action, makeAutoObservable } from "mobx";

import {auth} from "../../../firebase/config";

import makeFirebaseRequest from "../../../firebase/endpoints";

class UserStore {
    userName = "";

    constructor() {
        makeAutoObservable(this);
    }

    @action async getUserName() {
        const user = await makeFirebaseRequest("user/get", {
            userId: auth.currentUser?.uid,
        });

        this.userName = user.val().displayName;
    };
}

export default new UserStore();
