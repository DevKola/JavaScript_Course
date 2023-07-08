// convert a string to number
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
// the number function does not affect the value of the 1991, instead it only gives a temporary value we can use
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23));



// type coercion - happens when an operator comes accross two diff values
console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1
n = n - 1
console.log(n);