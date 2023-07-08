// arithmetic operator
const now = 2037;
const ageKolade = now - 1991;
const ageSarah = now - 2020;
console.log(ageKolade, ageSarah);

console.log(ageKolade * 2, ageKolade / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 =  2 * 2 * 2

console.log("\n");

// the + operator can be used to join/concatenate strings
const firstName = "Kolade";
const lastName = "Ayinde";
console.log(firstName + " " + lastName);

console.log("\n");

// Assignment operator (=)
let x = 10 + 5; // 15
// the equal sign is the assignment operator while the + sign is the arithmetic operator

// shorthand for assignment operators
x += 15; // x = x + 15
x *= 4; // x = x + 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

console.log("\n");


// Comparison operators - used to produce boolean values(true/false)
console.log(ageKolade > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullage = ageSarah > 18;

console.log(now - 1991 > now - 2018);
