"use strict";

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzera", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Carprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rositto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:30", address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// Practical Application of destructuring/ this automatically does destructuring
// creating an object through the use of function. Basically passing an object as the arguments for a method/function created inside an object
resturant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

resturant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1
});

// To destructure objects, we use the curly braces
const { name, openingHours, categories } = resturant;
// console.log(name, openingHours, categories);

// If you want the variable name to be diff from property names:
const {
  name: resturantName,
  openingHours: openingTime,
  categories: tags,
} = resturant;
console.log(resturantName, openingTime, tags);

// Default values
// Incase we are trying to read a property that does not exist
const { menu = [], starterMenu: starter = [], busy: time = {} } = resturant;
console.log(menu, starter, time);

// Mutating an object
// How to mutate variables while destructuring objects. that is changing the values of a destructured object from one to another
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: openTime, close: closingTime },
} = openingHours;
console.log(openTime, closingTime);
