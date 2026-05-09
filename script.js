let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1) {
        console.log(1);
        return "rock";
    } else if(randomNum === 2) {
        console.log(2);
        return "paper";
    } else {
        console.log(3);
        return "scissors";
    }
}

function getHumanChoice() {

    const choice = prompt("rock, paper, or scissors?").toLowerCase();
    if(choice === "rock") {
        console.log("rock");
        return "rock";
    } else if(choice === "paper") {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie!");
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    let round = 1;
   
    while (round <= 5) {
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("round: " + round);
        round++;
    } 

    if (round > 5) {
        console.log("Game over");
        return;
    }
}