const fs = require("fs");

const [first, second] = fs.readFileSync(0, "utf8").trim().split("\n");
const [_, maxWeight] = first.split(" ").map(Number);
const kidsWeights = second.split(" ").map(Number);

console.log(getFerrisWheel());

function getFerrisWheel() {
  let count = 0;
  const search = (arr) => {
    if (!arr.length) {
      return;
    }

    if (arr.length === 1) {
      count++;
      return;
    }

    const sortedArr = arr.sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    const left = sortedArr.slice(0, middle).reverse();
    const right = sortedArr.slice(middle);
    while (right.length) {
      const heaviest = right.pop();
      const lightest = left[left.length - 1];
      if (maxWeight - heaviest >= lightest) {
        left.pop();
      }

      count++;
    }
    search(left);
  };
  search(kidsWeights);

  return count;
}
