function rockPaperScissors(players, arr) {
  console.log(">>", players);
  let player1 = players[0];
  let player2 = players[1];
  let player1Point = 0;
  let player2Point = 0;

  console.log("player 1", player1);

  arr.forEach((arr) => {
    console.log(">>>", arr);
    let player1Movement = arr[0];
    let player2Movement = arr[1];

    console.log("A", player1Movement);
    console.log("B", player2Movement);

    if (
      (player1Movement === "R" && player2Movement === "S") ||
      (player1Movement === "P" && player2Movement === "R") ||
      (player1Movement === "S" && player2Movement === "P")
    ) {
      player1Point++;
    } else if (
      (player2Movement === "R" && player1Movement === "S") ||
      (player2Movement === "P" && player1Movement === "R") ||
      (player2Movement === "S" && player1Movement === "P")
    ) {
      player2Point++;
    }
  });

  console.log("point 1 :", player1Point);
  console.log("point 2 :", player2Point);
  console.log(player1Point > player2Point);

  if (player1Point > player2Point) {
    return player1;
  } else if (player2Point > player1Point) {
    return player2;
  } else {
    return "Tie";
  }
}

// console.log(
//   "juara",
//   rockPaperScissors(
//     ["udin", "kulo"],
//     [
//       ["P", "P"],
//       ["R", "P"],
//     ]
//   )
// );

function getBudget(arr) {
  return arr.reduce((acc, person) => {
    return acc + person.budget;
  }, 0);
}

console.log(
  "hasi",
  getBudget([
    { nama: "udin", age: 21, budget: 28000 },
    { nama: "udina", age: 11, budget: 29000 },
  ])
);
