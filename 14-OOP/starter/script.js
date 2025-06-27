'use strict';

// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instace properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Do not create a method inside a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Rafael', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
