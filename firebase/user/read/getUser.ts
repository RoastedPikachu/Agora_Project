import { ref, get } from "firebase/database";

import { database } from "../../config";

import {
  handleFirebaseSuccess,
  handleFirebaseError,
} from "@/utils/generalFunctions";

export default async function getUser(userId: string) {
  try {
    const user = await get(ref(database, "users/" + userId));

    handleFirebaseSuccess("Successful user receiving");

    return user;
  } catch (err) {
    handleFirebaseError("Error during user receiving: ", err);
  }
}
