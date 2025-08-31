const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const n = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);

console.log(getMissingNumber(n, nums));

function getMissingNumber(n, nums) {
  const allNums = new Set(Array.from({ length: n }, (_, i) => i + 1));
  for (let i = 0; i < nums.length; i++) {
    allNums.delete(nums[i]);
  }

  return allNums.values().next().value;
}
