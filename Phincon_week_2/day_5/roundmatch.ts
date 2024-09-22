const elementInput = document.getElementById("input-game") as HTMLInputElement;
const player1NameInput = document.getElementById(
  "player1Names"
) as HTMLInputElement;
const player2NameInput = document.getElementById(
  "player2Names"
) as HTMLInputElement;
const startGameButton = document.getElementById(
  "start-game"
) as HTMLButtonElement;

startGameButton.addEventListener("click", () => {
  let playerName: string[] = [];
  const roundMatch = elementInput.value;
  const player1 = player1NameInput.value;
  const player2 = player2NameInput.value;
  playerName.push(player1, player2);
  if (roundMatch) {
    localStorage.setItem("roundMatch", roundMatch);
    localStorage.setItem("playerNames", JSON.stringify(playerName));

    window.location.href = "battle.html";
  } else {
    alert("Masukkan jumlah ronde terlebih dahulu!");
  }
});
