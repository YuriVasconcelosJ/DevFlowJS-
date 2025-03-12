'use strict';
// Lógica a ser seguida:
// Cicar no botão de check => Verificar se o número digitado é o número correto => Se for deixar a tela verde, armazenar o highscore, Mudar a mensagem para "Parabéns" e mudar o tema para verde

const randomNumber = Math.trunc(Math.random() * 20 + 1);
let scorePlayer = 20;
let bestScore = 0;
// Evento para realizar a verificação do número se está correto ou não
document.querySelector('.check').addEventListener('click', () => {
  // Valor pego da caixa de input
  let valueGuess = Number(document.querySelector('.guess').value);

  // Faltou realziar a verificação se tem algo escrito
  if (!valueGuess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  // Caso o jogador ganhe
  else if (valueGuess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.background = 'green';
    bestScore = scorePlayer;
    document.querySelector('.highscore').textContent = scorePlayer;
    scorePlayer = 20;
  }
  // Caso o jogador erre a alternativa
  else {
    // Caso o jogador perca o game
    if (scorePlayer == 1) {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // Indica se o número é maior ou menor
    else {
      scorePlayer--;
      document.querySelector('.score').textContent = scorePlayer;

      if (valueGuess < randomNumber) {
        document.querySelector('.message').textContent =
          'The secret number is Higher!';
      } else {
        document.querySelector('.message').textContent =
          'The secret number is Lower!';
      }
    }
  }
});

// Evento para refazer o jogo
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  if (scorePlayer > bestScore) {
    bestScore = scorePlayer;
  }
});
