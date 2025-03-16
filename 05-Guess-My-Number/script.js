'use strict';

const gerarNumeroAleatorio = () => Math.trunc(Math.random() * 20 + 1);

let randomNumber = gerarNumeroAleatorio();
let scorePlayer = 20;
let bestScore = 0;

// Função para atualizar o texto de um elemento
const atualizarTexto = (seletor, texto) => {
  document.querySelector(seletor).textContent = texto;
};

const verificarPalpite = () => {
  let valueGuess = Number(document.querySelector('.guess').value);

  if (!valueGuess) {
    atualizarTexto('.message', 'No number');
    return;
  }

  if (valueGuess === randomNumber) {
    atualizarTexto('.message', 'Correct Number!');
    atualizarTexto('.numbe', randomNumber);
    document.querySelector('body').style.background = 'green';

    // Atualiza o bestScore apenas se for maior que o anterior
    if (scorePlayer > bestScore) {
      bestScore = scorePlayer;
      atualizarTexto('.highscore', bestScore);
    }
  } else {
    scorePlayer--;

    if (scorePlayer <= 0) {
      atualizarTexto('.message', 'You lost the game!');
      atualizarTexto('.score', 0);
    } else {
      atualizarTexto(
        '.message',
        valueGuess < randomNumber
          ? 'The secret number is Higher!'
          : 'The secret number is lower!'
      );
      atualizarTexto('.score', scorePlayer);
    }
  }
};

const reiniciarJogo = () => {
  randomNumber = gerarNumeroAleatorio();
  scorePlayer = 20;

  atualizarTexto('.number', '?');
  atualizarTexto('.message', 'Start guessing...');
  atualizarTexto('.score', scorePlayer);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
};

document.querySelector('.check').addEventListener('click', verificarPalpite);
document.querySelector('.again').addEventListener('click', reiniciarJogo);
