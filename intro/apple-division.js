const fs = require("fs");

const [, nums] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getAppleDivision(nums.split(" ").map(Number)));

function getAppleDivision(arr) {
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  const length = arr.length;
  let min = Infinity;
  for (let i = (1 << length) - 1; i; i--) {
    let sum = 0;
    for (let j = 0; j < length; j++) {
      if (i & (1 << j)) {
        sum += arr[j];
      }
    }
    const diff = Math.abs(totalSum - 2 * sum);
    min = Math.min(min, diff);
  }

  return min;
}
