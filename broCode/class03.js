"use strict";

// Métodos matemáticos
let x = 3.21;
let y = 2;
let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.cell(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.abs(x);

// Número aleatório

let randomNumber = Math.trunc(Math.random() * 10 + 1);

console.log(randomNumber);

// Ternary operator = a shotcut to if() and else() statements
// condition ? codeIfTrue : codeIfFalse

let age = 21;

let message = age >= 18 ? "You'are an adult" : "You'are a minor";
console(message);
