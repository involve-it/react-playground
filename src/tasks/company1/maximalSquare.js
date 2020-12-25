export const maximalSquare = (m) => {
  let maxSize = 0, sizeCur;
  const checkDiag = (x, y) => {
    let j = 0;
    let size = 0;
    let quit = false;
    do {
      if (j >= m.length) {
        quit = true;
      } else {
        try {
          if (m[x + size][y + size] === '1') {
            let a = true;

            for (let i = 0; i <= size; i++) {
              if (m[x + i][y + size] !== '1') {
                a = false;
              }
              if (m[x + size][y + i] !== '1') {
                a = false;
              }
            }
            if (!a) {
              break;
            } else {
              size++;
            }

          }
        } catch (e) {
          break;
        }
      }
      j++;
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

  return maxSize * maxSize;
}

