let bgMusic = document.getElementById(bgmusic)
bgmusic.volume = 0.4;

let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el")
const cardsEl = document.querySelector(".cards-el");
function startGame(){
    cardsEl.textContent = "Cards : " + firstCard + " " + secondCard
    sumEl.textContent = "Sum : " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card?"
        messageEl.textContent = message;
    } else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        messageEl.textContent = message
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        messageEl.textContent = message
        isAlive = false;
    }
}

function newCard() {
    let newCard = 5;
    console.log(newCard)
}



// CASH OUT!