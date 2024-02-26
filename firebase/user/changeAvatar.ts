import {ref, update} from "firebase/database";

import {database} from "../config";

export default async function firebaseChangeUserAvatar(userId: string, avatarPath: string) {
    let result = null;
    let error = null;

    try {
        result = update(ref(database, "users/" + userId), {
            userAvatar: avatarPath
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}