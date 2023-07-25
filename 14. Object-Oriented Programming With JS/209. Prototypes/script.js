"use strict";

const Person = function (firstName, birthYear) {
  
  this.firstName = firstName;
  this.birthYear = birthYear;


  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
}

const jonas = new Person("jonas", 1991);
console.log(jonas);


const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Each and every function in jS has a property called prototype and that includes constructor functions. every object created by a certain constructor function will have access to all the methods and properties on the constructor prototype.
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));