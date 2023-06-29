function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

console.log(getComputerChoice());