import {createUserWithEmailAndPassword} from "@firebase/auth";

import {auth} from "../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function firebaseSignUp(email:string, password:string) {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);

        handleFirebaseSuccess("Successful sign up");
    } catch (error: any) {
        handleFirebaseError("Error during sign up: ", error);
    }
}