export const repeatedDNASequences = (dna) => {
  const seqLength = 10;

  let seqCur, dnaCur = dna, repeatedDnas = {};

  for (let i = 0; i < dna.length; i++) {
    try {
      seqCur = dnaCur.substr(0, 10);
      dnaCur = dnaCur.substring(1);
      if (dnaCur.length < seqLength) {
        break;
      }
      if (!repeatedDnas[seqCur] && hasSequence(seqCur, dnaCur)) {
        repeatedDnas[seqCur] = seqCur;
      }

    } catch(err) {
      break;
    }

  }

  return Object.keys(repeatedDnas).sort();
}

const hasSequence = (seq, str) => {
  let seqIsCorrect = /^[ACGT]+$/.test(seq);
  if (!seqIsCorrect) {
    return false;
  }
  let seqInStrReg = new RegExp(`${seq}`, 'g');
  return seqInStrReg.test(str);
}
