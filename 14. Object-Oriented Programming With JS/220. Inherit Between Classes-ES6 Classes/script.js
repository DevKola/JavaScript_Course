"use strict";

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


class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course
  }

  introduce() {
    console.log(`Hi my name is ${this.fullName}, and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2037 - this.birthYear} and I feel like ${2037 -this.birthYear + 10}`);
  }
}

const metrine = new StudentCL("Metrine Jones", 2020, "Computer Science");

console.log(metrine);
metrine.introduce();
metrine.calcAge();