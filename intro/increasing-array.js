const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getIncreasingArray());

function getIncreasingArray() {
  const n = parseInt(input[0]);
  const nums = input[1].split(" ").map(Number);
  let res = 0;

  for (let i = 1; i < n; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];
    if (curr < prev) {
      res += prev - curr;
      nums[i] = prev;
    }
  }

  return res;
}
