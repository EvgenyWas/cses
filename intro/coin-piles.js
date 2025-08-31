const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const output = [];
const POSITIVE = "YES";
const NEGATIVE = "NO";

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ");
  output.push(coinPiles(parseInt(a), parseInt(b)));
}

console.log(output.join("\n"));

function coinPiles(a, b) {
  if (!a || !b) {
    return a === b ? POSITIVE : NEGATIVE;
  }

  if (Math.max(a, b) / Math.min(a, b) > 2) {
    return NEGATIVE;
  }

  const aRemainder = a % 3;
  const bRemainder = b % 3;
  if (a === b) {
    return !aRemainder || !bRemainder ? POSITIVE : NEGATIVE;
  }

  if (
    (aRemainder === 2 && bRemainder === 1) ||
    (aRemainder === 1 && bRemainder === 2) ||
    (!aRemainder && !bRemainder)
  ) {
    return POSITIVE;
  }

  return NEGATIVE;
}
