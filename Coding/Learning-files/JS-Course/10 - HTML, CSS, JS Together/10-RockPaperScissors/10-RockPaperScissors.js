let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
  };

  updateScoreElement();
  
/*
if(!score) {
  score = {
  wins : 0,
  losses : 0,
  ties : 0
  };
}
*/

function playGame(playerMove) {

  const computerMove = pickComputerMove();
  let result = ''

if (playerMove === 'scissors') {
  if(computerMove === 'rock') {
    result = 'You Lose.'}
  else if(computerMove === 'paper') {
    result = 'You win!'}
  else if (computerMove === 'scissors')  {
    result = 'Tie.'}
}

else if (playerMove === 'paper') {
  if(computerMove === 'rock') {
    result = 'You win!'}
  else if(computerMove === 'paper') {
    result = 'Tie.'}
  else if (computerMove === 'scissors')  {
    result = 'You Lose.';
  }
}
else if (playerMove === 'rock') {
  if(computerMove === 'rock') {
    result = 'Tie.'}
  else if(computerMove === 'paper') {
    result = 'You Lose.'}
  else if (computerMove === 'scissors') {
    result = 'You win!'
  }
}
if (result === 'You win!') { 
  score.wins++
}
else if (result === 'You Lose.') {
  score.losses++
}
else if (result === 'Tie.') {
  score.ties++
}

localStorage.setItem('score', JSON.stringify(score))

document.querySelector('.js-playervscomputer')
  .innerHTML = `You <img src="10-images/${playerMove}-emoji.png" class="move-icon">
                <img src="10-images/${computerMove}-emoji.png" class="move-icon"> Computer`

  document.querySelector('.js-result')
  .innerHTML = `${result}`

  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
}


function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if(randomNumber < 1/3 && randomNumber > 0) {
    computerMove = 'rock';
  }
  else if(randomNumber < 2/3 && randomNumber > 1/3) {
    computerMove = 'paper';
  }
  else if(randomNumber < 3/3 && randomNumber > 2/3) {
    computerMove = 'scissors';
  }
  return computerMove;
}

function resetScore() {
  score.wins = 0
  score.losses = 0
  score.ties = 0
  localStorage.removeItem('score')
  document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
}