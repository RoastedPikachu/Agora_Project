import {ref, update} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function changeUserAvatar(userId: string, avatarPath: string) {
    try {
        const response = await update(ref(database, "users/" + userId), {
            userAvatar: avatarPath
        });

        handleFirebaseSuccess("Successful user avatar change");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during user avatar change: ", error);
    }
}