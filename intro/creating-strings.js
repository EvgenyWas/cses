const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

const merge = (left, right) => {
  const copyLeft = [...left];
  const copyRight = [...right];
  const merged = [];

  while (copyLeft.length && copyRight.length) {
    if (copyLeft[0] < copyRight[0]) {
      merged.push(copyLeft.shift());
    } else {
      merged.push(copyRight.shift());
    }
  }

  return [...merged, ...copyLeft, ...copyRight];
};

const mergeSort = (numbers) => {
  if (numbers.length < 2) {
    return numbers;
  }

  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(createStrings(input));

function createStrings(n) {
  const l = n.length;
  if (l === 1) {
    return `1\n${n}`;
  }

  const createdStrings = new Set();
  let temp = "";
  const chosen = {};
  const search = () => {
    if (temp.length === l) {
      createdStrings.add(temp);
    } else {
      for (let i = 0; i < l; i++) {
        if (chosen[i]) {
          continue;
        }

        chosen[i] = true;
        temp += n[i];
        search();
        chosen[i] = false;
        temp = temp.substring(0, temp.length - 1);
      }
    }
  };
  search();

  const sortedStrings = mergeSort([...createdStrings]);

  return `${createdStrings.size}\n${sortedStrings.join("\n")}`;
}

console.timeEnd();
