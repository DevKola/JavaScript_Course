"use strict";

// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
  console.log(`Hi my name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student("Mike", 2002, "Computer Science");
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;


