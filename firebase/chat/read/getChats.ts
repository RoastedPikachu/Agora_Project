import makeFirebaseRequest from "../../endpoints";

// Здесь нет проверок в виду того, что у каждой компании есть как минимум 2 чата => ошибка будет только если мы не получим компанию

export default async function getChatsFromCompany(companyId: string) {
  // TODO: Fix first chats render
  return await makeFirebaseRequest("company/get", {
    companyId: companyId,
  });
}
