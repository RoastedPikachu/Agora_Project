import {ref, set} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function createNewUser(userId: string, displayName: string, userEmail: string, isCompanyOwner: boolean) {
    set(ref(database, "users/" + userId), {
        userId: userId,
        displayName: displayName,
        userEmail: userEmail,
        isCompanyOwner: isCompanyOwner,
        connectionStatus: 10,
        userAvatar: ""
    })
        .then(() => {
            handleFirebaseSuccess("Successful user creation");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during user creation: ", err);
        });
}