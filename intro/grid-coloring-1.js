const fs = require("fs");

const [d, ...rows] = fs.readFileSync(0, "utf8").trim().split("\n");

const [n, m] = d.split(" ").map(Number);

getGridColoring1Solution();

function* getCharList() {
  yield* ["A", "B", "C", "D"];
}

function getGridColoring1Solution() {
  const result = Array.from({ length: n }, () => "");
  let prev = "";
  for (let i = 0; i < n; i++) {
    const row = rows[i].split("");
    for (let j = 0; j < m; j++) {
      const list = getCharList();
      let next = list.next();
      while (!next.done) {
        if (
          next.value !== prev[j] &&
          next.value !== row[j] &&
          result[i][j - 1] !== next.value
        ) {
          result[i] += next.value;
          break;
        }

        next = list.next();
      }
    }

    prev = result[i];
    if (result[i].length !== m) {
      return console.log("IMPOSSIBLE");
    }
  }

  result.forEach((row) => console.log(row));
}
