import {ref, update} from "firebase/database";

import {database} from "../../config";
import firebaseGetCompanyById from "../read/getCompany";

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

export default async function firebaseAddChatToCompany(companyId: string | null, chat: string) {
    let result = null;
    let error = null;

    try {
        const response = await firebaseGetCompanyById(companyId);

        result = update(ref(database, "companies/" + companyId), {
            chats: [...response?.val().chats, chat]
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}