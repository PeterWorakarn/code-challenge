const isChainInFront = (remainingString: string[],array:string[]) => {
  let status = false;
  let position = 0;
  const firstStringInArr = array[0][0];
  const isMatch = remainingString.filter((i, idx) => {
    if (i[i.length - 1] === firstStringInArr) {
      position = idx;
      status = true;
    return true;    
  }
  });
  return {
    status,
    position
  };
}
const isChainInBack = (remainingString: string[],array:string[]) => {
  let status = false;
  let position = 0;
  const lastStringInArr = array[array.length - 1][array[array.length - 1].length - 1];
  const isMatch = remainingString.filter((i, idx) => {
    if (i[i.length - 1] === lastStringInArr) {
      position = idx;
      status = true;
    return true;    
  }
  });
  return {
    status,
    position
  };
}



const isCanChainWord = (data: string[]) => {
  let chainWord:string[] = [data[0]];
  let remainingArr = [...data.filter((i,idx) => idx !== 0)];
  // console.info('all compare word',remainingArr);

  while (remainingArr.length) {
    if (isChainInFront(remainingArr, chainWord).status) {
      // find index and add;
      chainWord.unshift(remainingArr[isChainInFront(remainingArr, chainWord).position])
      remainingArr = remainingArr.filter((i,idx) => idx !== isChainInFront(remainingArr, chainWord).position);
    } else if (isChainInBack(remainingArr,chainWord).status) {
      // find index and add;
      chainWord.push(remainingArr[isChainInBack(remainingArr, chainWord).position])
      remainingArr = remainingArr.filter((i,idx) => idx !== isChainInBack(remainingArr, chainWord).position);
    } else {
      remainingArr.shift();
    }
  }

  console.info(chainWord);
  if (chainWord.length === data.length) {
    return true
  }
  return false;
}

// console.info(
//   isCanChainWord([
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
//   isCanChainWord([
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

console.info(
  isCanChainWord([
    'screen',
    'desire',
    'theater',
    'excess',
    'night',
  ]),
  true,
  '#3',
);

// console.info(
//   isCanChainWord([
//     'engine',
//     'endure',
//     'elite',
//     'excess',
//   ]),
//   true,
//   '#4',
// );

// console.info(
//   isCanChainWord([
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
//   isCanChainWord(['no', 'dog', 'on', 'good']),
//   false,
//   '#6',
// );