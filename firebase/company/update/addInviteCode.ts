import {ref, update} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function setCompanyInviteCode(companyId: string, inviteCode: string) {
    try {
        const response = await update(ref(database, "companies/" + companyId), {
            inviteCode: inviteCode
        });

        handleFirebaseSuccess("Successful company invite code addition");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during company invite code addition: ", error);
    }
}