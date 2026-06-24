function getComputerChoice() {
    const rand = Math.random() * 3;
    if (rand < 1)
        return "paper"
    else if (rand < 2)
        return "scissors"
    else
        return "rock"
}

function getHumanChoice() {
    let choice = prompt("Select rock, paper, or scissors.");
    return choice.toLowerCase();
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice)
            alert("Tie! " + humanChoice + " ties with " + computerChoice + ".")
        else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
            alert("You win! " + humanChoice + " beats " + computerChoice + ".")
            humanScore++
        }
        else {
            alert("You lost! " + computerChoice + " beats " + humanChoice + ".")
            computerScore++
        }
    }

    let humanScore = 0, computerScore = 0

    for (let i = 0; i < 5; i++)
        playRound(getHumanChoice(), getComputerChoice())

    alert("Your Score: " + humanScore + "\nComputer Score: " + computerScore)
}

playGame()