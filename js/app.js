const your_score = document.querySelector(".player-score");
const computer_score = document.querySelector(".computer-score");
const rock_button = document.querySelector(".rock");
const paper_button = document.querySelector(".paper");
const scissor_button = document.querySelector(".scissor");
const your_choice = document.querySelector(".your-choice");
const computers_choice = document.querySelector(".computers-choice");
const result = document.querySelector(".result");

let picked = "";
let computer_picked = "";

function pick(choice) {
    console.log(choice);
    picked = choice;
    your_choice.innerHTML = "You picked " + choice;

    computerPick();
}

function computerPick() {
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(randomNumber);

    if (randomNumber == 1) {
        computer_picked = "rock";
    }
    if (randomNumber == 2) {
        computer_picked = "paper";
    }
    if (randomNumber == 3) {
        computer_picked = "scissor";
    }
    computers_choice.innerHTML = "Computer picked " + computer_picked;
    evaluate();
}

function evaluate() {
    if (picked == "rock") {
        if (computer_picked == "rock") {
            console.log("draw");
            result.innerHTML = "It's a draw! No points awarded.";
        }
        if (computer_picked == "paper") {
            console.log("computer wins");
            result.innerHTML = "Computer wins the round";
            computer_score.innerHTML++;
        }
        if (computer_picked == "scissor") {
            result.innerHTML = "You win the round";
            your_score.innerHTML++;
        }
    }
    if (picked == "paper") {
        if (computer_picked == "paper") {
            console.log("draw");
            result.innerHTML = "It's a draw! No points awarded.";
        }
        if (computer_picked == "scissor") {
            console.log("computer wins");
            result.innerHTML = "Computer wins the round";
            computer_score.innerHTML++;
        }
        if (computer_picked == "rock") {
            result.innerHTML = "You win the round";
            your_score.innerHTML++;
        }
    }
    if (picked == "scissor") {
        if (computer_picked == "scissor") {
            console.log("draw");
            result.innerHTML = "It's a draw! No points awarded.";
        }
        if (computer_picked == "rock") {
            console.log("computer wins");
            result.innerHTML = "Computer wins the round";
            computer_score.innerHTML++;
        }
        if (computer_picked == "paper") {
            result.innerHTML = "You win the round";
            your_score.innerHTML++;
        }
    }

    if (your_score.innerHTML == 5) {
        document.querySelector(".status").innerHTML = "You won the game!";
        document.querySelector(".buttons").classList.add("hidden");
        your_choice.classList.add("hidden");
        computers_choice.classList.add("hidden");
        result.classList.add("hidden");
    }
    if (computer_score.innerHTML == 5) {
        document.querySelector(".status").innerHTML =
            "The computer won the game!";
        document.querySelector(".buttons").classList.add("hidden");
        your_choice.classList.add("hidden");
        computers_choice.classList.add("hidden");
        result.classList.add("hidden");
    }
}
