function getComputerChoice() {
    const rand = Math.random() * 3;
    if (rand < 1)
        return "paper"
    else if (rand < 2)
        return "scissors"
    else
        return "rock"
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        statusText.textContent = "Tie! " + playerChoice + " ties with " + computerChoice + "."
    else if ((playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "rock" && computerChoice === "scissors")) {
        playerScore++
        statusText.textContent = "You Win! " + playerChoice + " beats " + computerChoice + "."
        playerScoreText.textContent = "Player Score: " + playerScore
    }
    else {
        computerScore++
        statusText.textContent = "You Lose! " + computerChoice + " beats " + playerChoice + "."
        computerScoreText.textContent = "Computer Score: " + computerScore
    }

    round++
    roundText.textContent = "Round " + round

    if (round === 5) {
        if (playerScore === computerScore)
            gameOverTitle.textContent = "Tie!"
        else if (playerScore > computerScore)
            gameOverTitle.textContent = "You Win!"
        else
            gameOverTitle.textContent = "You Lose!"

        gameOverModal.showModal()
    }
}

let playerScore = 0, computerScore = 0
let round = 0
const buttonContainer = document.querySelector("#button-container")
const playerScoreText = document.querySelector("#player-score")
const computerScoreText = document.querySelector("#computer-score")
const statusText = document.querySelector("#status")
const roundText = document.querySelector("#round")
const gameOverModal = document.querySelector("#game-over-modal")
const gameOverTitle = document.querySelector("#game-over-title")
const replayButton = document.querySelector("#replay-button")

buttonContainer.addEventListener("click", function(event) {
    if (round < 5)
        playRound(event.target.id, getComputerChoice())
})

replayButton.addEventListener("click", function() {
    location.reload()
})