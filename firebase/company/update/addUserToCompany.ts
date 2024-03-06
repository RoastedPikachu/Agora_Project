import {ref, update} from "firebase/database";

import {database} from "../../config";

import firebaseGetCompanyById from "../read/getCompany";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default async function addUserToCompany(companyId: string, userEmail: string) {
    try {
        const company = await firebaseGetCompanyById(companyId);

        const response = await update(ref(database, "companies/" + companyId), {
            users: [...company?.val().users, userEmail]
        });

        handleFirebaseSuccess("Successful user addition");

        return response;
    } catch (error: any) {
        handleFirebaseError("Error during user addition: ", error);
    }
}