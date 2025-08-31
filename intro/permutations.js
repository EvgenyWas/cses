const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getPermutations(parseInt(input)));

function getPermutations(n) {
  if (n === 1) {
    return "1";
  }

  if (n < 4) {
    return "NO SOLUTION";
  }

  let evenPermutations = "2";
  let oddPermutations = "1";
  for (let i = 4; i <= n; i += 2) {
    evenPermutations += ` ${i}`;
  }
  for (let i = 3; i <= n; i += 2) {
    oddPermutations += ` ${i}`;
  }

  return `${evenPermutations} ${oddPermutations}`;
}
