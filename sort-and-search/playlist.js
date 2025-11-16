const fs = require("fs");

const [l, s] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getSolution(Number(l), s.split(" ").map(Number)));

function getSolution(length, songs) {
  const map = {};
  let max = 0;
  let curr = 0;
  for (let i = 0; i < length; i++) {
    const song = songs[i];
    if (map[song] !== undefined) {
      curr = Math.min(i - map[song], ++curr);
    } else {
      curr++;
    }

    map[song] = i;
    max = Math.max(max, curr);
  }

  return max;
}
