import {signInWithEmailAndPassword} from "@firebase/auth";

import {auth} from "../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function signIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            handleFirebaseSuccess("Successful sign in");

            return res;
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during credentials authentication: ", err);
        });
}