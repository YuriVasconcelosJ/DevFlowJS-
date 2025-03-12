"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risoto"],

  order: function (starteIndex, mainIndex) {
    return [this.starterMenu[starteIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// Podemos fazer a dessestruturação
const [x, y, z] = arr;
console.log(x);

// Acessando elementos
const [first, second] = restaurant.categories;
console.log(first, second);

// Pulando um elemento para acessar
const [four, , five] = restaurant.categories;
console.log(first, second);

// Criando variavel para inverter a ordem
let [main, other] = restaurant.categories;

// const temp = main;
// main = other;
// other = temp;
// console.log(main, other);

// Maneira mais simples de realizar essa operação
[main, other] = [other, main];
console.log(main, other);

console.log(restaurant.order(2, 0));

const nested = [2, 4, [5, 6]];

const [i, , j] = nested;
console.log(i, j);

// Des
const [d, , [e, f]] = nested;
console.log(d, e, f);

// Valores vazios
cosnt[((p = 1), (q = 1), (r = 1))] = [8, 9];
console.log(p, q, r);
