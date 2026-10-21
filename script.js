console.log("Hello World");

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose rock, paper, or scissors:");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const normalizedHumanChoice = humanChoice.toLowerCase();

  if (normalizedHumanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
  } else if (
    (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
    (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
    (normalizedHumanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${normalizedHumanChoice[0].toUpperCase() + normalizedHumanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${normalizedHumanChoice[0].toUpperCase() + normalizedHumanChoice.slice(1)}`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log(`You won the game! Final score: ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lost the game! Final score: ${computerScore} to ${humanScore}`);
  } else {
    console.log(`The game is a tie! Final score: ${humanScore} to ${computerScore}`);
  }
}
