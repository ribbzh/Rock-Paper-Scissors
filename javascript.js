const options = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
function checkWinner() {
  if (computerSelection === playerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else return "Computer";
}

function playerRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie") {
    return "Tie";
  } else if (result === "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    result === "Computer";
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playerRound(playerSelection, computerSelection));
