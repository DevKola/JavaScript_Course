// In js, a value is either an object or a primitive. A value is pnly an object if it is not primitive
/*
  1. Number - these are floating numbers. used for decimals or integers
  2. String - sequence of characters used for tect usually wrapped in curly braces
  3. Boolean - Logical type that can only be either true or false. used to take decisions
  4. Undefined - values taken by a variable that is not yet defined (empty value)
  5. Null - Also means empty value
  6. Symbols(ES2015) - Vallues that is unique and cannot be changed 
  7. Bigint(ES2020) - Larger integers than the number type can hold

  Js has a dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are automatically determined
*/

let javascriptIsFun = true
console.log(javascriptIsFun);

// typeof operator shows you the type of a data in a string format
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "kolade");

// dynamic typing
javascriptIsFun = "Yes!"
// what matters is we don't use the word let again when we want to change the value of the variable.
console.log(javascriptIsFun);
console.log("\n");
// undefined data type
let year;
console.log(year);
console.log(typeof year);
year = 1999
console.log(typeof year);