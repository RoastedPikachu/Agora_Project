import {ref, set} from "firebase/database";

import {database} from "../config";

export default async function firebaseCreateNewCompany(companyId:string, name: string, avatar: string, initialUserEmail: string) {
    let result = null;
    let error = null;

    try {
        set(ref(database, "companies/" + companyId), {
            companyId: companyId,
            inviteCode: null,
            companyName: name,
            companyAvatar: avatar,
            users: [initialUserEmail]
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}