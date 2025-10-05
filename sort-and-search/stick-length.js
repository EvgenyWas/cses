const fs = require("fs");

const [_, s] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getSolution(s.split(" ").map(Number)));

function getSolution(sticks) {
  sticks.sort((a, b) => a - b);
  const middle = sticks.length >> 1;
  const median =
    sticks.length % 2
      ? sticks[middle]
      : (sticks[middle - 1] + sticks[middle]) >> 1;

  let counter = 0;
  for (const stick of sticks) {
    counter += Math.abs(median - stick);
  }

  return counter;
}
