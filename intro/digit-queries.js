const fs = require("fs");

const [_, ...queries] = fs.readFileSync(0, "utf8").trim().split("\n");

queries.forEach((query) => console.log(getDigit(BigInt(query))));

function getDigitsPerFactor(n) {
  return 9n * 10n ** (n - 1n) * n;
}

function getDigit(n) {
  if (n <= 9n) {
    return n.toString();
  }

  // total digits in the number the searching position belongs to
  let k = 1n;
  while (true) {
    const digitsPerFactor = getDigitsPerFactor(k);
    if (digitsPerFactor >= n) {
      break;
    }

    n -= digitsPerFactor;
    k += 1n;
  }

  const firstNumInBlock = 10n ** (k - 1n);
  const num = firstNumInBlock + (n - 1n) / k;
  const digitIdx = Number((n - 1n) % k);

  return num.toString()[digitIdx];
}
