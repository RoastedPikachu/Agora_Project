import firebaseGetCompanyById from "../../company/read/getCompany";

export default async function firebaseGetChatsFromCompany(companyId: string | null) {
    let result = null;
    let error = null;

    try {
        const response = await firebaseGetCompanyById(companyId);

        return response?.val().chats;
    } catch (err:any) {
        error = err;
    }

    return {result, error};
}