"use strict";

// Default Parameters:
// Sometimes it's useful to have a function where some parameters are set to default value, this case we don't have to pass them manually incase we don't want to change the default.

// Without default parameters
const bookings = [];

const createBookings = function (
  flightNum,
  passengers = 4,
  price = 199.0 * passengers
) {
  
  // ES5 Syntax
  // passengers ||= 2;
  // price ||= 199;

  const booking = {
    flightNum,
    passengers,
    price
  }
  bookings.push(booking);
  console.log(bookings);

}

createBookings("17BHQ", undefined, undefined)