const fs = require("fs");

const [nmk, s, a] = fs.readFileSync(0, "utf8").trim().split("\n");

const [applicants, totalApartments, diff] = nmk.split(" ").map(Number);
const requests = s.split(" ").map(Number);
const apartments = a.split(" ").map(Number);

console.log(getApartments());

function getApartments() {
  const sortedRequests = requests.sort((a, b) => a - b);
  const sortedApartments = apartments.sort((a, b) => a - b);
  let count = 0;
  while (sortedApartments.length && sortedRequests.length) {
    const biggestApartment = sortedApartments[sortedApartments.length - 1];
    const biggestRequest = sortedRequests[sortedRequests.length - 1];
    if (
      biggestRequest + diff >= biggestApartment &&
      biggestRequest - diff <= biggestApartment
    ) {
      count++;
      sortedRequests.pop();
      sortedApartments.pop();
      continue;
    }

    if (biggestApartment > biggestRequest) {
      sortedApartments.pop();
    } else {
      sortedRequests.pop();
    }
  }

  return count;
}
