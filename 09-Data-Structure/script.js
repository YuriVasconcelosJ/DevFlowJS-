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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// Pegando um array e colocando em um novo array
const arr = [5, 2, 6];
const arr1 = [...arr];
console.log(arr1);

// Juntando array
const arr2 = [1, 2, 3, 4];
const arr3 = [...arr, ...arr2];

console.log(arr3);

// Adicionando elementos
// Sem a necessidade de push() or unshift()
const numbers = [7, 8, 9];
const newNumbers = [1, ...numbers, 5];

console.log(newNumbers);

const newMenu = [...restaurant.mainMenu, "Gnocci"];

console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets, NOT objects
const str = "Yuri";

const letters = [...str];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt("Let's make pasta! Ingerdient 1?"),
  prompt("Let's make pasta! Ingerdient 2?"),
  prompt("Let's make pasta! Ingerdient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundenIn: 1998, ...restaurant, founder: "Guisepe" };
