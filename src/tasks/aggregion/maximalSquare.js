export const maximalSquare = (m) => {
  let maxSize = 0, sizeCur;
  const checkDiag = (x, y) => {
    let i = 0;
    let size = 1;
    let quit = false;
    do {
      if (i >= m.length) {
        quit = true;
      } else {
        try {
          if (m[x + size][y + size] === '1') {
            let a = true;

            for (let i = x; i < size; i++) {
              if (m[i][y + size] !== '1') {
                a = false;
              }
              if (m[x + size][i] !== '1') {
                a = false;
              }
            }
            if (!a) {
              //break;
              //quit = true;
            } else {
              size++;
            }

          }
        } catch (e) {
          quit = true;
        }
      }
      i++;
    } while (!quit);
    return size;
  }

  m.forEach((row, i) => {
    row.forEach((col, e) => {
      sizeCur = checkDiag(i, e);
      if (sizeCur > maxSize) {
        maxSize = sizeCur;
      }
    });
  });

  return maxSize;
}

