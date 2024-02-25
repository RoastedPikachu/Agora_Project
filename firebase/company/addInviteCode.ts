import {ref, update} from "firebase/database";

import {database} from "../config";

export default async function firebaseSetCompanyInviteCode(companyId: string, inviteCode: string) {
    let result = null;
    let error = null;

    try {
        update(ref(database, "companies/" + companyId), {
            inviteCode: inviteCode
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}