#create a function called getComputerChoice that randomly returns Rock Paper or Scissors
#create a function that plays a single round 
#create a prompt to get input from user
#set parameters under playerSelection and computerSelection
#return a string that declares the winner of the round
#include case -insensitive parameters for functions
#ensure results are returned instead of console.log
#create a new function called game to use previous function inside of
#make this function call 5 times over to make a 5 round game

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

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
  function playRounds ()