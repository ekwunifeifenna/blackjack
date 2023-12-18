//create two variables for the first card and the second card to a random number between 2 and 11


let firstCard = 6
let secondCard = 7

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21){
    message = "You've got Blackjack!!"
    hasBlackJack = true
} else {
    message = "You are out of the game"
    isAlive = false
}


//cash out your money
