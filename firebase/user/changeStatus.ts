import {ref, update} from "firebase/database";

import {database} from "../config";

export default async function firebaseChangeUserAvatar(userId: string, statusCode: number) {
    let result = null;
    let error = null;

    try {
        result = update(ref(database, "users/" + userId), {
            connectionStatus: statusCode
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}