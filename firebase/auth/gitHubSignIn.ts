import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

import { auth } from '../config';

import {handleFirebaseError, handleFirebaseSuccess} from "@/utils/generalFunctions";

const provider = new GithubAuthProvider();

export const signInWithGithubPopup = () => {
    signInWithPopup(auth, provider)
        .then(() => {
            handleFirebaseSuccess("Successful sign in with GitHub");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during GitHub authentication: ", err);
        })
}