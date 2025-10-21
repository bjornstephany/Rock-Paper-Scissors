//Declare the players score variables
let humanScore = 0;
let computerScore = 0;

//Write the logic to play the entire game
function playRound() {
  let computerChoice = getComputerChoice();
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
  } else {
    computerScore++;
  }
  document.getElementById("humanScore").innerHTML = "Human Score: " + humanScore;
  document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
  if(humanScore == 5){
    alert("You win!")
  }
  if(computerScore == 5) {
    alert("You lose!")
  }
}
let humanChoice;
const rock = document.querySelector("#Rock");
rock.addEventListener("click", () => {
  humanChoice = "rock";
  playRound();
});

const paper = document.querySelector("#Paper");
paper.addEventListener("click", () => {
  humanChoice = "paper";
  playRound();
});

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  playRound();
});

//Get computer choice
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let computerChoice;
  if (num ==0 ) {
    computerChoice = "rock";
  } else if (num == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}