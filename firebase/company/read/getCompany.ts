import firebase from "firebase/compat/app";
import {ref, get} from "firebase/database";

import DataSnapshot = firebase.database.DataSnapshot;

import {database} from "../../config";

import {handleFirebaseSuccess, handleFirebaseError} from "@/lib/generalFunctions";

export default function getCompany(companyId: string): DataSnapshot | void {
    get(ref(database, "companies/" + companyId))
        .then((res) => {
            handleFirebaseSuccess("Successful company receiving");

            return res;
        })
        .catch((err: Error) => {
            handleFirebaseError("Error during company receiving: ", err);
        });
}