"use strict";
console.log("result.ts sedang dieksekusi");
const resultElement = document.getElementById("result");
const playAgain = document.getElementById("play-again");
let roundBattles;
let playerWin = JSON.parse(localStorage.getItem("playerNames") || "[]");
roundBattles = JSON.parse(localStorage.getItem("roundBattle") || "[]");
console.log(">>", roundBattles);
playAgain.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "roundmatch.html";
});
function rockPaperScissors(arr) {
    let player1Point = 0;
    let player2Point = 0;
    arr.forEach((round) => {
        const player1Movement = round[0];
        const player2Movement = round[1];
        if ((player1Movement === "R" && player2Movement === "S") ||
            (player1Movement === "P" && player2Movement === "R") ||
            (player1Movement === "S" && player2Movement === "P")) {
            player1Point++;
        }
        else if ((player2Movement === "R" && player1Movement === "S") ||
            (player2Movement === "P" && player1Movement === "R") ||
            (player2Movement === "S" && player1Movement === "P")) {
            player2Point++;
        }
    });
    if (player1Point > player2Point) {
        return `${playerWin[0]} win`;
    }
    else if (player2Point > player1Point) {
        return `${playerWin[1]} win`;
    }
    else {
        return "Tie";
    }
}
if (resultElement) {
    if (roundBattles.length > 0) {
        const result = rockPaperScissors(roundBattles);
        resultElement.innerHTML = result;
    }
    else {
        resultElement.innerHTML = "Tidak ada hasil permainan.";
    }
}
else {
    console.error("Elemen 'result' tidak ditemukan.");
}
