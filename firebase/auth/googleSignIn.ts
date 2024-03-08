import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../config";
import {handleFirebaseError, handleFirebaseSuccess} from "@/utils/generalFunctions";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account "
});
export const signInWithGooglePopup = () => {
    signInWithPopup(auth, provider)
        .then(() => {
            handleFirebaseSuccess("Successful sign in with Google");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during Google authentication: ", err);
        })
}