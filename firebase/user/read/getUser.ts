import {ref, get} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function getUser(userId: string) {
    try {
        const response = await get(ref(database, "users/" + userId));

        handleFirebaseSuccess("Successful user receiving");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during user receiving: ", error);
    }
}