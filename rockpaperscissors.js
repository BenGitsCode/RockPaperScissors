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
  if (move === null || move === undefined)
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
    if (move === null || move === undefined)
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
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        while (playerMove.toUpperCase() !== 'ROCK' || playerMove.toUpperCase() !== 'PAPER' || playerMove.toUpperCase() !== 'SCISSORS')
        {
          console.log('Stop being a dick, put in rock, paper or scissors you monster')
          playerMove = getPlayerMove();
        }
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
            if (winner === 'player') {
              console.log('Player chose ' + playerMove + ' while computer chose ' + computerMove + '.' + 'Player wins! The score is ' + 'Player ' + playerWins + ' to ' + 'Computer: ' + computerWins);
                return playerWins += 1;


            }
            else if (winner === 'computer')
            {
              console.log('Player chose ' + playerMove + ' while computer chose ' + computerMove + '.' + 'Computer wins! The score is ' + 'Player ' + playerWins + ' to ' + 'Computer: ' + computerWins);
                return computerWins += 1;


            }
            else
            {
              console.log('It is a Tie! The score is still Player: ' + playerWins + ' to ' +' Computer: ' + computerWins);

            }
      if (playerWins === 5)
      {
        console.log('Player wins!' + ' The final score is ' + playerWins + ' to ' + computerWins);

      }
      else if (computerWins === 5)
      {
        console.log('Compter wins!' + ' The final score is ' + playerWins + ' to ' + computerWins);
      }

    }
}

playToFive();
