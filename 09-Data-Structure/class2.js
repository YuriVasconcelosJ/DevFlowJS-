"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risoto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starteIndex, mainIndex) {
    return [this.starterMenu[starteIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starteIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starteIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starteIndex: 2,
});

// Desestruturando um objeto
const { name, openingHours, categories } = restaurant;
console.log(openingHours);

// Desestruturando um objeto e alterando o seus respectivos nomes
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName);

//  Valores vazios
// Atribui valores padrões as variáveis presentes. Se menu não existir, ele retorna um array vazio
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutação de variaveis
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Alterando os valores das variáveis
({ a, b } = obj);

// Objetos aninhados
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
