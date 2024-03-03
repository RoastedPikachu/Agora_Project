import {ref, update} from "firebase/database";

import {database} from "../../config";
import firebaseGetCompanyById from "../../company/read/getCompany";

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

export default async function firebaseAddUserToCompany(companyId: string | null, targetChatId: number, message: Message) {
    let result = null;
    let error = null;

    try {
        const response = await firebaseGetCompanyById(companyId);

        const chat = response?.val().chats.find((chat: Chat) => chat.id === targetChatId);
        chat.push(message);

        result = update(ref(database, "companies/" + companyId), {
            chats: [...response?.val().chats, chat]
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}