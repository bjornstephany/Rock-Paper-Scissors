//Write logic to get the computer choice
//Create new function named getComputer Choice
function getComputerChoice() {
    let num = Math.random();
    let choice;
    if (num > 0.6666666666) {
        choice = "rock";
    } else if (num <=0.666666666 && num > 0.3333333333) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

//Write the logic to get the human choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice;
}

//Declare the players score variables
let humanScore = 0;
let computerScore = 0;

//Write the lofic to play a single round

//Write the logic to play the entire game

//Check results in console
console.log(getComputerChoice());
console.log(getHumanChoice());
