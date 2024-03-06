import {ref, get} from "firebase/database";

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function getCompany(companyId: string) {
    try {
        const response = await get(ref(database, "companies/" + companyId));

        handleFirebaseSuccess("Successful company receiving");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during company receiving: ", error);
    }
}