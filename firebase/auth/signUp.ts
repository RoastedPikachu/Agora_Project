import firebaseApp from "../config";

import {createUserWithEmailAndPassword, getAuth} from "@firebase/auth";

const auth = getAuth(firebaseApp);

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