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
