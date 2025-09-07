const fs = require("fs");

const [, nums] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getAppleDivision(nums.split(" ").map(Number)));

function getSubsetSums(arr) {
  const length = arr.length;
  const res = [];
  for (let i = (1 << length) - 1; i; i--) {
    let sum = 0;
    for (let j = 0; j < length; j++) {
      if (i & (1 << j)) {
        sum += arr[j];
      }
    }
    res.push(sum);
  }

  return res;
}

function searchBinaryClosest(arr, n) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = arr[mid];
    if (guess === n) {
      return n;
    }

    if (guess > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  const candidates = [];
  if (low < arr.length) {
    candidates.push(arr[low]);
  }

  if (low > 0) {
    candidates.push(arr[low - 1]);
  }

  return candidates.reduce((best, val) =>
    Math.abs(val - n) < Math.abs(best - n) ? val : best
  );
}

function getAppleDivision(arr) {
  if (arr.length === 2) {
    return Math.abs(arr[0] - arr[1]);
  }

  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  const middle = Math.floor(arr.length / 2);

  const left = getSubsetSums(arr.slice(0, middle)).sort((a, b) => a - b);
  const right = getSubsetSums(arr.slice(middle)).sort((a, b) => a - b);

  let bestSum = 0;
  const target = totalSum / 2;

  for (const sumLeft of left) {
    const sumRight = searchBinaryClosest(right, target - sumLeft);
    const totalGroup = sumLeft + sumRight;
    if (Math.abs(totalGroup - target) < Math.abs(bestSum - target)) {
      bestSum = totalGroup;
    }
  }

  return Math.abs(totalSum - 2 * bestSum);
}
