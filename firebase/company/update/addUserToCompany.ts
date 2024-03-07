import {ref, update} from "firebase/database";

import {database} from "../../config";

import firebaseGetCompanyById from "../read/getCompany";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function addUserToCompany(companyId: string, userEmail: string) {
    const company = firebaseGetCompanyById(companyId);

    update(ref(database, "companies/" + companyId), {
        users: [...company?.val().users, userEmail]
    })
        .then(() => {
            handleFirebaseSuccess("Successful user addition");
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during user addition: ", err);
        });
}