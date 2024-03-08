import {createUserWithEmailAndPassword} from "@firebase/auth";

import {auth} from "../config";

import makeFirebaseRequest from "../endpoints";

import authStore from "@/app/store/authStore";

import {handleFirebaseSuccess, handleFirebaseError} from "@/utils/generalFunctions";

export default function signUpWithNewCompany(email:string, password:string, companyName: string, companyAvatar: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
            const user = res.user;
            const userName = authStore.name;

            Promise.all([
                makeFirebaseRequest("user/create", {userId: user.uid, displayName: userName, email: user.email, isCompanyOwner: true}),
                makeFirebaseRequest("company/create", {companyId: crypto.randomUUID(), name: companyName, avatarPath: companyAvatar, initialUserEmail: user.email}),
            ])
                .then(() => {
                    handleFirebaseSuccess("Successful sign up");

                    authStore.signUp();

                    setInterval(() => {
                        if (auth.currentUser) {
                            makeFirebaseRequest("auth/checkSession", {});
                        }
                    }, 3600000);
                });
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during sign up: ", err);
        });
}