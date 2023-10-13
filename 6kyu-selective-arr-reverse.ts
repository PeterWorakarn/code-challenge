/*
Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

E.g

selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]
if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]
selReverse(array, length)

array - array to reverse
length - length of each portion to reverse
Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.
*/

const reverseData = (data: number[]) => {
  let reverseOrder:number[] = [];
  for (let index = data.length - 1; index >= 0; index--) {
    reverseOrder.push(data[index]);
  }
  return reverseOrder;
}

const selReverse = (array: number[], length: number) => {
  if (!array.length || !length || length === 1 ) {
    return array;
  }

  let answer:number[] = [];

  if (array.length < length) {
    return reverseData(array);
  }

  for (let i = 0; i < array.length; i += length) {
      const chunk = array.slice(i, i + length);
      const reverseOrderData = reverseData(chunk);
      answer.push(...reverseOrderData);
  }
  return answer;
}


console.info(selReverse([2,4,6,8,10,12,14,16], 3), [6,4,2,12,10,8,16,14]);
console.info(selReverse([1,2,3,4,5,6], 2), [2,1,4,3,6,5]);
console.info(selReverse([1,2,3,4,5,6], 0,), [1,2,3,4,5,6]);
console.info(selReverse([1,2,3,4,5,6], 1,), [1,2,3,4,5,6]);
console.info(selReverse([1,2,3,4,5,6], 10), [6,5,4,3,2,1]);