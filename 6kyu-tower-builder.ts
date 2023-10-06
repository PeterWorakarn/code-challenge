/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

const buildTower = (nFloors: number) => {
  let answer:string[] = [];
  let sideMaxTower = nFloors - 1;
  let spaceMaxTower = nFloors - 1;
  for (let index = 0; index < nFloors; index++) {
    if (nFloors === 1) {
      answer.push('*');
    } else {
      let floor = `${(' ').repeat(sideMaxTower - index)}${('*').repeat(index)}*${('*').repeat(index)}${(' ').repeat(sideMaxTower - index)}`
      answer.push(floor);
      console.info(floor);
    }
  }
  return answer
}

// console.info(buildTower(1), 
// // ['*']
// )
// console.info(
//   buildTower(2), 
//   // [
//   //  '_*_', 
//   //  '***'
//   // ]
//   )
// console.info(
//   buildTower(3), 
// //   [
// //   "__*__",
// //   "_***_", 
// //   "*****"
// // ]
// )

buildTower(1);
buildTower(2);
buildTower(3);
buildTower(4);
buildTower(5);
buildTower(6);
buildTower(7);