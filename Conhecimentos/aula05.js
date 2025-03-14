// Set é uma estrutura de dados que armazena valores únicos, não permite valores duplicados

// Criando um Set:

const numeros = new Set()

numeros.add(1);
numeros.add(2);
numeros.add(2); // Ignorando pois já existe
numeros.add(3);

console.log(numeros);

// Principais Métodos do Set:
// add(valor) -> Adiciona um valor:
const set = new Set();
set.add('JavaScript');
set.add('Python');
set.add('JavaScript'); // Ignorado
console.log(set);

//  has(valor) -> Verifica se um valor existe
console.log(set.has('Python')); // true
console.log(set.has('C++')); // false

// delete(valor) → Remove um valor
set.delete('Python');
console.log(set.has('Python')); // false

// size -> Retorna o número de elementos
console.log(set.size); // 1

// clear() -> Remove todos os valores
set.clear();
console.log(set.size); // 0

// Iterando sobre um Set

// Usando forEach()

const cores = new Set(['Vermelho', 'Verde', 'Azul']);

cores.forEach(cor =>{
    console.log(cor);
})

// __(underscore duplo) é apenas um nome de variável para indicar que um parámetro não será utilizado dentro da função.
// Exemplo:
set.forEach((valor, __) => {
    console.log(valor);
});