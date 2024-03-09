import { ref, update } from "firebase/database";

import { database } from "../../config";

import firebaseGetCompanyById from "../read/getCompany";

import {
  handleFirebaseSuccess,
  handleFirebaseError,
} from "@/utils/generalFunctions";

export default async function addUserToCompany(
  companyId: string,
  userEmail: string,
) {
  const company = await firebaseGetCompanyById(companyId);

  update(ref(database, "companies/" + companyId), {
    users: [...company?.val().users, userEmail],
  })
    .then(() => {
      handleFirebaseSuccess("Successful user addition");
    })
    .catch((err: Error) => {
      handleFirebaseError("Error during user addition: ", err);
    });
}
