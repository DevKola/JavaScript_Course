"use strict";

const airline = "TAP Air Portugal";

// for changing the case of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// check user input email/comparing email
const email = "hello@jonas.io";
const loginEmail = " HeLLO@jonas.io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //trim gets rid of the whitespaces
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing part of string
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", "."); //the replace takes two argument, the first one is the string we want to change while the second one is what we want to change to.

// replacing a word
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replaceAll("door", "gate")); //replaces all words that has "door"

// three strings methods that returns booleans: .includes(), .startsWith(), .endsWith()

const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log(`Part of the new Airbus family`);
}

// practice exercise
const checkBaggage = function (items) {
  //First convert everything to lowercase for easy checking
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome Aboard`);
  }
};

checkBaggage("I have a laptop, some Food, and a Pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for PROTEtion");
