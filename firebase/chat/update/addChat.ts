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
    isOpened: boolean;
    messages: Message[];
}

export default function addChatToCompany(companyId: string, chat: Chat) {
    const company = firebaseGetCompanyById(companyId);

    const companyChats = company?.val().chats;

    update(ref(database, "companies/" + companyId), {
        chats: [...companyChats, chat]
    })
        .then(() => {
            handleFirebaseSuccess("Successful chat addition");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during chat addition: ", err);
        })
}