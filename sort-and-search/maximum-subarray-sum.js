const fs = require("fs");

const [_, n] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getMaximumSubarraySum(n.split(" ").map(Number)));

function getMaximumSubarraySum(arr) {
  let max = -Infinity;
  let sum = 0;
  for (const num of arr) {
    sum = Math.max(num, sum + num);
    max = Math.max(max, sum);
  }

  return max;
}
