import signIn from "./auth/signIn";
import signUp from "./auth/signUp";
import {signInWithGithubPopup} from "./auth/gitHubSignIn";
import {signInWithGooglePopup} from "./auth/googleSignIn";
import checkSessionExpiration from "./auth/checkSessionExpiration";

import getUser from "./user/read/getUser";
import createNewUser from "./user/create/createUser";
import changeUserName from "./user/update/changeName";
import changeUserAvatar from "./user/update/changeAvatar";
import changeUserStatus from "./user/update/changeStatus";

import getCompany from "./company/read/getCompany";
import createNewCompany from "./company/create/createCompany";
import addUserToCompany from "./company/update/addUserToCompany";
import setCompanyInviteCode from "./company/update/addInviteCode";

interface FirebaseAuthRequestBody {
    email: string;
    password: string;
}

interface FirebaseUserRequestBody {
    userId: string;
    displayName?: string;
    email?: string;
    isCompanyOwner?: boolean;
    avatarPath?: string;
    statusCode?: number;
}

interface FirebaseCompanyRequestBody {
   companyId: string;
   name?: string;
   avatarPath?: string;
   initialUserEmail?: string;
   inviteCode?: string;
   userEmail?: string;
}

type RequestBodyInterface = FirebaseAuthRequestBody | FirebaseUserRequestBody | FirebaseCompanyRequestBody | {};

const isFirebaseAuthBody = (body: RequestBodyInterface): body is FirebaseAuthRequestBody => {
    return 'email' in body && 'password' in body;
}

const isFirebaseUserBody = (body: RequestBodyInterface): body is FirebaseUserRequestBody => {
    return "userId" in body;
}

const isFirebaseCompanyBody = (body: RequestBodyInterface): body is FirebaseCompanyRequestBody => {
    return "companyId" in body;
}

export default function makeFirebaseRequest(targetEndpoint: string, body: RequestBodyInterface) {
    switch(targetEndpoint) {
        case "auth/checkSession":
            checkSessionExpiration();
            break;
        case "auth/signIn":
            if(isFirebaseAuthBody(body)) {
                return signIn(body.email, body.password);
            }
            break;
        case "auth/signUp":
            if(isFirebaseAuthBody(body)) {
                return signUp(body.email, body.password);
            }
            break;
        case "auth/gitHubSignIn":
            signInWithGithubPopup();
            break;
        case "auth/googleSignIn":
            signInWithGooglePopup();
            break;
        case "user/create":
            if(isFirebaseUserBody(body) && "displayName" in body && "email" in body && "isCompanyOwner" in body) {
                return createNewUser(body.userId, body.displayName!, body.email!, body.isCompanyOwner!);
            }
            break;
        case "user/get":
            if(isFirebaseUserBody(body)) {
                return getUser(body.userId);
            }
            break;
        case "user/update/avatar":
            if(isFirebaseUserBody(body) && "avatarPath" in body) {
                return changeUserAvatar(body.userId, body.avatarPath!);
            }
            break;
        case "user/update/name":
            if(isFirebaseUserBody(body) && "displayName" in body) {
                return changeUserName(body.userId, body.displayName!);
            }
            break;
        case "user/update/status":
            if(isFirebaseUserBody(body) && "statusCode" in body) {
                return changeUserStatus(body.userId, body.statusCode!);
            }
            break;
        case "company/create":
            // Здесь был баг с Property doesn't exist on type never, поэтому доступ к свойствам сделан таким образом
            if(isFirebaseCompanyBody(body) && "name" in body && "avatar" in body && "initialUserEmail" in body) {
                return createNewCompany(body["companyId"], body["name"], body["avatar"], body["initialUserEmail"]);
            }
            break;
        case "company/get":
            if(isFirebaseCompanyBody(body)) {
                return getCompany(body.companyId);
            }
            break;
        case "company/update/inviteCode":
            if(isFirebaseCompanyBody(body) && "inviteCode" in body) {
                return setCompanyInviteCode(body.companyId, body.inviteCode!);
            }
            break;
        case "company/update/user":
            if(isFirebaseCompanyBody(body) && "userEmail" in body) {
                return addUserToCompany(body.companyId, body.userEmail!);
            }
            break;
    }
}