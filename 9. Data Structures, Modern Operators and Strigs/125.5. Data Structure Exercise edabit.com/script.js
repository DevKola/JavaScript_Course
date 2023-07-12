"use strict";

/*
        //Test//

//colorInvert([255, 255, 255]) ➞ [0, 0, 0]
// (255, 255, 255) is the color white.
// The opposite is (0, 0, 0), which is black.

colorInvert([0, 0, 0]) ➞ [255, 255, 255]

colorInvert([165, 170, 221]) ➞ [90, 85, 34]
*/
//Solutions//
function colorInvert(rgb) {
  //1
  //const convertedColor = rgb.map((color) => 255 - color);
  //return convertedColor;

  //2
  const output = [];
  const [oldRed, oldGreen, oldBlue] = rgb;
  output.push(255 - oldRed, 255 - oldGreen, 255 - oldBlue);
  return output;
}

/*
  //Rotate the Array by One
  Given an array, rotate the values clockwise by one (the last value is sent to the first position).
  Check the examples for a better understanding.

  // Examples:
  rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]
  rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]
  rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]
*/
//Solutions//
function rotateByOne(arr) {
  const poped = arr.pop();
  const output = [poped, ...arr];
  return output;
}

/*
  //True Ones, False Zeros
  Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

  //Examples

  integerBoolean("100101") ➞ [true, false, false, true, false, true]
  integerBoolean("10") ➞ [true, false]
  integerBoolean("001") ➞ [false, false, true]
*/
//Solutions//
function integerBoolean(n) {
  const output = [];
  const arrStr = [...n].map((i) =>
    i === "1" ? output.push(true) : output.push(false)
  );
  console.log(arrStr);

  // arrStr.map((i) => (i === "1" ? output.push(true) : output.push(false)));

  // for (const i of n) {
  //   i === "1" ? output.push(true) : output.push(false);

  //   // if (i === "1") {
  //   //   output.push(true);
  //   // } else {
  //   //   output.push(false);
  //   // }
  // }
  return output;
}

/*
  // Nothing is Nothing?
  Given any number of parameters, return true if none of the arguments are falsy.

  // Examples
  nothingIsNothing(33, "Hello",  true,  []) ➞ true
  nothingIsNothing(0, false, undefined, null) ➞ false
  nothingIsNothing(true, false) ➞ false

  // Note: To get this question I had to read the comments on the questions because it was a little bit tricky. JS does an implicit type coercion for objects arguments, so you need to check for each element's boolean which will (I dont know yet ) may conver each elements to it's original boolean value. If usee the typical (typeof i === true), you will keep getting false.
*/
// Solutions//
function nothingIsNothing(...args) {
  const arr = [...args].every((i) => Boolean(i));
  
  return arr;

}
console.log(nothingIsNothing(33, "Hello", (true, true, 3)));
console.log(nothingIsNothing(0, false, undefined, null));
console.log(nothingIsNothing(true, false));

