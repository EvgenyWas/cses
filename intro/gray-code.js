const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getGrayCode(Number(input)));

function getGrayCode(n) {
  const result = [];
  for (let i = 0; i < 1 << n; i++) {
    result.push((i ^ (i >> 1)).toString(2).padStart(n, "0"));
  }

  return result.join("\n");
}
