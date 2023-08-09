
//signals computer to make a random choice between rock, paper and scissors
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//main game function for each round played to determine each winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}

//this function starts off our 5 round game function but allows the initial round to be included in scorekeeping
function game() {
  let playerScore = 0;
  let computerScore = 0;

  
  const initialPlayerSelection = prompt("Round 1: Rock, Paper, or Scissors? Best out of 5!").toLowerCase();
  const initialComputerSelection = getComputerChoice();
  const initialResult = playRound(initialPlayerSelection, initialComputerSelection);
  alert(initialResult);
//add thsi additional else if to ensure the player and computer scores are accurately tracked at the end
  if (result === "You Win!") {
    playerScore++;
  } else if (result === "Computer Wins!") {
    computerScore++;
  }

 //start this game function at round 2 to eliminate accidnetal extra rounds
  for (let round = 2; round <= 5; round++) {
    const playerSelection = prompt(`Round ${round}: Rock, Paper, or Scissors?`).toLowerCase();
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    if (result === "You Win!") {
      playerScore++;
    } else if (result === "Computer Wins!") {
      computerScore++;
    }
    alert(result);
  }

  alert(`Final Scores: Player ${playerScore} - ${computerScore} Computer`);

  if (playerScore > computerScore) {
    alert("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    alert("Computer wins the game. Better luck next time!");
  } else {
    alert("The game is a tie!");
  }
}

game();
