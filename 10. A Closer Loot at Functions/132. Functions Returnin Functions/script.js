"use strict";

// A function that returns new function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetingHey = greet("Hey");
greetingHey("Kolade");
greetingHey("Tunde");

greet("Hello")("Temi");
