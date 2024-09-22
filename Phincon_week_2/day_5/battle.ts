const displayRound = document.getElementById(
  "display-round"
) as HTMLParagraphElement | null;
const player1Name = document.getElementById(
  "player1-name"
) as HTMLParagraphElement;
const player2Name = document.getElementById(
  "player2-name"
) as HTMLParagraphElement;
const player1Buttons = document.querySelectorAll('button[id^="P1-"]');
const player2Buttons = document.querySelectorAll('button[id^="P2-"]');
const nextButton = document.getElementById(
  "next-round"
) as HTMLButtonElement | null;

let roundBattle: string[][] = [];
let currentRoundPlayers: string[] = [];
let currentRound: number = 1;

const getRound = localStorage.getItem("roundMatch");
const getPlayerNames = JSON.parse(localStorage.getItem("playerNames") || "[]");
console.log(">>>>", getPlayerNames);

if (getRound && displayRound) {
  displayRound.innerHTML = `Match: ${currentRound} dari ${getRound}`;
  player1Name.innerHTML = getPlayerNames[0];
  player2Name.innerHTML = getPlayerNames[1];
}

player1Buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentRoundPlayers[0] = button.id.split("-")[1];
  });
});

player2Buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentRoundPlayers[1] = button.id.split("-")[1];
  });
});

nextButton?.addEventListener("click", () => {
  if (currentRoundPlayers.length === 2) {
    roundBattle.push(currentRoundPlayers);
    currentRoundPlayers = [];
    console.log(roundBattle);
    console.log(">>>>><", currentRoundPlayers);

    localStorage.setItem("roundBattle", JSON.stringify(roundBattle));
    currentRound++;
    if (displayRound) {
      displayRound.innerHTML = `Match: ${currentRound} dari ${getRound}`;
    }

    if (roundBattle.length === parseInt(getRound || "0")) {
      window.location.href = "result.html";
    }
  } else {
    alert("Kedua pemain harus memilih gerakan!");
  }
});
