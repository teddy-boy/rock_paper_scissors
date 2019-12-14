'use strict';

function computerPlay() {
  let play = Math.floor(Math.random() * 3);
  switch (play) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
function playRound(playerSelection, computerSeclection) {
  playerSelection = playerSelection.toLowerCase();
  let result;
  switch (playerSelection) {
    case "rock":
      computerSeclection === "rock" ? result = "Draw" :
      computerSeclection === "paper" ? result = "You lose! Paper beats Rock" : result = "You win! Rock beats Scissors";
      break;
    case "paper":
      computerSeclection === "paper" ? result = "Draw" : computerSeclection === "scissors" ? result = "You lose! Scissors beats Paper" : result = "You win! Paper beats Rock";
      break;
    case "scissors":
      computerSeclection === "scissors" ? result = "Draw" : computerSeclection === "rock" ? result = "You lose! Rock beats Scissors" : result = "You win! Scissors beats Paper";
      break;
  }
  return result;
}
function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice");
    let computerSeclection = computerPlay();
    let play = playRound(playerSelection, computerSeclection);
    console.log(play);
    if (play.indexOf('win') != -1) {
      score += 1;
    } else if (play.indexOf('lose') != -1) {
      score -= 1;
    }
  }
  let result;
  switch (true) {
    case (score > 0):
      result = "You win!";
      break;
    case (score < 0):
      result = "You lose!";
      break;
    default:
      result = "Draw";
  }
  return result;
}
console.log(`The final result is: ${game()}`);