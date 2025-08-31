const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const output = [];

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ");
  output.push(coinPiles(parseInt(a), parseInt(b)));
}

console.log(output.join("\n"));

function coinPiles(a, b) {
  if (Math.max(a, b) <= Math.min(a, b) * 2 && (a + b) % 3 === 0) {
    return "YES";
  }

  return "NO";
}
