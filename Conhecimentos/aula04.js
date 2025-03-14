// Map() => Estrutura de dados que permite armazenar pares e chave-valor, semelhantea um objeto {}
// Qualquer tipo de dado pode ser uma chave.
// Mantém a ordem de inserção 
// Possui métodos prórpios para manipulação de dados
// Map aceita VALORES repetidos, mas quando tiver CAHVES repetidas, sobrescreve a o valor da chave anterior

// const meuMapa = new Map();

// Usando forEach() para iterar sobre um map?

const estudantes = new Map([
    ['Alice', 8.5],
    ['Bob', 7.3],
    ['Carlos', 9.0],
]);
estudantes.forEach((nota, aluno) => {
    console.log(`${aluno}: ${nota}`);
});

// Sobrecrevendo um valor
const testeMap = new Map();

testeMap.set(1, 'Valor A');
testeMap.set(1, 'Valor B'); // Sobrescreve o valor da chave 1

console.log(testeMap);

// Métodos de um MAP:
// Adicionando elementos em um Map utilizamos o método set:
const alunos = new Map();

alunos.set(101, { nome: 'Ana', nota: 8.5 });
alunos.set(102, { nome: 'Carlos', nota: 6.4 });
alunos.set(103, { nome: 'Alberto', nota: 7.0 });

// Obtém um valor de um mapa
console.log(alunos.get(101)); //{ nome: 'Ana', nota: 8.5 }

// Verifica se a chave existe no Map: 
console.log(alunos.has(101)); // Retorna um boolean

// Remove um item do map:
alunos.delete(102);
console.log(alunos.has(102)); // Retorna um boolean

// Retornando o número de elementos em um Map:
console.log(alunos.size);

// Remove todos os elementos de um Map:
alunos.clear();
console.log(alunos.size); 
