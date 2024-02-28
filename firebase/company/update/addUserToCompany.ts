import {ref, update} from "firebase/database";

import {database} from "../../config";
import firebaseGetCompanyById from "../read/getCompany";

export default async function firebaseAddUserToCompany(companyId: string | null, userEmail: string) {
    let result = null;
    let error = null;

    try {
        const company = await firebaseGetCompanyById(companyId);

        result = update(ref(database, "companies/" + companyId), {
            users: [...company?.val().users, userEmail]
        })
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}