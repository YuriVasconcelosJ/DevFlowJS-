'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// // Método Slice => Ele RETORNA um cópia de onde vc definir o início e o fim do array
// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// const copyArr = arr.slice(2);
// console.log(copyArr);
// console.log(arr.slice(0, 3));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// // Método .splice é utilizado para add, remover ou substituir elementos dentro de um array.
// // array.splice(índiceInicial, quantidadeDeletada, elemento1, elemento2, ...)

// let frutas = ['Maçã', 'Banana', 'Laranaja'];
// frutas.splice(1, 0, 'Morango', 'Uva');

// // Método .reverse() altera a ordem do array orginal. Não cria um outro array
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);

// console.log(arr.concat(arr2));

// // Caso a gente queira criar uma cópia de um array e não alterar a ordem do array original

// let numeros = [1, 2, 3, 4, 5, 6];
// let invertido = numeros.slice().reverse();

// console.log(numeros);
// console.log(invertido);

// // Método .concat() é usado para concatenar (juntar) arrays e não modifica o array original.
// // Ele retorna um novo array concatenando os elemento do array orginal e os novos elemento passsado no argumento

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let resultado = array1.concat(array2);

// console.log(resultado); // [1, 2, 3, 4, 5, 6]
// console.log(array1); // [1, 2, 3] (original não foi alterado)
// console.log(array2); // [4, 5, 6] (também não foi alterado)

// let novoArray = numeros.concat(4, 5, [6, 7]);

// console.log(novoArray); // [1, 2, 3, 4, 5, 6, 7]

// // Método .Join() utilizado para converter todos os elementos de um array em uma única string
// console.log(novoArray.join());

// // Novo método
// const arr4 = [23, 11, 64];
// console.log(arr4[0]);
// console.log(arr.at[0]);

// // Pegando o último elemento do array
// console.log(arr4[arr4.length - 1]);
// console.log(arr4.slice(-1)[0]);

// // Utilizando o novo método

// console.log(arr4.at[-1]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// Utilização do forEach() => Método para percorrer um array, NÃO RETORNA nada, ele apenas realiza alterações sobre aquele array
// array.forEach(function(elemento, índice, array) {
// Código a ser executado
// });

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
console.log('------- FOREACH -------');
movements.forEach((elemento, indice, array) => {
  console.log(
    `Elemento: ${elemento}, Índice: ${indice}, Arrat completo: [${array}]`
  );
});

// Utilizando o método .entries() para para pegar o index no laço for

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
    console.log(`Chave: ${key}, Valor: ${value}`);
});
