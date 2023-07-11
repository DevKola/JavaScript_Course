"use strict";

// Split allows us to split string into multiple parts based on a devider. this split method returns an array of the string seperated by by the value inputed into the method
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

// the .join() methods joins elements together and returns a string of all the element. the .join() also takes an argument which is the devider
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // console.log(n);
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(" "));
}

capitalizeName("jessica ann smith davies");
capitalizeName("jonas schmedtmann");

// padding is when you add number of characters to a string until it reaches a dersired length

// add to the begining with padStart(), first arguments is the length we want the string to end up with, while the second argument is the letters we want
// padEnd() adds characters to the end of a string
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));


// masking a credit card
const maskCreditCard = function (number) {
  const str = String(number);
  const lastDigit = str.slice(-4);
  return lastDigit.padStart(str.length, "*")
}

console.log(maskCreditCard(13434295));
console.log(maskCreditCard(909692190856458));
console.log(maskCreditCard("2096921908564582873"));


// Repeat method allows us to repeat the same string multiple times
const message2 = "Bad weather... All Depatures Delayed... ";
console.log(message2.repeat(4));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
}

planeInLine(5);
planeInLine(7);
planeInLine(3);
