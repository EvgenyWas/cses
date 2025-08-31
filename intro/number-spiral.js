const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const t = parseInt(input[0]);
const output = [];

for (let i = 1; i <= t; i++) {
  const [y, x] = input[i].split(" ").map(Number);
  output.push(getNumberSpiral(y, x).toString());
}

console.log(output.join("\n"));

function getNumberSpiral(y, x) {
  const size = BigInt(Math.max(y, x));
  const diag = size * size - size + 1n;
  let delta = size - BigInt(Math.min(y, x));

  if (x < y) {
    delta *= -1n;
  }

  if (size % 2n == 0n) {
    delta *= -1n;
  }

  return diag + delta;
}
