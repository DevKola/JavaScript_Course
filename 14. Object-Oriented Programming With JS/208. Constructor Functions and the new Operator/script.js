'use strict';

// We can use constructor function to build an object using function. 
//The difference between a normal function and a constructor function is that we call the constructor function with the new keyword
//An Arrow function will not work as a constructor function because and arrow function does not have it's own keyword

const Person = function (firstName, birthYear) {
  // Setting properties to the {} objects using the parameter and they are the Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Creating a method
  // Bad practice: never create a function inside a function
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }
}

const jonas = new Person("jonas", 1991);
console.log(jonas);

// What happens when we called the constructor function with the new keyword
  // 1. new {} is created
  // 2. when function is called, this = {}
  // 3. {} is linked to prototype
  // 4. function automatically returns {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
