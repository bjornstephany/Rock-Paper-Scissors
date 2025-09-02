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
function playRound(humanChoice, computerChoice) {
    //choice logic
    let win;
    if (humanChoice == "rock" && computerChoice == "scissorrs") {
        win = true;
    } 
    if (humanChoice == "paper" && computerChoice == "rock") {
        win = true;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        win = true
    }
    rock > scissors;

    paper > rock;

    scissors > paper;
    
    if (humanChoice.localeCompare(computerChoice, "en", {sensitivity: "base"}) == 0) {
        console.log("Tie! No points.")
    } else if (humanChoice > computerChoice) {
        console.log("You win! One point to the human.")
        humanScore ++;
    } else {
        console.log("You lose! One point to the computer.")
        computerScore ++;
    }
}

//Write the logic to play the entire game

//Check results in console
console.log(getComputerChoice());
console.log(getHumanChoice());

let a = "rock";
let b = "paper";
let c = "scissors"
console.log(a.localeCompare(b, "en", {sensitivity: "base"}));
console.log(a.localeCompare(c, "en", {sensitivity: "base"}));
console.log(b.localeCompare(c, "en", {sensitivity: "base"}));