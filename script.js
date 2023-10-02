

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

  let playerSelection = '';
  
  function getPlayerSelection() {

  
    const rockButton = document.getElementById('Rock');
    const paperButton = document.getElementById('Paper');
    const scissorsButton = document.getElementById('Scissors');
  
    rockButton.addEventListener('click', () => {
      playerSelection = 'Rock';
      (game);
    });
  
    paperButton.addEventListener('click', () => {
      playerSelection = 'Paper';
      (game);
    });
  
    scissorsButton.addEventListener('click', () => {
      playerSelection = 'Scissors';
      (game);
    });
  
  }
  getPlayerSelection();

function game(playerSelection) {

  let playerScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 5; round++) {

 
    const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  if (result === "You Win!") {
    playerScore++;
  } else if (result === "Computer Wins!") {
    computerScore++;
  }
  updateResult(result);
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

