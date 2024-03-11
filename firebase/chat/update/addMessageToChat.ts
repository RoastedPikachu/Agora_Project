import { ref, update } from "firebase/database";

import { database } from "../../config";

import firebaseGetCompanyById from "../../company/read/getCompany";

import {
  handleFirebaseSuccess,
  handleFirebaseError,
} from "@/utils/generalFunctions";
import { Chat, Message } from "@/utils/generalInterfaces";

export default async function addMessageToChat(
  companyId: string,
  targetChatId: number,
  message: Message,
) {
  const company = await firebaseGetCompanyById(companyId);

  const chat = company
    ?.val()
    .chats.find((chat: Chat) => chat.id === targetChatId);
  chat.push(message);

  update(ref(database, "companies/" + companyId), {
    chats: [...company?.val().chats, chat],
  })
    .then(() => {
      handleFirebaseSuccess("Successful user addition");
    })
    .catch((err: Error) => {
      handleFirebaseError("Error during user addition: ", err);
    });
}
