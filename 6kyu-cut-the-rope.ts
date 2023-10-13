/*
Task
You are given N ropes, where the length of each rope is a positive integer. At each step, you have to reduce all the ropes by the length of the smallest rope.

The step will be repeated until no ropes are left. Given the length of N ropes, print the number of ropes that are left before each step.

Example
For a = [3, 3, 2, 9, 7], the result should be [5, 4, 2, 1]

You have 5 ropes:       

                 3 3 2 9 7   ( 5 left)
                  
step 1:          1 1 0 7 5   ( 4 left)

step 2:          0 0 0 6 4   ( 2 left)

step 3:          0 0 0 0 2   ( 1 left)

step 4:          0 0 0 0 0    

Hence the result is [5, 4, 2, 1]
Input/Output
[input] integer array a
length of each rope.

3 <= a.length <= 2000

1 <= a[i] <= 100

[output] an integer array
number of ropes before each step.
*/

const cutRemaining = (value:number[]) => {
  return value.filter((eachValue) => {
    if (eachValue > 0) {
      return true;
    }
    return false;
  })
}

const cutTheRopes = (data: number[]) => {
  let allRope = data;
  let allRemainingRope: number[] = []
  let lowestValue = 0;
  // TODO
  // 1: while sum of arr value until = 0;
  // 2: filter and count remaining rope and push in array
  // 3: find lowest value
  // 4: reduce all rope
  while (allRope.reduce((curr,acc) => curr + acc, 0) > 0) {
    const remainingRope = cutRemaining(allRope);

    allRemainingRope.push(remainingRope.length);
    
    for (let index = 0; index < remainingRope.length; index++) {
      if (index === 0) {
        lowestValue = remainingRope[index];
      }
      if (remainingRope[index] < lowestValue) {
        lowestValue = remainingRope[index]
      }
    }

    allRope = cutRemaining(allRope.map((eachRope) => {
      return eachRope - lowestValue;
    }))
  }

  return allRemainingRope;
}

console.info(cutTheRopes([3, 3, 2, 9, 7]), [5, 4, 2, 1])
console.info(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]),[8, 6, 4, 1])
console.info(cutTheRopes([13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056]),[10, 9, 6, 5, 3, 1])