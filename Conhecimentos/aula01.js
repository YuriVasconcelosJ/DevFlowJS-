// Método MAP -> Cria um novo array transformando cada elemento do array original com base em uma função de callback

// Sintaxe:
// const novoArray = ArrayOriginal.map((elemento, indice, array) => {
//   return elementoModificado;
// });

// Elemnto -> O valor do elemento atual.
// Indice (Opicional) -> O índice do elemento no array
// Array (Opicional) -> O array original

// Exemplo básico

const numeros = [1, 2, 3, 4, 5, 6];
const dobrados = numeros.map((num) => num * 2);

console.log(dobrados);

// ForEach x Map

// Map() -> Retorna um novo array sem modificar o original
// forEach() -> Apenas itera sobre o array, sem retornar nada.

// Exemplo do forEach(Sem retorno)
const numeros1 = [1, 2, 3];
numeros1.forEach((num) => console.log(num * 2));

// Exemplo do Map() (com retorno)
const triplicados = numeros1.map((num) => num * 3);
console.log(triplicados);
