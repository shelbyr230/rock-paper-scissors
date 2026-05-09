let humanScore = 0;
let computerScore = 0;
let round = 1;

const body = document.querySelector("body");

const playButton = document.createElement("button");
playButton.textContent = "Play";
playButton.addEventListener("click", () => playGame());
body.appendChild(playButton);

const btnContainer = document.createElement("div");
btnContainer.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        playRound(event.target.textContent);
    }
})
btnContainer.style.display = "none";
body.appendChild(btnContainer);

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
btnContainer.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "paper";
btnContainer.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";
btnContainer.appendChild(scissorsButton);

const scoreDiv = document.createElement("div");
scoreDiv.textContent = "round 1, Human: 0, Computer 0";
body.appendChild(scoreDiv);

const messageDiv = document.createElement("div");
messageDiv.textContent = "Press play";
body.appendChild(messageDiv);

function playGame() {
    scoreDiv.textContent = `Round ${round}, Human: ${humanScore}, Computer: ${computerScore}`;
    btnContainer.style.display = "block";
    messageDiv.textContent = "Choose rock, paper, or scissors."
    playButton.style.display = "none";
}

function playRound(humanChoice) {

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

    let computerChoice = getComputerChoice();

    if (round <= 5) {
        messageDiv.textContent = "";
        btnContainer.style.display = "block";
        messageDiv.textContent = "Choose rock, paper, or scissors."
        if ((computerChoice === "rock" && humanChoice === "scissors") ||
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
        scoreDiv.textContent = `Round ${round}, Human: ${humanScore}, Computer: ${computerScore}`;
    } else {
        btnContainer.style.display = "none";
        if (humanScore > computerScore) {
            messageDiv.textContent = "Game over, you win! Play again?";
        } else if (computerScore > humanScore) {
            messageDiv.textContent = "Game over, computer wins! Play again?";
        } else {
            messageDiv.textContent = "Game over, it was a tie! Play again?";
        }
        endGame();
    }
}

function endGame() {
    humanScore = 0;
    computerScore = 0;
    round = 1;
    btnContainer.style.display = "none";
    playButton.style.display = "block";
}

