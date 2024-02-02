import firebaseApp from "../config";

import {signInWithEmailAndPassword, getAuth} from "@firebase/auth";

const auth = getAuth(firebaseApp);

export default async function firebaseSignIn(email: string, password: string) {
    let result = null;
    let error = null;

    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}