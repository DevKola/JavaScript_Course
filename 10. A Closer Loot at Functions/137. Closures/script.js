"use strict";

// a closure is not a feature we explicitly use. it only happens in a situation. It's not like what we can just declare.
// A closure makes a function rememeber all the variables that existed at it's birthplace.

const secureBooking = function () {
  //secure booking is the birthplace of the passengerCount variable
  let passengerCount = 0;

  return function () {
    //this return function remmebers the variable at it's place anytime it returns
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();

//A Closure:
// This is when a function has access to the variable environment of the execution context which ot was created. The variable environment attached to the function, exactly as it was at the time and place the function was created
// A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone
// A closure gives a function access to all the variables of it's parent function, even after that parent function has returned. The function keeps a reference to it's outer scope, which preserves the scope chain throughout time.
// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birthplace
// Acosure is like a backpack that a function cariies around wherever it goes. Tha backpack has all the variables that were present in the environment where the function was created.
// We do not have to manually create closures, this is a JS feature that happens automatically. We can't even access closed-over variables explicitly. A closure is not a tangible JS object

console.dir(booker);
