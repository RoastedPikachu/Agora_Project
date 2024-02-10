import {createUserWithEmailAndPassword} from "@firebase/auth";

import {auth} from "../config";

export default async function firebaseSignUp(email:string, password:string) {
    let result = null;
    let error = null;

    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}