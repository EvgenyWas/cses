const fs = require("fs");

const [, nums] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getAppleDivision(nums.split(" ").map(Number)));

function getAppleDivision(arr) {
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  const length = arr.length;
  let min = Infinity;
  let sum1 = 0;
  for (let i = 0; i < (1 << length) - 1; i++) {
    const gray = i ^ (i >> 1);
    const grayNext = (i + 1) ^ ((i + 1) >> 1);
    const changedIdx = Math.log2(gray ^ grayNext);
    if (grayNext & (1 << changedIdx)) {
      sum1 += arr[changedIdx];
    } else {
      sum1 -= arr[changedIdx];
    }

    const sum0 = totalSum - sum1;
    min = Math.min(min, Math.abs(sum0 - sum1));
  }

  return min;
}
