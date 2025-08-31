const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getTwoSets(parseInt(input)));

function getTwoSets(n) {
  const sum = (n * (n + 1)) / 2;
  if (sum % 2) {
    return "NO";
  }

  let target = sum / 2;
  const set1 = [];
  const set2 = [];
  while (n > 0) {
    if (n <= target) {
      target -= n;
      set1.push(n);
    } else {
      set2.push(n);
    }

    n--;
  }

  return `YES\n${set1.length}\n${set1.join(" ")}\n${set2.length}\n${set2.join(
    " "
  )}`;
}
