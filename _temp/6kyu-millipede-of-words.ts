// /*
// The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.

// Input
// Array of 3 to 7 words of random length. No capital letters.

// Example true
// Set: excavate, endure, desire, screen, theater, excess, night.
// Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

// Example false
// Set: trade, pole, view, grave, ladder, mushroom, president.
// Millipede: presidenT Trade.


// */

// const isConnectBack = (value:string, remainingArray:string[]) => {
//   let status = false;
//   let backAlphabet = value[value.length - 1];
//   let indexOfMatch = 0;
//   for (
//     let index = 0;
//     index < remainingArray.length;
//     index++
//   ) {
//     if (
//       remainingArray[index][0] === backAlphabet
//     ) {
//       indexOfMatch = index;
//       status = true;
//       break;
//     }
//   }
//   return {
//     status: status,
//     position: indexOfMatch,
//   };
// };
// const isConnectFront = (
//   value:string, remainingArray:string[]
// ) => {
//   let status = false;
//   let frontAlphabet = value[0];
//   let indexOfMatch = 0;
//   for (
//     let index = 0;
//     index < remainingArray.length;
//     index++
//   ) {
//     if (
//       remainingArray[index][
//         remainingArray[index].length - 1
//       ] === frontAlphabet
//     ) {
//       indexOfMatch = index;
//       status = true;
//       break;
//     }
//   }
//   return {
//     status: status,
//     position: indexOfMatch,
//   };
// };

// const isConnectWithFrontArray = (value:string, chain:string[]) => {
//   let status = false;
//   let lastAlphabet = value[value.length - 1];
//   if (chain[0][0] === lastAlphabet) {
//     status = true;
//   }
//   return status;
// }
// const isConnectWithBackArray = (value:string, chain:string[]) => {
//   let status = false;
//   let firstAlphabet = value[0];
//   if (chain[chain.length - 1][chain[chain.length - 1].length - 1] === firstAlphabet) {
//     status = true;
//   }
//   return status;
// }

// // const millipede = (value) => {
// //   // STEP
// //   // create local variable one
// //   // check any string
// //   // if true push both one and two and remove them from original index
// //   // if not pass
// //   let data = value;
// //   // loop n time to check
// //   for (
// //     let index = 0;
// //     index < data.length;
// //     index++
// //   ) {
// //     let removeItems = [];
// //     let firstWord = data[index];
// //     // splice remaining word
// //     let remainingWords = data.filter(
// //       (i, idx) => idx !== index,
// //     );

// //     // isConnectFront()
// //     if (
// //       isConnectFront(firstWord, remainingWords)
// //         .status
// //     ) {
// //       // push data
// //       removeItems.push(firstWord);
// //       removeItems.push(
// //         remainingWords[
// //           isConnectFront(
// //             firstWord,
// //             remainingWords,
// //           ).position
// //         ],
// //       );
// //     }
// //     // isConnectBack()
// //     if (
// //       isConnectBack(firstWord, remainingWords)
// //         .status
// //     ) {
// //       // push data
// //       removeItems.push(firstWord);
// //       removeItems.push(
// //         remainingWords[
// //           isConnectBack(firstWord, remainingWords)
// //             .position
// //         ],
// //       );
// //     }
// //     // remove selected item
// //     data = data.filter((eachWord) => {
// //       if (removeItems.includes(eachWord)) {
// //         return false;
// //       }
// //       return true;
// //     });
// //   }
// //   // last check data from original is empty
// //   if (data.length) {
// //     return true;
// //   }
// //   return false;
// // };

// const millipede = (value: string[]) => {
//   let data = [...value];
//   let chainWord:string[] = []
//  for (let index = 0; index < data.length; index++) {
//     let removeItems:string[] = [];
//     let selectedWord = data[index];
//     let remainingWords = data.filter(
//       (i, idx) => idx !== index,
//     );
//   if (!chainWord.length) {
//     if (isConnectFront(selectedWord, remainingWords).status) {
//       chainWord.push(remainingWords[isConnectFront(selectedWord, remainingWords).position]);
//       removeItems.push(remainingWords[isConnectFront(selectedWord, remainingWords).position]);
//       chainWord.push(selectedWord);
//       removeItems.push(selectedWord);
//     }
//     if (isConnectBack(selectedWord, remainingWords).status) {
//       chainWord.push(remainingWords[isConnectBack(selectedWord, remainingWords).position]);
//       removeItems.push(remainingWords[isConnectBack(selectedWord, remainingWords).position]);
//       chainWord.push(selectedWord);
//       removeItems.push(selectedWord);
//     }
//   } else {
//     if (isConnectWithFrontArray(selectedWord, chainWord)) {
//       chainWord.unshift(selectedWord);
//       removeItems.push(selectedWord);
//     }
//     if (isConnectWithBackArray(selectedWord, chainWord)) {
//       chainWord.push(selectedWord);
//       removeItems.push(selectedWord);
//     }
//   }
//   data = data.filter((eachWord) => {
//     if (removeItems.includes(eachWord)) {
//         return false;
//     }
//       return true;
//     });
//  }
//  console.info(chainWord);
//   if (chainWord.length === value.length) {
//     return true;
//   }
//   return false;
// }

// console.info(
//   millipede([
//     'trade',
//     'pole',
//     'view',
//     'grave',
//     'ladder',
//     'mushroom',
//     'president',
//   ]),
//   false,
//   '#1',
// );

// console.info(
//   millipede([
//     'excavate',
//     'endure',
//     'desire',
//     'screen',
//     'theater',
//     'excess',
//     'night',
//   ]),
//   true,
//   '#2',
// );

// console.info(
//   millipede([
//     'screen',
//     'desire',
//     'theater',
//     'excess',
//     'night',
//   ]),
//   true,
//   '#3',
// );

// console.info(
//   millipede([
//     'engine',
//     'endure',
//     'elite',
//     'excess',
//   ]),
//   true,
//   '#4',
// );

// console.info(
//   millipede([
//     'east',
//     'e',
//     'e',
//     't',
//     't',
//     'e',
//     'time',
//   ]),
//   true,
//   '#5',
// );

// console.info(
//   millipede(['no', 'dog', 'on', 'good']),
//   false,
//   '#6',
// );
