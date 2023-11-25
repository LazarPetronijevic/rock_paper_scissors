array = ["Rock", "Paper", "Scissors"]
function getComputerChoice () {
    let computerSelection =  array[Math.floor(Math.random() * array.length)]
    return computerSelection
}