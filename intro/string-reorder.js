const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getSolution());

function getSolution() {
  const startCode = "A".charCodeAt();
  const dictionary = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < input.length; i++) {
    const idx = input.charCodeAt(i) - 65;
    dictionary[idx] += 1;
  }

  let ans = [];
  while (ans.length < input.length) {
    let idxMax = 0;
    for (let i = 0; i < dictionary.length; i++) {
      if (dictionary[i] > dictionary[idxMax]) {
        idxMax = i;
      }
    }

    const rest = input.length - ans.length - dictionary[idxMax];
    if (rest + 1 < dictionary[idxMax]) {
      return -1;
    }

    if (rest + 1 === dictionary[idxMax]) {
      ans[ans.length] = idxMax;
      dictionary[idxMax] -= 1;
      continue;
    }

    for (let i = 0; i < dictionary.length; i++) {
      if (dictionary[i] && (ans.length === 0 || i !== ans[ans.length - 1])) {
        ans[ans.length] = i;
        dictionary[i] -= 1;
        break;
      }
    }
  }

  return ans.map((code) => String.fromCharCode(startCode + code)).join("");
}
