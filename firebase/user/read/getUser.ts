import {ref, get} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function getUser(userId: string) {
    get(ref(database, "users/" + userId))
        .then((res) => {
            handleFirebaseSuccess("Successful user receiving");

            return res;
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during user receiving: ", err);
        });
}