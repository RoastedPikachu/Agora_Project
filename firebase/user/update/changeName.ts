import {ref, update} from "firebase/database";

import {database} from "../../config";

export default async function firebaseChangeUserName(userId: string, displayName: string) {
    let result = null;
    let error = null;

    try {
        result = update(ref(database, "users/" + userId), {
            displayName: displayName
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}