const fs = require("fs");

const [_, ...games] = fs.readFileSync(0, "utf8").trim().split("\n");

for (const game of games) {
  getRaabGame1Solution(...game.split(" ").map(Number));
}

function makeDeck(n) {
  const deck = {};
  Array.from({ length: n }, (_, idx) => idx + 1).forEach(
    (rank) => (deck[rank] = rank)
  );

  return deck;
}

function getRaabGame1Solution(n, a, b) {
  const sum = a + b;
  const ties = n - sum;
  if (sum > n || a === n || b === n || sum === 1) {
    return console.log("NO");
  }

  const winner = Math.max(a, b);
  const winnerDeck = makeDeck(n);
  const loserDeck = { ...winnerDeck };
  const winnerSteps = [];
  const loserSteps = [];
  for (let i = 0; i < winner; i++) {
    const aRank = i > 0 && i === winner - 1 ? n : i + 2;
    winnerSteps.push(aRank);
    delete winnerDeck[aRank];

    const bRank = i + 1;
    loserSteps.push(bRank);
    delete loserDeck[bRank];
  }

  for (let i = 0; i < ties; i++) {
    const tieRank = winner + i + (winner === 1 ? 2 : 1);

    winnerSteps.push(tieRank);
    delete winnerDeck[tieRank];

    loserSteps.push(tieRank);
    delete loserDeck[tieRank];
  }

  winnerSteps.push(...Object.keys(winnerDeck));
  loserSteps.push(...Object.keys(loserDeck));

  if (winnerSteps.length !== loserSteps.length) {
    return console.log("NO");
  }

  console.log("YES");
  if (a >= b) {
    console.log(winnerSteps.join(" "));
    console.log(loserSteps.join(" "));
  } else {
    console.log(loserSteps.join(" "));
    console.log(winnerSteps.join(" "));
  }
}
