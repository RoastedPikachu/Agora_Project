import {signInWithEmailAndPassword} from "@firebase/auth";

import {auth} from "../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function signIn(email: string, password: string) {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);

        handleFirebaseSuccess("Successful sign in");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during credentials authentication: ", error);
    }
}