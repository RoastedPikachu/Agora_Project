import firebase from "firebase/compat/app";
import { ref, get } from "firebase/database";

import DataSnapshot = firebase.database.DataSnapshot;

import { database } from "../../config";

import {
  handleFirebaseSuccess,
  handleFirebaseError,
} from "@/utils/generalFunctions";

export default async function getCompany(companyId: string) {
  try {
    const company = await get(ref(database, "companies/" + companyId));

    handleFirebaseSuccess("Successful company receiving");

    return company;
  } catch (err) {
    handleFirebaseError("Error during company receiving: ", err);
  }
}
