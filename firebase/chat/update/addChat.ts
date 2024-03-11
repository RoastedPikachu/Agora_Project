import { ref, update } from "firebase/database";

import { database } from "../../config";

import firebaseGetCompanyById from "../../company/read/getCompany";

import chatsStore from "@/app/store/chatsStore";

import {
  handleFirebaseSuccess,
  handleFirebaseError,
} from "@/utils/generalFunctions";
import { Chat } from "@/utils/generalInterfaces";

export default async function addChatToCompany(companyId: string, chat: Chat) {
  const company = await firebaseGetCompanyById(companyId);

  const companyChats = company?.val().chats;

  update(ref(database, "companies/" + companyId), {
    chats: [...companyChats, chat],
  })
    .then(() => {
      handleFirebaseSuccess("Successful chat addition");

      chatsStore.getChats();
    })
    .catch((err: Error) => {
      handleFirebaseError("Error during chat addition: ", err);
    });
}
