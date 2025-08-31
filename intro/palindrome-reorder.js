const fs = require("fs");

const [input] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getPalindromeReorder());

function getPalindromeReorder() {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    map[letter] = (map[letter] || 0) + 1;
  }

  const entries = Object.entries(map);
  let palindrome = "";
  let oddLetter = "";
  for (const [letter, count] of entries) {
    if (count % 2) {
      if (oddLetter) {
        return "NO SOLUTION";
      }

      oddLetter = letter;
    }

    palindrome += letter.repeat(count >> 1);
  }

  const reversed = palindrome.split("").reverse().join("");

  return palindrome + oddLetter + reversed;
}
