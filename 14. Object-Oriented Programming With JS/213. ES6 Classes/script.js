"use strict";

// Classes in js are just syntetic sugar, this also does prototypal inheritance behind the scene, but in a more readable way. Classes are just a special type of function and it has both class expression/declaration

// class expression
const Person = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
};

// class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const joe = new Person("Joseph", 1996);
const jessica = new PersonCL("Jessica", 1996);

console.log(joe);
joe.calcAge();
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCL.prototype);

// creating a method manually
// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();


// 1. Classes are Not hoisted : you cannot calls them before declaration
// 2. Classes are first class citizens : they can be called inside another function
// 3. Classes are executed in strict mode


