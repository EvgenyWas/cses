const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");
const MOD = BigInt(1_000_000_007);

console.log(getBitStrings(2, parseInt(input)).toString());

function mod(a, b) {
  return (a * b) % MOD;
}

function getBitStrings(n, k) {
  const newN = BigInt(n);
  const newK = BigInt(k);
  if (newK === 0n) {
    return 1n;
  }

  if (newK % 2n === 0n) {
    return getBitStrings(mod(newN, newN), newK / 2n);
  }

  return mod(newN, getBitStrings(newN, newK - 1n));
}
