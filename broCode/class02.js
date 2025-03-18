// Type convesion = change the datatype of a value to another
// stings, numbers, booleans

let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age);
age += 1;

console.log(age, typeof age);

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN 'Number
console.log(y, typeof y); // undefined string
console.log(z, typeof z); // false 'boolean
