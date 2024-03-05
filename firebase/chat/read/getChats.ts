import firebaseGetCompanyById from "../../company/read/getCompany";

export default async function firebaseGetChatsFromCompany(companyId: string | null) {
    let chats = null;

    try {
        // TODO: Fix first chats render
        const response = await firebaseGetCompanyById(companyId);

        chats = response?.val().chats;
    } catch (err:any) {
        console.error("Error during getChats request:", err);
    }

    return chats;
}