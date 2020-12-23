/**
 * Реализуйте функцию sort
 */
export const sort = (str) => {
  const strArr = str.split(' ');
  return strArr.map(s => {
    const pos = findLetterInStr(s);
    return {
      pos,
      str: s.replace(new RegExp(pos, 'gi'), '')
    };
  }).sort((a, b) => a.pos > b.pos)
    .map(s => s.str).join(' ');
}
const findLetterInStr = (str) => {
  const res = /[\d]+/.exec(str);
  return res && (res.length > 0) && res[0];
}
