let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const playButton = document.createElement("button");
playButton.textContent = "Play";
playButton.addEventListener("click", () => playGame());
body.appendChild(playButton);

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1) {
        return "rock";
    } else if(randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(choice) {
    if(choice === "rock") {
        return "rock";
    } else if(choice === "paper") {
        return "paper";
    } else if(choice === "scissors") {
        return "scissors";
    }
}

function playGame() {

    let round = 1;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    const rockButton = document.createElement("button");
    rockButton.textContent = "rock";
    rockButton.addEventListener("click", () => playRound("rock", computerSelection));
    body.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.textContent = "paper";
    paperButton.addEventListener("click", () => playRound("paper", computerSelection));
    body.appendChild(paperButton);

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "scissors";
    scissorsButton.addEventListener("click", () => playRound("scissors", computerSelection));
    body.appendChild(scissorsButton);

    const scoreDiv = document.createElement("div");
    scoreDiv.textContent = "round 1, Human: 0, Computer 0";
    body.appendChild(scoreDiv);

    const messageDiv = document.createElement("div");
    messageDiv.textContent = "";
    body.appendChild(messageDiv);


    function playRound(humanChoice, computerChoice) {
        scoreDiv.textContent = `Round ${round}, Human: ${humanScore}, Computer: ${computerScore}`;
        messageDiv.textContent = "";

        if(round <= 5) {
            if((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")) {
                computerScore++;
                messageDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            } else if (computerChoice === humanChoice) {
                messageDiv.textContent = "It's a tie!";
            } else {
                humanScore++;
                messageDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            }
            round++;
        } else {
            if (humanScore > computerScore) {
                messageDiv.textContent = "Game over, you win!";
            } else if (computerScore > humanScore) {
                messageDiv.textContent = "Game over, computer wins!";
            } else {
                messageDiv.textContent = "Game over, it was a tie!";
            }
            return;
        }
    }
}