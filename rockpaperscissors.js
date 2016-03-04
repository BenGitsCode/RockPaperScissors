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
    computerMove = computerMove.toUpperCase();
    playerMove = playerMove.toUpperCase();
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
    while (playerWins < 5 || computerWins < 5) {
      if (playerWins === 5)
      {
        console.log('Player wins!' + ' The final score is ' + playerWins + ' to ' + computerWins);

      }
      else if (computerWins === 5)
      {
        console.log('Computer wins!' + ' The final score is ' + playerWins + ' to ' + computerWins);
      }
      else
        {



        var computerMove = getComputerMove();
        var playerMove = getPlayerMove();
        console.log(playerMove + ' ' + computerMove);
        var valid = false;
        if (playerMove.toUpperCase() === 'ROCK' || playerMove.toUpperCase() === 'PAPER' || playerMove.toUpperCase() === 'SCISSORS')
        {
          valid = true;
        }
        else
        {
          valid = false;
        }
        while (valid === false)
        {
          if (playerMove.toUpperCase() === 'ROCK' || playerMove.toUpperCase() === 'PAPER' || playerMove.toUpperCase() === 'SCISSORS')
          {
            valid = true;
          }
          else
          {
            valid = false;
          }
          console.log(playerMove.toUpperCase() + ' Stop being a dick, put in rock, paper or scissors you monster')
          playerMove = getPlayerMove();
        }



        var winner = getWinner(playerMove, computerMove);
            if (winner === 'player')
            {
              playerWins += 1
              console.log('Player chose ' + playerMove + ' while computer chose ' + computerMove + '.' + 'Player wins! The score is ' + 'Player ' + playerWins + ' to ' + 'Computer: ' + computerWins);



            }
            else if (winner === 'computer')
            {
              computerWins += 1;
              console.log('Player chose ' + playerMove + ' while computer chose ' + computerMove + '.' + 'Computer wins! The score is ' + 'Player ' + playerWins + ' to ' + 'Computer: ' + computerWins);



            }
            else
            {
              console.log('It is a Tie! The score is still Player: ' + playerWins + ' to ' +' Computer: ' + computerWins);

            }

    }}
}

playToFive();
