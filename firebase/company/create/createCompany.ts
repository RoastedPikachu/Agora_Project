import {ref, set} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError, setCookie} from "@/lib/generalFunctions";

export default async function createNewCompany(companyId:string, name: string, avatar: string, initialUserEmail: string) {
    try {
        const response = await set(ref(database, "companies/" + companyId), {
            companyId: companyId,
            inviteCode: null,
            companyName: name,
            companyAvatar: avatar,
            users: [initialUserEmail],
            chats: [
                {
                    id: 1,
                    name: "Important",
                    isOpened: true,
                    messages: []
                },
                {
                    id: 2, 
                    name: "Favourites",
                    isOpened: false,
                    messages: []
                }
            ]
        })

        setCookie("companyId", companyId, 30);

        handleFirebaseSuccess("Successful company creation");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during company creation: ", error);
    }
}