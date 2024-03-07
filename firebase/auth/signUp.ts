import {createUserWithEmailAndPassword} from "@firebase/auth";

import {auth} from "../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function firebaseSignUp(email:string, password:string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            handleFirebaseSuccess("Successful sign up");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during sign up: ", err);
        });
}