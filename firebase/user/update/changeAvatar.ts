import {ref, update} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function changeUserAvatar(userId: string, avatarPath: string) {
    update(ref(database, "users/" + userId), {
        userAvatar: avatarPath
    })
        .then(() => {
            handleFirebaseSuccess("Successful user avatar change");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during user avatar change: ", err);
        });
}