const arr = [1, 2, [3, 4, [7, 8]]];
// Seu código aqui

const [, , [, , [a, b]]] = arr;
console.log(a, b);
