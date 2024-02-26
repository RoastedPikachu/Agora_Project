import {auth} from "../config";

export default function firebaseCheckSessionExpiration() {
    const lastSignInTime = auth.currentUser?.metadata.lastSignInTime as string;
    const thirtyDays = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    const currentTime = new Date().getTime();

    if (currentTime - new Date(lastSignInTime).getTime() >= thirtyDays) {
        auth.signOut().then(() => {
            console.log("User signed out due to inactivity.");
        }).catch((error) => {
            console.error("Error signing out user: ", error);
        });
    }
}
