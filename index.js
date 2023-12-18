//create two variables for the first card and the second card to a random number between 2 and 11


let firstCard = 6
let secondCard = 7

let sum = firstCard + secondCard

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21){
    console.log("You've got Blackjack!!")
} else {
    console.log("You are out of the game")
}