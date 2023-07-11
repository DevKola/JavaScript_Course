"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[3]);

console.log(airline.length);

// methods of strings very similar to array methods
// to get the first occurence
console.log(airline.indexOf("r"));

// to get the last occurrence incase we have more than one
console.log(airline.lastIndexOf("r"));

// searching for word index
console.log(airline.indexOf("Portugal"));


// what is the use case of the indexOf, it's useful to extract part of a string using the slice method and the slice method needs indexes as arguments
// slice can take two arguments the starting point and the stopping point which is excluded
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


const checkMiddleSeat = function (seat) {
  // Middle seats are B and E
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You got lucky`);
  }
}

checkMiddleSeat("11B")
checkMiddleSeat("23C")
checkMiddleSeat("3E")