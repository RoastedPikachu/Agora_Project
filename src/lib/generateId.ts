// const getRandomLetters = (length = 1) => {
//     return Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
// }
// const getRandomDigits = (length = 1) => {
//     return Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');
// }
//
// export default const generateUniqueId = () => {
//     let id = `${getRandomLetters(2)}-${getRandomDigits(2)}-${getRandomLetters(2)}-${getRandomDigits(2)}`;
//
//     while (existingIDs.includes(id)) {
//         id = `${getRandomLetters(2)}-${getRandomDigits(2)}-${getRandomLetters(2)}-${getRandomDigits(2)}`;
//     }
//
//     return id;
// }