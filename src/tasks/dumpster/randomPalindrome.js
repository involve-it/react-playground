export const palindromeSearch1 = (str) => {
  function checkValuesFromRoot(root, dist, cur) {
    debugger;
    if (root > dist-1 && root < str.length - dist && str[root-dist] === str[root+dist]) {
      const curNew = str[root-dist] + cur + str[root-dist];
      return checkValuesFromRoot(root, dist+1, curNew);
    } else { return cur; }
  }
  for (let i = 0; i < str.length; i++) {
    const res = checkValuesFromRoot(i, 1, str[i])
    console.log(i, res);
  }
}
palindromeSearch1('eoerqASDFDSAboen')
