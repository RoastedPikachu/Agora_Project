import {ref, update} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function changeUserName(userId: string, displayName: string) {
    try {
        const response = await update(ref(database, "users/" + userId), {
            displayName: displayName
        });
        
        handleFirebaseSuccess("Successful user name change");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during user name change: ", error);
    }
}