"use strict";

const booking = [];

// Também podemos realizar operações nesses valores padrões
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5 => Maneira antiga de fazer valores padrões
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  booking.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
// Caso a gente queira deixar um valor indefinido
createBooking("LH123", undefined, 1000);
