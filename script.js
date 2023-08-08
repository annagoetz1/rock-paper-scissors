#create a function called getComputerChoice that randomly returns Rock Paper or Scissors
#create a function that plays a single round 
#create a prompt to get input from user
#set parameters under playerSelection and computerSelection
#return a string that declares the winner of the round
#include case -insensitive parameters for functions
#ensure results are returned instead of console.log
#create a new function called game to use previous function inside of
#make this function call 5 times over to make a 5 round game
#make a functino to declare a tie or try again if choices match up 

const playerSelection = prompt("Rock, Paper, or Scissors? Best out of 5!").toLowerCase();

function getComputerChoice () {
const choices = ['Rock', 'Paper', 'Scissors'];
const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex]
}
 const computerSelection = getComputerChoice();
 console.log('Computer chose: ' + computerSelection);


 function playRound (playerSelection, computerSelection) {
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

  const result = playRound(playerSelection, computerSelection);
console.log(result);

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 2; round <= 5; round++) {
    const playerSelection = prompt(`Round ${round}: Rock, Paper, or Scissors?`).toLowerCase();
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    

    if (result === "You Win!") {
      playerScore++;
    } else if (result === "Computer Wins!") {
      computerScore++;
    }
  console.log(result);
  }

  console.log(`Final Scores: Player ${playerScore} - ${computerScore} Computer`);

  if (playerScore > computerScore) {
   console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game. Better luck next time!");
  } else {
    console.log("The game is a tie!");
  }
}
game();