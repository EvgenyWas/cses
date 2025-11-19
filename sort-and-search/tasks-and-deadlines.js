const fs = require("fs");

const [, ...t] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(getSolution(t.map((item) => item.split(" ").map(Number))));

function getSolution(tasks) {
  tasks.sort((a, b) => a[0] - b[0]);
  let reward = 0;
  let time = 0;
  for (const [duration, deadline] of tasks) {
    reward += deadline - time - duration;
    time += duration;
  }

  return reward;
}
