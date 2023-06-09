const computerChoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "It's a Tie!";
  }
}

function game() {
  for (let times = 0; times < 5; times++) {
    let userInput = prompt("Rock, paper, or scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(userInput, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log("You are the winner!");
  } else if (playerScore < computerScore) {
    console.log("You are the loser!");
  } else {
    console.log("It's a tie game!");
  }
  console.log(
    "Player Wins = " + playerScore + ", Computer Wins = " + computerScore
  );
}

game();
