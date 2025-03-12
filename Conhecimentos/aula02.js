"use strict";

// As maneiras de iterar sobre o array

// for (Loop tradicional)
const numeros = [10, 20, 30];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
// Saída 10, 20, 30

// forEach() -> Executa uma função para cada elemento do array, sem retornar um novo array

numeros.forEach((num) => {
  console.log(num);
});
// Saída 10, 20, 30

// Map() -> Cria um novo array transformando cada elemento.

const dobrados = numeros.map((num) => num * 2);
console.log(dobrados);
// Saída: [20, 40, 60]

// for...of -> Formar mais elegível de iterar sobre os valores de um array
for (const num of numeros) {
  console.log(num);
}
// Saída: 10, 20, 30

// for..in -> Iterar sobre os índices de um array, mas é mais adequado para objetos
for (const indice in numeros) {
  console.log(numeros[indice]);
}
// Saída: 10, 20, 30
