const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getTwoSets(parseInt(input)));

function getTwoSets(n) {
  if (n % 4 === 1 || n % 4 === 2) {
    return "NO";
  }

  const set1 = [];
  const set2 = [];
  if (n % 4 === 3) {
    set1.push(1, 2);
    set2.push(3);
  }

  for (let i = (n % 4) + 1; i < n; i += 4) {
    set1.push(i, i + 3);
    set2.push(i + 1, i + 2);
  }

  return `YES\n${set1.length}\n${set1.join(" ")}\n${set2.length}\n${set2.join(
    " "
  )}`;
}
