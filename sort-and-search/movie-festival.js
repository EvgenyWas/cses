const fs = require("fs");

const [_, ...m] = fs.readFileSync(0, "utf8").trim().split("\n");

console.log(
  getMaximumNumberOfMovies(m.map((item) => item.split(" ").map(Number)))
);

function getMaximumNumberOfMovies(movies) {
  const sortedMovies = movies.sort((a, b) => a[1] - b[1]);
  let counter = 1;
  let watchingMovie = sortedMovies[0];
  for (let i = 1; i < sortedMovies.length; i++) {
    const cur = sortedMovies[i];
    if (cur[0] >= watchingMovie[1]) {
      watchingMovie = cur;
      counter++;
    }
  }

  return counter;
}
