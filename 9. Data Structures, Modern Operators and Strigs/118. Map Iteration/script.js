"use strict";

// In ES6 new ways we can now compute propery name instead of writting them out
const weekdays = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzera", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Carprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rositto"],

  //  Enhanced Object Literals
  openingHours,

  // Enhanced object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:30", address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};


// There are other ways to populate a map apart from the .set() method
const question = new Map([
  ["Question", "What is the best programming Language in the wrold?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct"],
  [false, "Try again"]
]);

console.log(question);


// trick to convert an object to a string
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


// Iteraion is possible on map because they are iterables and the for loop is possible on them
console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
};

const answer = Number(prompt("Your answer"));
console.log(answer);

// if (answer === question.get("Correct")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// answer === question.get("Correct") ? console.log(question.get(true)) : console.log(question.get(false));

console.log(question.get(question.get("Correct") === answer));


// Convert map to an array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
