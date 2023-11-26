array = ["Rock", "Paper", "Scissors"]
function getComputerChoice () {
    return array[Math.floor(Math.random() * array.length)]
} 
let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")
let winner = document.createElement("div")

//determines the winner 
function playRound (playerSelection, computerSelection) {
    let result;
    let updateComputerScore =  Number(computerScore.textContent);
    let updatePlayerScore =  Number(playerScore.textContent);
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") {
         result = "It's a draw";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
         result = "You lose! Paper beats Rock.";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
         result = "You win! Rock beats Scissors.";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
         result = "You win! Paper beats Rock.";
    }
     if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") {
         result = "It's a draw";
    }
     if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
         result = "You lose! Scissors beats Paper.";
    }
     if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
         result = "You lose! Rock beats Scissors.";
     }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
         result = "You win! Scissors beats Paper.";
    }
     if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors") {
         result = "It's a draw";
    }
    if (result.includes("lose")){
        updateComputerScore++
        computerScore.textContent = updateComputerScore
    }
    if (result.includes("win")){
        updatePlayerScore++
        playerScore.textContent =  updatePlayerScore
    }
    updateDisplay(result);
    checkWinner (updatePlayerScore,updateComputerScore);
};

function checkWinner (updatePlayerScore,updateComputerScore){
    if (updatePlayerScore == 5){
        winner.textContent = "You won"
        display_div.appendChild(winner)
    }
    if (updateComputerScore == 5){
        winner.textContent = "Computer won"
        display_div.appendChild(winner)
    }
};
//determines which button you pressed and calls updateDisplay function
let playerSelection;
let computerSelection;

let button_rock = document.getElementById("rock");
button_rock.addEventListener("click", function() {
    playerSelection = "rock"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
});

let button_paper = document.getElementById("paper");
button_paper.addEventListener("click", function() {
    playerSelection = "paper"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
});

let button_scissors = document.getElementById("scissors");
button_scissors.addEventListener("click", function() {
    playerSelection = "scissors"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
});

let display_div = document.querySelector("div")

//displays the winner
function updateDisplay (result){
    if (result == "It's a draw"){
        let display_result = document.createElement("div");
        display_result.textContent = result;
        display_div.appendChild(display_result)
    };
    if (result == "You lose! Paper beats Rock."){
        let display_result = document.createElement("div");
        display_result.textContent = result;
        display_div.appendChild(display_result)
    };
    if (result == "You lose! Scissors beats Paper."){
        let display_result = document.createElement("div");
        display_result.textContent = result;
        display_div.appendChild(display_result)
    };
    if (result == "You lose! Rock beats Scissors."){
        let display_result = document.createElement("div");
        display_result.textContent = result;
        display_div.appendChild(display_result)
    };
    if (result == "You win! Rock beats Scissors."){
        let display_result = document.createElement("div");
        display_result.textContent = result;
        display_div.appendChild(display_result)
    };
    if (result == "You win! Paper beats Rock."){
        let display_result = document.createElement("div");
        display_result.textContent = result;
        display_div.appendChild(display_result)
    };
    if (result == "You win! Scissors beats Paper."){
        let display_result = document.createElement("div");
        display_result.textContent = result;
        display_div.appendChild(display_result)
    };

};


