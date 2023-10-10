
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function playRound(playerSelection, computerSelection) {


  if (playerSelection === computerSelection) {
    return "It's a Tie!";
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }  
}


  function updateResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Result: ' + result;
  }


  
  function getPlayerSelection(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result === "You Win!") {
      playerScore++;
    } else if (result === "Computer Wins!") {
      computerScore++;
    }
    updateResult(result);
  
  
if (currentRound > 5) {
  alert(`Final Scores: Player ${playerScore} - ${computerScore} Computer`);

  if (playerScore > computerScore) {
    alert("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    alert("Computer wins the game. Better luck next time!");
  } else {
    alert("The game is a tie!");
  }
} 
}
function startGame() {
  const rockButton = document.getElementById('Rock');
  const paperButton = document.getElementById('Paper');
  const scissorsButton = document.getElementById('Scissors');
  rockButton.addEventListener('click', () => getPlayerSelection('Rock'));
  paperButton.addEventListener('click', () => getPlayerSelection('Paper'));
  scissorsButton.addEventListener('click', () => getPlayerSelection('Scissors'));
}

alert("Make your selection! Best out of 5.");
startGame();

