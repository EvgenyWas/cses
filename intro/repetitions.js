const fs = require("fs");

const [dna] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getRepetitions(dna));

function getRepetitions(dna) {
  let repetitions = 1;
  let prev = 1;
  for (let i = 0; i < dna.length; i++) {
    if (dna[i - 1] === dna[i]) {
      prev++;
    } else {
      prev = 1;
    }

    repetitions = Math.max(repetitions, prev);
  }

  return repetitions;
}
