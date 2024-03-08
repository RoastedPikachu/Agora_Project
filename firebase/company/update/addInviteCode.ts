import {ref, update} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/utils/generalFunctions";

export default function setCompanyInviteCode(companyId: string, inviteCode: string) {
        update(ref(database, "companies/" + companyId), {
            inviteCode: inviteCode
        })
            .then(() => {
                handleFirebaseSuccess("Successful company invite code addition");
            })
            .catch((err: Error) => {
                handleFirebaseError("Error during company invite code addition: ", err);
            });
}