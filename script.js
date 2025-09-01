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

console.log(getComputerChoice());