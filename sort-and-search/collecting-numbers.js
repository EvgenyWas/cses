const fs = require("fs");

const [_, n] = fs.readFileSync(0, "utf-8").trim().split("\n");

console.log(getSolution(n.split(" ").map(Number)));

function getSolution(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  let rounds = 0;
  let counter = nums.length;
  let cur = 1;
  while (counter > 0) {
    rounds++;
    while (true) {
      counter--;
      const next = cur + 1;
      const canRemoveNext = map.get(next) > map.get(cur);
      cur = next;
      if (!canRemoveNext) {
        break;
      }
    }
  }

  return rounds;
}
