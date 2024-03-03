import {ref, set} from "firebase/database";

import {database} from "../../config";
import {setCookie} from "@/lib/generalFunctions";

export default async function firebaseCreateNewCompany(companyId:string, name: string, avatar: string, initialUserEmail: string) {
    let result = null;
    let error = null;

    try {
        result = set(ref(database, "companies/" + companyId), {
            companyId: companyId,
            inviteCode: null,
            companyName: name,
            companyAvatar: avatar,
            users: [initialUserEmail],
            chats: [{id: 1, name: "Important", isOpened: true, messages: []}, {id: 2, name: "Favourites", isOpened: false, messages: []}]
        })

        setCookie("companyId", companyId, 30);
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}