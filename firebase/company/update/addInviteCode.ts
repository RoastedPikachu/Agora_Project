import {ref, update} from "firebase/database";

import {database} from "../../config";

export default async function firebaseSetCompanyInviteCode(companyId: string, inviteCode: string) {
    let response = null;
    let error = null;

    try {
        response = update(ref(database, "companies/" + companyId), {
            inviteCode: inviteCode
        });
    } catch (err:any) {
        error = err;
    }

    return {response, error};
}