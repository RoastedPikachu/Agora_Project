import signIn from "./auth/signIn";
import {signInWithGithubPopup} from "./auth/gitHubSignIn";
import {signInWithGooglePopup} from "./auth/googleSignIn";
import signUpWithInviteCode from "./auth/signUpWithInviteCode";
import signUpWithNewCompany from "./auth/signUpWithNewCompany";
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

import addChatToCompany from "./chat/update/addChat";
import getChatsFromCompany from "./chat/read/getChats";
import removeChatFromCompany from "./chat/delete/deleteChat";
import addMessageToChat from "./chat/update/addMessageToChat";

import {Chat, Message} from "@/utils/generalInterfaces";

interface FirebaseAuthRequestBody {
    email: string;
    password: string;
    inviteCode?: string;
    companyName?: string;
    companyAvatar?: string;
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

interface FirebaseChatRequestBody {
    companyId: string;
    chatId?: number;
    chat?: Chat;
    message?: Message;
}

type RequestBodyInterface = FirebaseAuthRequestBody | FirebaseUserRequestBody | FirebaseCompanyRequestBody | FirebaseChatRequestBody | {};

const isFirebaseAuthBody = (body: RequestBodyInterface): body is FirebaseAuthRequestBody => {
    return 'email' in body && 'password' in body;
}

const isFirebaseUserBody = (body: RequestBodyInterface): body is FirebaseUserRequestBody => {
    return "userId" in body;
}

// Эта функция также используется для чатов, потому что все действия в них и с ними привязаны к компании

const isFirebaseCompanyBody = (body: RequestBodyInterface): body is FirebaseCompanyRequestBody => {
    return "companyId" in body;
}

export default function makeFirebaseRequest(targetEndpoint: string, body: RequestBodyInterface) {
    switch(targetEndpoint) {
        case "auth/checkSession":
            checkSessionExpiration();
            break;
        case "auth/signIn":
            if(isFirebaseAuthBody(body) ) {
                signIn(body.email, body.password);
            }
            break;
        case "auth/signUp/inviteCode":
            if(isFirebaseAuthBody(body) && "inviteCode" in body) {
                signUpWithInviteCode(body.email, body.password, body.inviteCode);
            }
            break;
        case "auth/signUp/company":
            if(isFirebaseAuthBody(body) && "companyName" in body && "companyAvatar" in body) {
                signUpWithNewCompany(body.email, body.password, body.companyName, body.companyAvatar);
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
                return createNewUser(body.userId, body.displayName, body.email, body.isCompanyOwner);
            }
            break;
        case "user/get":
            if(isFirebaseUserBody(body)) {
                return getUser(body.userId);
            }
            break;
        case "user/update/avatar":
            if(isFirebaseUserBody(body) && "avatarPath" in body) {
                changeUserAvatar(body.userId, body.avatarPath!);
            }
            break;
        case "user/update/name":
            if(isFirebaseUserBody(body) && "displayName" in body) {
                changeUserName(body.userId, body.displayName!);
            }
            break;
        case "user/update/status":
            if(isFirebaseUserBody(body) && "statusCode" in body) {
                changeUserStatus(body.userId, body.statusCode!);
            }
            break;
        case "company/create":
            if(isFirebaseCompanyBody(body) && "name" in body && "avatarPath" in body && "initialUserEmail" in body) {
                return createNewCompany(body.companyId, body.name, body.avatarPath, body.initialUserEmail);
            }
            break;
        case "company/get":
            if(isFirebaseCompanyBody(body)) {
                return getCompany(body.companyId);
            }
            break;
        case "company/update/inviteCode":
            if(isFirebaseCompanyBody(body) && "inviteCode" in body) {
                setCompanyInviteCode(body.companyId, body.inviteCode!);
            }
            break;
        case "company/update/user":
            if(isFirebaseCompanyBody(body) && "userEmail" in body) {
                return addUserToCompany(body.companyId, body.userEmail!);
            }
            break;
        case "chats/get":
            if(isFirebaseCompanyBody(body)) {
                return getChatsFromCompany(body.companyId);
            }
            break;
        case "chats/update/chat":
            if(isFirebaseCompanyBody(body) && "chat" in body) {
                addChatToCompany(body.companyId, body.chat as Chat);
            }
            break;
        case "chats/update/message":
            if(isFirebaseCompanyBody(body) && "chatId" in body && "message" in body) {
                addMessageToChat(body.companyId, body.chatId as number, body.message as Message);
            }
            break;
        case "chats/delete/chat":
            if(isFirebaseCompanyBody(body) && "chatId" in body) {
                removeChatFromCompany(body.companyId, body.chatId as number);
            }
            break;
    }
}