let player = {
    name: "Per",
    chips: 200
}

let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
//  Store the message-el paragraph in a variable called messageEl
let messageEl=document.getElementById("message-el")
//Store the sum paragraph in a variable called sumEl
let sumEl=document.getElementById("sum-el")
//Store the card paragraph in a variable called cardEl
let cardsEl=document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
// Make this function return a random number between 1 and 13
function getRandomCard() {
    return Math.floor( Math.random()*13 ) + 1 // 1-13
}

function renderGame() {
   
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message // Display the message in the messageEl using messageEl.textContent
    
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

