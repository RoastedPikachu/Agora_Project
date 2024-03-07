import {auth} from "../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function checkSessionExpiration() {
    const lastSignInTime = auth.currentUser?.metadata.lastSignInTime as string;
    
    const timeToSignOut = 2592000000; // 30 days in milliseconds

    const currentTime = new Date().getTime();

    if (currentTime - new Date(lastSignInTime).getTime() >= timeToSignOut) {
        auth.signOut()
            .then(() => {
                handleFirebaseSuccess("User signed out");
            })
            .catch((err: Error) => {
                handleFirebaseError("Error signing out user: ", err);
            });
    }
}
