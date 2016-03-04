////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
  if (move === null)
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
    if (move === null)
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
      while (playerWins && computerWins < 5) {

      if (winner === 'player') {
        console.log('Player chose' + playerMove + ' while computer chose' + computerMove);
        console.log('The score is currently ' + playerWins +  ' to');
        return playerWins + 1;
      }
      else (winner === 'computer');
      {
        console.log('Computer chose ' + computerMove + 'while player chose ' + playerMove);
        console.log('The score is currently ' + playerWins + ' to' + computerWins);
        return playerWins + 1;
      }
    if (playerWins === 5) {
        console.log('Player won 5 times!');
    }
    else if (computerWins === 5) {
        console.log('Computer won 5 times!');
    }
    else
    {


    return [playerWins, computerWins];
  }
}
