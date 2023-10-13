const findMatch = (arr1: number[], arr2: number[]) =>{
  let answer:number[] = []
  arr1.map((each) => {
    if (
      (arr2).includes(each)
     ) {
       answer.push(each);
      }
  })
  return answer;
}

console.info(findMatch([1,2,3,4,5, 5], [2,3,5,5,5, 6]))