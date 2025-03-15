"use strict";

// O valor de jonas.name foi alterado pq objeto é uma referência, ou seja, passenger cria uma refeência para o objeto e pode alterar ele diretamente.
// Já o valor flight, o seu valor é mantido, pois ele cria uma cópia do valor da variável.
// Array e objeto são referências
// Valores primitivos são valor/cópias
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Check i");
  } else {
    alert("Wrong passport");
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
