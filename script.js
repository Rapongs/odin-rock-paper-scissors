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

function playGames() {
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

  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log(
      `Congratulations! You won the game (${humanScore} - ${computerScore})!`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Game over! The computer won (${computerScore} - ${humanScore}).`,
    );
  } else {
    console.log(
      `The overall game is a tie (${humanScore} - ${computerScore})!`,
    );
  }
}

playGames();
