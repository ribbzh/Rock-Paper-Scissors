const computerChoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let gameRounds = 0;

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

const firstButton = document.querySelector(".button1");
const secondButton = document.querySelector(".button2");
const thirdButton = document.querySelector(".button3");

firstButton.addEventListener("click", function () {
  if (gameRounds < 5) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultContainer = document.querySelector(".result");
    const resultText = document.createTextNode(result);
    resultContainer.innerHTML = "";
    resultContainer.append(resultText);
    gameRounds++;
    game();
  }
});
secondButton.addEventListener("click", function () {
  if (gameRounds < 5) {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultContainer = document.querySelector(".result");
    const resultText = document.createTextNode(result);
    resultContainer.innerHTML = "";
    resultContainer.append(resultText);
    gameRounds++;
    game();
  }
});
thirdButton.addEventListener("click", function () {
  if (gameRounds < 5) {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultContainer = document.querySelector(".result");
    const resultText = document.createTextNode(result);
    resultContainer.innerHTML = "";
    resultContainer.append(resultText);
    gameRounds++;
    game();
  }
});

function game() {
  const scoreText =
    "Player Wins = " + playerScore + ", Computer Wins = " + computerScore;

  const resultContainer = document.querySelector(".result1");

  const scoreTextNode = document.createTextNode(scoreText);
  resultContainer.innerHTML = "";

  resultContainer.appendChild(document.createElement("br"));
  resultContainer.appendChild(scoreTextNode);

  if (gameRounds === 5) {
    const result = resultText();
    const resultTextContainer = document.querySelector(".result");
    resultTextContainer.textContent = result;
    resultContainer.innerHTML = "";
    resultContainer.appendChild(resultTextContainer);
    resultContainer.appendChild(document.createElement("br"));
    resultContainer.appendChild(scoreTextNode);
  }
}

function resultText() {
  let resultText;

  if (playerScore > computerScore) {
    resultText = "You are the winner!";
  } else if (playerScore < computerScore) {
    resultText = "You are the loser!";
  } else {
    resultText = "It's a tie game!";
  }
  return resultText;
}
