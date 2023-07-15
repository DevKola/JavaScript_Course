"use srict";

// Creating a function that accepts other functions as input.

// creating a function that accepts any string, replaces all the spaces with empty space and convert them to lowercase

// Callback Functions
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};


// Higher order Function 
const transformer = function (str, fn) {
  // inside this function, the fn is now the upperFirstWord/oneword function depending on the callbakc function passed in and this is where we will call it

  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer("JavaScript is the best!", upperFirstWord) //We do not call the function here, we simply pass it as an argument
transformer("JavaScript is the best!", oneWord);


// For Event listener
// Callback function
const high5 = function () {
  console.log("👋");
}

// The addEventListener is the higher order function, with the argument high5 as it event handler which is the callback function
document.body.addEventListener("click", high5);