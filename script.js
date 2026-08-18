let playerScore = 0;
let computerScore = 0;

const rules = {
  batu: { emoji: '🪨', beats: 'gunting' },
  kertas: { emoji: '📄', beats: 'batu' },
  gunting: { emoji: '✂️', beats: 'kertas' },
};

function play(playerSelection) {
  const choices = Object.keys(rules);
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('player-choice').textContent =
    rules[playerSelection].emoji;
  document.getElementById('computer-choice').textContent =
    rules[computerSelection].emoji;

  const statusText = document.getElementById('status-text');

  // 1. Hitung pemenang ronde & perbarui skor
  if (playerSelection === computerSelection) {
    statusText.textContent = 'Hasil Seri!';
    statusText.style.color = 'var(--draw)';
  } else if (rules[playerSelection].beats === computerSelection) {
    playerScore++;
    document.getElementById('player-score').textContent = playerScore;
    statusText.textContent = 'Kamu Menang Ronde Ini! 🎉';
    statusText.style.color = 'var(--win)';
  } else {
    computerScore++;
    document.getElementById('computer-score').textContent = computerScore;
    statusText.textContent = 'Komputer Menang Ronde Ini! 🤖';
    statusText.style.color = 'var(--lose)';
  }

  // 2. Cek Game Over LANGSUNG setelah skor di-update
  if (playerScore === 3 || computerScore === 3) {
    if (playerScore > computerScore) {
      statusText.textContent = 'GAME OVER: Kamu Menang Pertandingan! 🏆';
      statusText.style.color = 'var(--win)';
    } else {
      statusText.textContent = 'GAME OVER: Komputer Menang Pertandingan! 💀';
      statusText.style.color = 'var(--lose)';
    }

    // Reset skor di memori DAN tampilan layar setelah jeda singkat (opsional)
    setTimeout(resetGame, 1500);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = 0;
  document.getElementById('computer-score').textContent = 0;
  document.getElementById('player-choice').textContent = '❓';
  document.getElementById('computer-choice').textContent = '❓';

  const statusText = document.getElementById('status-text');
  statusText.textContent = 'Pilih opsi di bawah untuk bermain';
  statusText.style.color = 'var(--text)';
}
