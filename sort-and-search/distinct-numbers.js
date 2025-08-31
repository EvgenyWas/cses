const fs = require("fs");

const [, arr] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getDistinctNumbers(arr.split(" ")));

function getDistinctNumbers(nums) {
  return new Set(nums).size;
}
