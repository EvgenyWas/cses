const fs = require("fs");

const [first, second] = fs.readFileSync(0, "utf8").trim().split("\n");
const [_, maxWeight] = first.split(" ").map(Number);
const kidsWeights = second.split(" ").map(Number);

console.log(getFerrisWheel());

function getFerrisWheel() {
  let count = 0;
  let left = 0;
  let right = kidsWeights.length - 1;
  kidsWeights.sort((a, b) => a - b);
  while (left <= right) {
    const lightest = kidsWeights[left];
    const heaviest = kidsWeights[right];
    if (maxWeight - heaviest >= lightest) {
      left++;
    }

    right--;
    count++;
  }

  return count;
}
