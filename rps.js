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

function game(){
    var playerScore = 0;
    var computerScore = 0;

    for(let i = 0; i < 5; i++){
        var round = i + 1;
        console.log("Round ", round.toString());

        const playerSelection = prompt("Rock, Paper, or Scissors?")
        const computerSelection = getComputerChoice();

        console.log("Computer chose:", computerSelection)

        var result = playRound(playerSelection, computerSelection) 
        if(result.includes("Win")){
            playerScore++;
        }
        else{
            computerScore++;
        }
        console.log(result);
    }

    
    console.log("Game Over");
    console.log("Your Score: ", playerScore.toString());
    console.log("Computer Score: ", computerScore.toString());
    if(playerScore > computerScore){
        console.log("You beat the computer! Good job!");
    }
    else if (playerScore < computerScore){
        console.log("You lost to the computer! Try Again!");
    }
    else{
        console.log("You tied with the computer. Not bad!")
    }
}

game();