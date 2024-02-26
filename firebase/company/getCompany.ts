import {ref, get} from "firebase/database";

import {database} from "../config";

export default async function firebaseGetCompanyById(companyId: string | null) {
    let result = null;
    let error = null;

    try {
        result = get(ref(database, "companies/" + companyId))
    } catch (err:any) {
        error = err;
    }

    return result;
}