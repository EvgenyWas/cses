const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const reservedPlaces = input.reduce((acc, item, y) => {
  item.split("").forEach((char, x) => {
    if (char === "*") {
      acc[`${y}${x}`] = true;
    }
  });
  return acc;
}, {});

console.log(getNonAttackingQueens());

function getNonAttackingQueens() {
  const col = [];
  const diag1 = [];
  const diag2 = [];
  const n = input.length;
  let count = 0;
  const search = (y) => {
    if (y === n) {
      count++;
      return;
    } else {
      for (let x = 0; x < n; x++) {
        if (
          col[x] ||
          diag1[x + y] ||
          diag2[x - y + n - 1] ||
          reservedPlaces[`${y}${x}`]
        )
          continue;

        col[x] = diag1[x + y] = diag2[x - y + n - 1] = true;
        search(y + 1);
        col[x] = diag1[x + y] = diag2[x - y + n - 1] = false;
      }
    }
  };
  search(0);

  return count;
}
