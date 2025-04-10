const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possileChoices = document.querySelectorAll("button");
let userChoice;
possileChoices.forEach((possileChoices) =>
  possileChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoices();
    gerResult();
  })
);

function generateComputerChoices() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }

  if (randomNumber === 2) {
    computerChoice = "scissors";
  }

  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function gerResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }

  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!!!";
  }

  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lose !!";
  }

  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lose !!";
  }

  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win!!!";
  }

  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose !!";
  }

  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!!!";
  }

  resultDisplay.innerHTML = result;
}
