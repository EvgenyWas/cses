const fs = require("fs");

const [l, c] = fs.readFileSync(0, "utf-8").trim().split("\n");

console.log(getSolution(Number(l), c.split(" ")));

function getSolution(length, cubes) {
  const towers = [Number(cubes[0])];
  const search = (target) => {
    let left = 0;
    let right = towers.length - 1;
    let middle;
    while (left <= right) {
      middle = Math.floor((left + right) / 2);
      const guess = towers[middle];
      if (guess <= target) {
        left = middle + 1;
        continue;
      }

      right = middle - 1;
    }

    if (towers[middle] <= target) {
      middle++;
    }

    return middle;
  };

  for (let i = 1; i < length; i++) {
    const cube = Number(cubes[i]);
    if (cube >= towers[towers.length - 1]) {
      towers.push(cube);
      continue;
    }

    const idx = search(cube);
    towers[idx] = cube;
  }

  return towers.length;
}
