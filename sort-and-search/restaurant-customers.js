const fs = require("fs");

const [_, ...c] = fs.readFileSync(0, "utf8").trim().split("\n");
const customers = c.map((customer) => customer.split(" ").map(Number));

console.log(getMaximumCustomerAtTheSameTime());

function getMaximumCustomerAtTheSameTime() {
  const events = customers
    .reduce((acc, customer) => {
      acc.push({ time: customer[0], event: "arrival" });
      acc.push({ time: customer[1], event: "leaving" });
      return acc;
    }, [])
    .sort((a, b) => a.time - b.time);
  let counter = 0;
  let max = 0;
  for (const { event } of events) {
    counter = counter + (event === "arrival" ? +1 : -1);
    max = Math.max(max, counter);
  }

  return max;
}
