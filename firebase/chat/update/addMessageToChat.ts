import {ref, update} from "firebase/database";

import {database} from "../../config";

import firebaseGetCompanyById from "../../company/read/getCompany";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

interface Message {
    id: number;
    author: string;
    sendDate: string;
    text: string;
}

interface Chat {
    id: number;
    name: string;
    messages: Message[];
}

export default function addMessageToChat(companyId: string, targetChatId: number, message: Message) {
    const company = firebaseGetCompanyById(companyId);

    const chat = company?.val().chats.find((chat: Chat) => chat.id === targetChatId);
    chat.push(message);

    update(ref(database, "companies/" + companyId), {
        chats: [...company?.val().chats, chat]
    })
        .then(() => {
            handleFirebaseSuccess("Successful user addition");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during user addition: ", err);
        });
}