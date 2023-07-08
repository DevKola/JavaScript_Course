const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving lessons 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// if/else is a controlled structure that allows us to control the outcome of our code

const birthYear = 1998
let century;

if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}

console.log(century);