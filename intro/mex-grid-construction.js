const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

getMexGridConstruction(Number(input));

function generateGrid(n) {
  return Array.from({ length: n }, () => new Array(n).fill(0));
}

function getMexGridConstruction(n) {
  if (n === 1) {
    return console.log(0);
  }

  const gridRow = generateGrid(n);
  const gridCol = generateGrid(n);
  for (let i = 1; i < n; i++) {
    gridRow[0][i] = i;
    gridCol[0][i] = i;
    if (i) {
      gridRow[i][0] = i;
      gridCol[i][0] = i;
    }
  }

  console.log(gridRow[0].join(" "));

  for (let i = 1; i < n - 1; i++) {
    const set = new Set(
      Array.from({ length: n ** 2 - 1 }, (_, idx) => idx + 1)
    );
    for (let j = i + 1; j < n; j++) {
      for (let k = 0; k < j; k++) {
        set.delete(gridRow[i][k]);
        set.delete(gridCol[j][k]);
      }

      for (let value = 1; value < Infinity; value++) {
        if (set.has(value)) {
          gridRow[i][j] = gridRow[j][i] = gridCol[j][i] = value;
          break;
        }
      }

      for (let k = 0; k < j; k++) {
        set.add(gridCol[j][k]);
      }
    }

    console.log(gridRow[i].join(" "));
  }

  console.log(gridRow[n - 1].join(" "));
}
