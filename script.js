//Get computer choice
function getComputerChoice() {
  let num = Math.random();
  let computerChoice;
  if (num > 0.6666666666) {
    computerChoice = "rock";
  } else if (num <= 0.666666666 && num > 0.3333333333) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

//Get human choice
function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?");
  return humanChoice.toLowerCase();
}

//Declare the players score variables
let humanScore = 0;
let computerScore = 0;

//Write the logic to play the entire game
function playGame() {
  for (let i = 0; i < 5; i++) {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    function playRound(humanChoice, computerChoice) {
      if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
      } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
      } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
      } else {
        computerScore++;
      }
    }
  }
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You win!")
  } else {
    console.log("You lose :(")
  }
}

console.log(playGame());