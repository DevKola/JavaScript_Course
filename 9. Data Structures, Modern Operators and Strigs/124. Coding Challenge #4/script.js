"use strict";

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// const toCamelCase = function (text) {
//   const textSplit = text.split("_");
//   const first = textSplit.shift().toLowerCase();
//   const last = textSplit.shift().toLowerCase();
//   const lastToCamel = last[0].toUpperCase() + last.slice(1);

//   textSplit.push(first, lastToCamel);
//   return textSplit.join("");
// };

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const row of rows) {
    row.split("_");
    const first = row.shift().toLowerCase().trim();
    const last = row.shift().toLowerCase().trim();
    const lastToCamel = last[0].toUpperCase() + last.slice(1);
    const word = `${first}${lastToCamel}`;
    
    console.log(word);
  }

});

// console.log(toCamelCase("underscore_case"));
// console.log(toCamelCase("first_name"));
// console.log(toCamelCase("Some_Variable"));
// console.log(toCamelCase("calculate_AGE"));
// console.log(toCamelCase("delayed_departure"));
