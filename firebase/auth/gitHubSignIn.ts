import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

import { auth } from '../config';

import {handleFirebaseError, handleFirebaseSuccess} from "@/lib/generalFunctions";

const provider = new GithubAuthProvider();

export const signInWithGithubPopup = () => {
    signInWithPopup(auth, provider)
        .then(() => {
            handleFirebaseSuccess("Successful sign in with GitHub");
        })
        .catch((error) => {
            handleFirebaseError("Error during GitHub authentication: ", error);
        })
}