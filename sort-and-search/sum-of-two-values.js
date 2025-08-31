const fs = require("fs");

const [t, n] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(
  getSumOfTwoValues(Number(t.split(" ")[1]), n.split(" ").map(Number))
);

function getSumOfTwoValues(target, nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const diff = target - cur;
    if (map.has(cur)) {
      return `${map.get(cur) + 1} ${i + 1}`;
    }

    map.set(diff, i);
  }

  return "IMPOSSIBLE";
}
