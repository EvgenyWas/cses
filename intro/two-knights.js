const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

for (let i = 1; i < parseInt(input) + 1; i++) {
  console.log(getNumberOfPlaces(i));
}

function getNumberOfPlaces(n) {
  if (n === 1) {
    return 0;
  }

  const attackedPlaces = 4 * (n - 2) * (n - 1);
  const allAvailablePlaces = (n * n * (n * n - 1)) / 2;

  return allAvailablePlaces - attackedPlaces;
}
