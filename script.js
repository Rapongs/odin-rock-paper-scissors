function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 1 / 3) {
    return 'Rock';
  } else if (computerChoice > 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function getHumanChoice() {
  let humanChoice = window.prompt(
    'Choose one (1: rock, 2: paper, 3:scissors): ',
  );

  if (humanChoice == 1) {
    return 'Rock';
  } else if (humanChoice == 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  let humanWin =
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper');

  if (humanChoice === computerChoice) {
    console.log(`It's tie, ${humanChoice} vs ${computerChoice}`);
    return;
  }

  if (humanWin) {
    humanScore++;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

playRound(getComputerChoice(), getHumanChoice());
