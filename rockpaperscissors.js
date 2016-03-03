////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  if(move === null)
{
 move = getInput();
}
else
{
 move = move;
}
   return move;
}



function getComputerMove(move) {
    if(move === null)
  {
   move = randomPlay();
  }
  else
  {
   move = move;
  }
     return move;
}



function getWinner(playerMove,computerMove) {
    var winner;
    if (computerMove === playerMove)
    {
      winner = 'Tie';
    }
    else if (computerMove === 'ROCK')
    {
      if (playerMove === 'PAPER')
      {
        winner = 'player';
      }
      else if (playerMove === 'SCISSORS')
      {
        winner = 'computer';
      }
    }
    else if (computerMove === 'PAPER')
    {
      if (playerMove === 'ROCK')
      {
        winner = 'computer';
      }
      else if (playerMove === 'SCISSORS')
      {
        winner = 'player';
      }
    }
    else if (computerMove === 'SCISSORS')
    {
      if  (playerMove === 'ROCK')
      {
        winner = 'player';
      }
      else if (playerMove === 'PAPER')
      {
        winner = 'computer';
      }

    }
    else
    {
      winner = null;
    }
    return winner;
  }


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


//git test//
