let compChoice = { Value: "" };
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const buttons = document.querySelectorAll('.btn')

let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "May the best person win!";

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playerChoice = button.id;
        if (playerChoice == "rock") {
            playerChoiceInt = 0;
        } else if (playerChoice == "paper") {
            playerChoiceInt = 1;
        } else if (playerChoice == "scissors") {
            playerChoiceInt = 2;
        }
        compChoiceInt = computerPlay(compChoice);
        playGame();
    })
})

function computerPlay(compChoice) {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0) {
        compChoice.Value = "rock";
    } else if (choiceNum == 1) {
        compChoice.Value = "paper";
    } else if (choiceNum == 2) {
        compChoice.Value = "scissors";
    }
    return choiceNum;
}

function playRound() {
    let win_array = [[0, 2, 1], [1, 0, 2], [2, 1, 0]];
    let result = win_array[playerChoiceInt][compChoiceInt];
    if (result == 0) {
        output.textContent = `Its a tie! You picked ${playerChoice} and the computer chose ${compChoice.Value}`;
    } else if (result == 1) {
        output.textContent = `You won! Your ${playerChoice} beat the computers ${compChoice.Value}`;
        playerScore++;
    } else if (result == 2) {
        output.textContent = `You lost! The computers ${compChoice.Value} beat your ${playerChoice}`;
        compScore++;
    }
}

function playGame() {
    output.textContent = "Choose Rock, Paper, or Scissors";
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compScore}`;
    if (playerScore == 5) {
        output.textContent = "Woo! You won the game!";
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
    } else if (compScore == 5) {
        output.textContent = "You lost! Bummer!";
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
    }
}