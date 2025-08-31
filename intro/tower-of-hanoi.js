const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log((1 << Number(input)) - 1);
getSolution(Number(input));

function getSolution(n, from = 1, to = 3) {
  if (!n) {
    return;
  }

  const mid = 6 - from - to;
  getSolution(n - 1, from, mid);
  console.log(from, to);
  getSolution(n - 1, mid, to);
}
