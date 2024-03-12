import { ref, update } from "firebase/database";

import { auth, database } from "../../config";

import firebaseGetCompanyById from "../../company/read/getCompany";

import userStore from "@/app/store/userStore";

import {
  handleFirebaseSuccess,
  handleFirebaseError,
} from "@/utils/generalFunctions";
import { Chat } from "@/utils/generalInterfaces";

export default async function addMessageToChat(
  companyId: string,
  targetChatId: number,
  sendTime: string,
  messageText: string,
) {
  const company = await firebaseGetCompanyById(companyId);

  const chat = company
    ?.val()
    .chats.find((chat: Chat) => chat.id === targetChatId);

  const message = {
    id: chat.messages[chat.messages.length - 1].id + 1,
    author: {
      uid: auth.currentUser?.uid,
      avatarPath: "/static/messengerPage/icons/DefaultAvatarIcon.svg",
      name: userStore.userName,
    },
    sendTime: sendTime,
    text: messageText,
  };

  chat.messages.push(message);

  update(ref(database, "companies/" + companyId), {
    chats: [...company?.val().chats],
  })
    .then(() => {
      handleFirebaseSuccess("Successful message addition");
    })
    .catch((err: Error) => {
      handleFirebaseError("Error during message addition: ", err);
    });
}
