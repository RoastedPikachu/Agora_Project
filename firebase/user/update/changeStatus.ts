import {ref, update} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/utils/generalFunctions";

export default function changeUserStatus(userId: string, statusCode: number) {
    update(ref(database, "users/" + userId), {
        connectionStatus: statusCode
    })
        .then(() => {
            handleFirebaseSuccess("Successful user status change");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during user status change: ", err);
        });
}