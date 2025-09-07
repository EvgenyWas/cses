const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

const DX = { 0: -1, 1: 1, 2: 2, 3: 2, 4: 1, 5: -1, 6: -2, 7: -2 };
const DY = { 0: -2, 1: -2, 2: -1, 3: 1, 4: 2, 5: 2, 6: 1, 7: -1 };
function isInside(c, n) {
  return c >= 0 && c < n;
}

solveKnightMovesGrid(Number(input));

function solveKnightMovesGrid(n) {
  const board = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  board[0][0] = 0;

  const queue = [{ x: 0, y: 0 }];
  while (queue.length) {
    const { y, x } = queue.shift();
    let moves = board[y][x] + 1;
    for (let i = 0; i < 8; i++) {
      const nx = x + DX[i];
      const ny = y + DY[i];
      if (!isInside(nx, n) || !isInside(ny, n)) {
        continue;
      }

      if (board[ny][nx] <= moves) {
        continue;
      }

      board[ny][nx] = moves;
      queue.push({ x: nx, y: ny });
    }
  }

  board.forEach((row) => console.log(row.join(" ")));
}
