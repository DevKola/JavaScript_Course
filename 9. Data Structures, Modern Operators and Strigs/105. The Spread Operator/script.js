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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:30",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
};

// we can use the spread operator to expand an array into all it's element. basically its used to unpack all array element at once.
const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// Using the spread operator to create a new arra containing elements in other arrays and new elements all at once.
const newMenu = [...resturant.mainMenu, "Gnocci"];
// console.log(newMenu);

// the spread operator takes all the elements from the array and doesn't create new variables, we can only use it in place where values are seprated by commas

// two imporant use case of the spread operator: to create a shallow copy of an array and to merge two arrays together
// Copy an array
const mainMenuCopy = [...resturant.mainMenu];

// Join two arrays or more
const menu = [...resturant.starterMenu, ...resturant.mainMenu, ...newArr, ...newMenu];
// console.log(menu);

// the spread operators also works on all iterables. What are iterables?
// theys are: arrays, strings, sets or maps, but not objects. the most built in data structures in arrays are iterables execept objects

// On strings this will return an array of the string's letter. Note: we can only use spread operator when building an array or when we pass value into a function
const str = "Kolade";
const letters = [...str, " ", "S."];
// console.log(letters);


// A function that accepts multiple arguments and the use the spread operator to pass those arguments
const ingredients = [
 "Mushrooms", "Cheese", "Onions"
];

console.log(ingredients);

// Calling the function now without spread operator
// resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// calling the function with spread operator
resturant.orderPasta(...ingredients);

// the spread operator also works on objects from ES20 even though objects are not iterables
// Objects
const newResturant = { foundedIn: 1998, ...resturant, founder: "Guiseppe" };
// console.log(newResturant);

const resturantCopy = { ...resturant };
resturantCopy.name = "Ristorante Roma";

// console.log(resturant.name);
// console.log(resturantCopy.name);

