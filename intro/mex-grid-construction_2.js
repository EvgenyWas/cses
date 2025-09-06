const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

getMexGridConstruction(Number(input));

function getMexGridConstruction(n) {
  if (n === 1) {
    return console.log(0);
  }

  const board = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 1; i < n; i++) {
    board[0][i] = i;
    if (i) {
      board[i][0] = i;
    }
  }

  console.log(board[0].join(" "));

  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      board[i][j] = board[j][i] = board[0][j] ^ board[i][0];
    }

    console.log(board[i].join(" "));
  }

  console.log(board[n - 1].join(" "));
}
