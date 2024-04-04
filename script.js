function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      return "It's a draw!";
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
      return 'You win!';
  } else {
      return 'You lose!';
  }
}

function chooseOption(playerSelection) {
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  document.getElementById('result').innerText = `You chose: ${playerSelection}.  The computer chose: ${computerSelection}. ${result}`;
}
