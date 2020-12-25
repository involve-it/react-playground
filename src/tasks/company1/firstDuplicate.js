export const firstDuplicate = (array) => {
  let numCur, numFound = {}, positionCur;

  for (let i = 0; i < array.length; i++) {
    numCur = array.shift();
    positionCur = hasNumber(numCur, array)
    if (positionCur > -1) {
      numFound[ numCur ] = !isNaN(numFound[ numCur ])?
        Math.min(numFound[ numCur ], positionCur + i + 1):
        positionCur + i + 1;
    }
  }
  let index = Object.entries(numFound).reduce((a, v) => a[1] < v[1]? a: v, [-1, Infinity]);
  return parseInt(index[0]);
}

const hasNumber = (num, array) => {
  return array.indexOf(num);
}
