import {ref, update} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function changeUserStatus(userId: string, statusCode: number) {
    try {
        const response = update(ref(database, "users/" + userId), {
            connectionStatus: statusCode
        });

        handleFirebaseSuccess("Successful user status change");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during user status change: ", error);
    }
}