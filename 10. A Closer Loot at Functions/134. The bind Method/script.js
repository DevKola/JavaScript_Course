"use strict";

// this lesson will take us back to the this-keyword and how we can set it manually and why we would want to do that

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, passenger) {
    console.log(
      `${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({
      arline: `${this.iataCode}${flightNum}`,
      name: `${passenger}`,
    });
  },
};

lufthansa.book(234, "Kolade Ayinde");
lufthansa.book(489, "John Smith");
console.log(lufthansa);

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};


const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: [],
};


const book = lufthansa.book;

const flightData = [375, "Sunny George"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);


// .bind() method: this also allows us to manually set the this-keyword for a function call. the main difference is that bind does not immediately call the function, instead it returns a new function where the this-keyword is bound. It's set the whatever value we pass into bind

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(220, "Steven Williams");

// this now looks like the normal function call and thats because the variable that holds the bind() now has the this keyword, pointing to the argument provided inside  and is also a function

// the bind() allows us to set in some preset arguments

const bookEW23 = book.bind(euroWings, 23);
bookEW23("Femi Gbaja");
bookEW23("Charlse Stones");

// Another great use case of bind() is when we use objects together with event listener

lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  lufthansa.planes++;
  console.log(this.planes);
}

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlanes.bind(lufthansa));

// In an event handler function,the this-keyword will always point to the element which the event handler is attached to. the lufthansa is attached to the buy button element.
// so in the handler function , we still need the this-keyword to point to lufthansa otherwise the logic will not work. So the reason why we will use bind is because the bind() method returns a new function, while call() simply callsa new function


// Another use case is for partial application which means to set part of the arguments

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //the reason why we use null is because the mandatory first arg of bind is the this-keyword and we don't need it in this case so we represent it with null.
console.log(addVAT(100));
console.log(addVAT(23));

// const addTax2 = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   }
// }

const addTax2 = rate => value => value + value * rate;

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
console.log(addTax2(0.1)(200));