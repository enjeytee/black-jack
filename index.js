
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = 
{
    name: "John",
    chips: 999.00
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// ALTERNATIVE METHOD USING CLASS
// let cardsEl = document.querySelector(".cards-el")

function getRandomCard()
{
    let temp = Math.floor(Math.random() * 13) + 1
    if (temp === 1)
    {
        return 11
    }
    else if (temp > 10)
    {
        return 10
    }
    else
    {
        return temp
    }
}

function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame()
{
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "        
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20)
        {
            message = "Do you want another card?"
        } else if (sum === 21)
        {
            message = "You've got Blackjack!"
            hasBlackJack = true
        } else
        {
            message = "You're out of the game!"
            isAlive = false
        }
    messageEl.textContent = message
}

function newCard()
{
    if (isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}