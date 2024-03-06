import {ref, set} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function createNewUser(userId: string, displayName: string, userEmail: string, isCompanyOwner: boolean) {
    try {
        const response = await set(ref(database, "users/" + userId), {
            userId: userId,
            displayName: displayName,
            userEmail: userEmail,
            isCompanyOwner: isCompanyOwner,
            connectionStatus: 10,
            userAvatar: ""
        });

        handleFirebaseSuccess("Successful user creation");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during user creation: ", error);
    }
}