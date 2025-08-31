const fs = require("fs");

const input = parseInt(fs.readFileSync(0, "utf8"));

console.log(getTrailingZeros(input));

function getTrailingZeros(n, power = 1, zeros = 0) {
  const powerZeros = Math.floor(n / 5 ** power);
  if (!powerZeros) {
    return zeros;
  }

  return getTrailingZeros(n, ++power, zeros + powerZeros);
}
