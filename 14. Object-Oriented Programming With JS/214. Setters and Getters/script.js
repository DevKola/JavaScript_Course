"use strict";

// Every Object in js can have setters and getters in JS, we call them accessor property, while the normal are called data properties. Getters and setters, gets and sets a value.

const account = {
  owner: "Jonas",
  movments: [200, 530, 120, 300],

  // adding getter to get/retrieve value
  get latest() {
    return this.movments.slice(-1).pop();
  },

  // adding setter to set/add value, the setter needs one parameter
  set latest(mov) {
    this.movments.push(mov)
  }
}

console.log(account.latest);

account.latest = 240;
console.log(account.movments);


// Classes also have getters and setter
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // These methods are useful for name validation
  // Setting a property that already exist
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // Creating a static method inside a class
  static hey() {
    console.log("Hey there 👋");
    console.log(this); //whatever object that is calling the this keyword will be the object
  };
}

const jessica = new PersonCL("Jessica Davis", 1996)

console.log(jessica.age);
console.log(jessica.fullName);


const walter = new PersonCL("Walter ", 1964);

PersonCL.hey();


// Static Methods

//Array.from() //this is a static method on the array constructor not the on prototype

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear
}

Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this); //whatever object that is calling the this keyword will be the object
}


Person.hey()
//this can not be called on an object because it is not on the prototypal object. so there's no way an object could inherit it
