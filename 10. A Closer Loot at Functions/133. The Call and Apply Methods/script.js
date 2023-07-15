"use strict";

// this lesson will take us back to the this-keyword and how we can set it manually and why we would want to do that

const lufthansa = {
  airline: "Lufthansa",
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passenger) {
    console.log(`${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.bookings.push({ arline: `${this.iataCode}${flightNum}`, name: `${passenger}` });
  }
}


lufthansa.book(234, "Kolade Ayinde");
lufthansa.book(489, "John Smith");
console.log(lufthansa);


const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
}

// the below code is possible because JS has what is called First class function. This allows us to take a function, store it into a variable and the variable will then be the function.

const book = lufthansa.book;

// from now on, this function can not be called in aregular way, because in a regular function call, the this-keyword points to undefined. So we will get an error of undefined. the book copy is no longer a method. It's now a regular function and the this-keyword will point to undefined

// to fix this problem, we need to tell JS what the this-keyword should be like since that is where the error is comming from. So we need to tell JS manually what the this-keyword should point to and to do that we have three function methods: (call, apply and bind)

// .call(): first argument is what we want the this-keyword to point to, followed by the rest of the arguments

book.call(euroWings, 23, "Sarah Williams");
console.log(euroWings);

// what happened above was that we did not call the book method ourself, we actually called the call method which inturns call the this-keyword implicitly and set it to eurowings. the first argument of the call method will represent the this-keyword which will be the object. this allows us to manually set the this-keyword. All the arguments that follow are simply the arguments of the original function

book.call(lufthansa, 164, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: []
}

book.call(swiss, 560, "Mary Cooper");
console.log(swiss);


// the apply() methos: doeas basically the same thing, except it doesn't recieve arguments after the this-keyword. Instead it'll take the elements of an array

const flightData = [375, "Sunny George"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData)