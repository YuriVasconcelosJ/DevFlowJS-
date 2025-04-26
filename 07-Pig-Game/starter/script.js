'use strict';

// Solução para o projeto:

// Erro, tenho que colocar o msm número tanto para o contador e o indice. O valor deve ser armazenado em um variável

// Declaração de variáveis
const buttonRoolDice = document.querySelector('.btn--roll');
let countPlayer1 = 0;
let countPlayer2 = 0;
let images = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

// Função para retornar um valor aleatório
function gerarNumeroAleatorio() {
  const VALORMAXIMO = 6;
  return Math.trunc(Math.random() * VALORMAXIMO) + 1;
}

// Função para acessar o index do array na imagem
function mostrarImagem() {
  let valorDado = gerarNumeroAleatorio();
  countPlayer1 += valorDado;
  document.querySelector('.dice').src = images[valorDado - 1];
}

// roolDice
buttonRoolDice.addEventListener('click', () => {
  // Futura função
  mostrarImagem();
  console.log(`Mostrar contador geral: ${countPlayer1}`);
});
