import firebaseGetCompanyById from "../../company/read/getCompany";

export default function getChatsFromCompany(companyId: string) {
    // TODO: Fix first chats render
    const company = firebaseGetCompanyById(companyId);

    // Здесь нет проверок в виду того, что у каждой компании есть как минимум 2 чата => ошибка будет только если мы не получим компанию

    return company?.val().chats;
}