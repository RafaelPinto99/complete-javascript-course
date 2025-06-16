'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 old way
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/

/*
const flight = 'LH234';
const rafael = {
  name: 'Rafael Pinto',
  passport: 24739479284,
};

const checkIn = function (flighNum, passenger) {
  flighNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) console.log('Checked in');
  else console.log('Wrong passport');
};

checkIn(flight, rafael);
console.log(flight);
console.log(rafael);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000);
};

newPassport(rafael);
checkIn(flight, rafael);
*/
