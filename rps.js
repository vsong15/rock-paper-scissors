let playerScore = 0;
let computerScore = 0;
updateScore();

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "Tie!";
    } else if (player === "rock") {
        if (computer === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else if (computer === "scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if (computer === "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else if (computer === "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        }
    }
}

function updateScore() {
    const scoreElement = document.getElementById("results");
    scoreElement.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        const winner =
            playerScore === 5 ? "Player" : computerScore === 5 ? "Computer" : "No one";
        scoreElement.textContent = `Game Over! ${winner} wins the game.`;

        // Disable the buttons once the game is over.
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("restart").disabled = false;
    }
}

function onButtonClick(event) {
    const playerSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultElement = document.getElementById("results");
    resultElement.textContent = result;
    updateScore();
}

function onRestartClick() {
    playerScore = 0;
    computerScore = 0;
    const resultElement = document.getElementById("results");
    resultElement.textContent = "";
    updateScore();

    // Enable the buttons again for the next game.
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("restart").disabled = true;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", onButtonClick);
document.getElementById("paper").addEventListener("click", onButtonClick);
document.getElementById("scissors").addEventListener("click", onButtonClick);
document.getElementById("restart").addEventListener("click", onRestartClick);

// Disable the restart button initially until the game ends.
document.getElementById("restart").disabled = true;
