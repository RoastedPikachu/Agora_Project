import {ref, get} from "firebase/database";

import {database} from "../../config";

export default async function firebaseGetUser(userId: string) {
    let result = null;
    let error = null;

    try {
        result = get(ref(database, "users/" + userId))
    } catch (err:any) {
        error = err;
    }

    return result;
}