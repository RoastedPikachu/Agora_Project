import {ref, update} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function changeUserName(userId: string, displayName: string) {
    update(ref(database, "users/" + userId), {
        displayName: displayName
    })
        .then(() => {
            handleFirebaseSuccess("Successful user name change");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during user name change: ", err);
        });
}