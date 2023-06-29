function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();

    if(player === computer){
        return "Tie!"
    }
    if(player === "rock"){
        if(computer === "paper"){
            return "You Lose! Paper beats Rock";
        }
        if(computer === "scissors"){
            return "You Win! Rock beats Scissors";
        }
    }
    if(player === "paper"){
        if(computer === "rock"){
            return "You Win! Paper beats Rock";
        }
        if(computer === "scissors"){
            return "You Lose! Scissors beats Paper";
        }
    }
    if(player === "scissors"){
        if(computer === "rock"){
            return "You Lose! Rock beats Scissors";
        }
        if(computer === "paper"){
            return "You Win! Scissors beats Paper";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));