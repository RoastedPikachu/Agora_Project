import {ref, update} from "firebase/database";

import {database} from "../../config";

export default async function firebaseSetCompanyInviteCode(companyId: string, inviteCode: string) {
    let result = null;
    let error = null;

    try {
        result = update(ref(database, "companies/" + companyId), {
            inviteCode: inviteCode
        })

        alert(`Your company Invite code: ${inviteCode} \n Your company Invite link: https://localhost:3000/signUp?inviteCode=${inviteCode}`);
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}