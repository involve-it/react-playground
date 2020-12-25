/**
 * Реализуйте функцию getHeight
 */
const findSum=({ positions, sum, maxSum, arr })=> {
  for (let i = 0; i < arr.length; i++) {
    if (positions.indexOf(i) === -1) {
      const curNum = arr[i];
      const newSum = sum + curNum;
      if (newSum > maxSum) {
        return { res: false, positions }
      } else if (newSum === maxSum) {
        positions.push(i);
        return { res: true, positions }
      } else if (newSum < maxSum) {
        positions.push(i);
        const res = findSum({ positions, sum: newSum, maxSum, arr });
        if (!res.res) {
          positions.pop();
        } else {
          return res;
        }
      }
    } else {}
  }
  return {res: true, newArr: []};
}

export function getHeight(rods) {
  const arr = rods;

  let maxHeight = 0;
  let num = Math.floor(arr.reduce((a,v) => a+v) / 2);
  for (let i = num; i > 0; i--) {
    console.log('trying for height: ', i);
    let res1 = findSum({ positions: [], sum: 0, maxSum: i, arr });
    if (res1.res === true) {
      if (findSum({ positions: res1.positions, sum: 0, maxSum: i, arr }).res) {
        maxHeight = i;
        break;
      }
    }
  }
  return maxHeight;
}
