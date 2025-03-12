'use strict';

// Atividade Para Adivinhar um número

// Comando para selecionar uma tag
console.log(document.querySelector('.message')); // <p class="message">Start guessing...</p>

// Comando para selecionar o texto de uma tag
console.log(document.querySelector('.message').textContent); // Start guessing...

// Selecionando um elemento e realizando mudança de conteúdo
document.querySelector('.message').textContent = 'Correct Number';

// Diferença entre value e textContent

// TextContent: Usado para pegar ou alterar o texto dentro de um elemento <p>, <span>, <div>
// Value: Usado para pegar ou alterar o valor de inputs, como <input>, <textarea>, <select>
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;

// Adicionando eventos no DOM

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.message').textContent = 'Olá, mundo';
});

// Dentro desse evento, podemos descrever o passo a passo do que vai ocorrer ou ele vai alterar
// No exemplo acima, ele vai alterar o conteúdo da mensagem ao clicar no botão

// Mouseover
document.querySelector('.again').addEventListener('mouseover', () => {
  document.querySelector('.message').textContent = 'Olá, mundo';
});

// Conversão para número
// A conversão de número pode ser realizado em 3 diferentes formas
// Utilizando +, Number() ou parseInt

// Exemplo:
let num0 = +document.querySelector('.guess').value;
let num1 = Number(document.querySelector('.guess').value);
let num2 = parseInt(document.querySelector('.guess').value);

// Sempre veja casos de repetição
