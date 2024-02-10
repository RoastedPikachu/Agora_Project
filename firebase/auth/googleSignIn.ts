import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../config";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account "
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);