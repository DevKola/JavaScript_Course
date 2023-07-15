"Use strict";

const flight = "173HB";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 1234577869
}

const checkIn = function (flightNum, passenger) {
  flightNum = "128NU"; //this does not cange the value of variable, it only makes a copy of it. because they are pointing to different memory in the call stack.
  passenger.name = "Mr. " + passenger.name; //this changes the name's value in jonas object because they both point to the same address in the heap.

  if (passenger.passport === 1234577869) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }
}

// checkIn(flight, jonas);
// console.log(flight); 
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

// Important to know that JS does nothave passing by reference, only passing by value