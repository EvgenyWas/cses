const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const output = [];

for (let i = 0; i < input.length; i++) {
  const n = parseInt(input[i]);
  output.push(weirdAlgorithm(n));
}

console.log(output.join("\n"));

function call(n) {
  return n % 2 ? n * 3 + 1 : n / 2;
}

function weirdAlgorithm(n, sequence = `${n}`) {
  if (n === 1) {
    return sequence;
  }

  const k = call(n);
  return weirdAlgorithm(k, `${sequence} ${k}`);
}
