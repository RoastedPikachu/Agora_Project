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
    isOpened: boolean;
    messages: Message[];
}

export default async function firebaseAddChatToCompany(companyId: string | null, chat: Chat) {
    let result = null;

    try {
        const response = await firebaseGetCompanyById(companyId);

        const companyChats = response?.val().chats;

        console.log(companyChats);
        console.log(chat);

        result = update(ref(database, "companies/" + companyId), {
            chats: [...companyChats, chat]
        });
    } catch (err:any) {
        console.error("Error during addChat request:", err);
    }

    return result;
}