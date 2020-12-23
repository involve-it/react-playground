/**
 * Реализуйте функцию sort
 */
export const sequences = (num) => {
  const ret = [];
  for (let i = 1; i <= num; i++) {
    ret.push(strFromNumber(i));
  }
  return ret;
}

const strFromNumber = (num) => {
  let ret = '';

  for (let i = 1; i <= num; i++) {
    if (num % 2 === 1) {
      ret = `${ ret ===''? ret: ret+'-'  }${ i }`;
    } else {
      ret = `${ i }${ ret ===''? ret: '-'+ret }`;
    }
  }
  return ret;
}
