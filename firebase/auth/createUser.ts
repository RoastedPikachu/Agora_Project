import {ref, set} from "firebase/database";

import {database} from "../config";

export default async function firebaseCreateNewUser(userId: string, displayName: string, userEmail: string, isCompanyOwner: boolean) {
    let result = null;
    let error = null;

    try {
        set(ref(database, "users/" + userId), {
            userId: userId,
            displayName: displayName,
            userEmail: userEmail,
            isCompanyOwner: isCompanyOwner,
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}