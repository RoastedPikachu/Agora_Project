import {ref, set} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError, setCookie} from "@/utils/generalFunctions";

export default function createNewCompany(companyId:string, name: string, avatarPath: string, initialUserEmail: string) {
    return set(ref(database, "companies/" + companyId), {
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
                messages: [
                    {
                        id: 1,
                        author: "Agora",
                        sendTime: "",
                        text: "Welcome to the Important chat! Here is will store all important messages which posted by your executives."
                    }
                ]
            },
            {
                id: 2,
                name: "Favourites",
                isOpened: false,
                messages: [
                    {
                        id: 1,
                        author: "Agora",
                        sendTime: "",
                        text: "Welcome to the Favourites chat! Here is you can store all messages which you think is useful or you don't want to forget it."
                    }
                ]
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