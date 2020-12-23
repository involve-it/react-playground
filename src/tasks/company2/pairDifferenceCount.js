export const pairDifferenceCount = (arr) => {
  const ret = arr.reduce((acc, value) => {

    if(arr.indexOf(value + 3) !== -1 && !acc[value]) {
      acc[value] = value+3;
    }
    return acc;
  }, {})
  return Object.keys(ret).length;
}
