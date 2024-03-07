import {ref, set} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError, setCookie} from "@/lib/generalFunctions";

export default function createNewCompany(companyId:string, name: string, avatarPath: string, initialUserEmail: string) {
    console.log("hmm");

    set(ref(database, "companies/" + companyId), {
        companyId: companyId,
        inviteCode: null,
        companyName: name,
        companyAvatar: avatarPath,
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
        .then(() => {
            setCookie("companyId", companyId, 30);

            handleFirebaseSuccess("Successful company creation");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during company creation: ", err);
        });
}