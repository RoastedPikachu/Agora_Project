import {createUserWithEmailAndPassword} from "@firebase/auth";

import {auth} from "../config";

import makeFirebaseRequest from "../endpoints";

import authStore from "@/app/store/authStore";

import {getCompanyIdFromInviteCode, handleFirebaseSuccess, handleFirebaseError} from "@/utils/generalFunctions";

export default function signUpWithInviteCode(email:string, password:string, inviteCode: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
            const user = res.user;
            const userName = authStore.name;

            const company = await makeFirebaseRequest("company/get", {companyId: getCompanyIdFromInviteCode(inviteCode)});

            Promise.all([
                makeFirebaseRequest("user/create", {userId: user.uid, displayName: userName, email: user.email, isCompanyOwner: true}),
                makeFirebaseRequest("company/update/user", {companyId: company.val().companyId, userEmail: user.email})
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