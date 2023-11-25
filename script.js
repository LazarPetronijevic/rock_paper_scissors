array = ["Rock", "Paper", "Scissors"]
function getComputerChoice () {
    let computerSelection =  array[Math.floor(Math.random() * array.length)]
    return computerSelection
} 
function game () {
        function playRound (playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") {
            return "It's a draw"
        }
        if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
            return "You lose! Paper beats Rock."
        }
        if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
            return "You win! Rock beats Scissors."
        }
        if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
            return "You win! Paper beats Rock."
        }
        if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") {
            return "It's a draw"
        }
        if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
            return "You lose! Scissors beats Paper."
        }
        if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
            return "You lose! Rock beats Scissors"
        }
        if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
            return "You win! Scissors beats Paper."
        }
        if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors") {
            return "It's a draw"
        }
    }
    for (i=0; i<5; i++){
        let playerSelection = prompt("Choose between rock paper and scissors")
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}
game()