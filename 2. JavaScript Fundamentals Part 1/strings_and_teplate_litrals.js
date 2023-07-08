// template litrerals - we can write a string in a more normal way and then insert the variable without using the plus sign. we can write any js script inside the curly braces

const firstName = "Kolade";
const job = "teacher";
const birthYear = 1999;
const year = 2037;

const ayinde = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(ayinde);

const ayindeNew = `I'm ${firstName}, a ${year - birthYear} years ols ${job}!`

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log("\n");

console.log(`String 
multiple
lines`);
