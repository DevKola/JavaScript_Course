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

// In ES6 Two new data structures were introduced which are sets and maps
// Sets: these are just collections of unique values, meaning a set can never have a duplicate and this property makes them useful in some situation. Although a set is diff from an array, a set is also iterable.
// 1. the elements in sets are uique
// 2. Thier orders are irrelevant

const orderSets = new Set([
  "Pizza",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza"
])

console.log(orderSets);
console.log(new Set("Jonas"));


// How to work with set
// the the number/length of set
console.log(orderSets.size);

// we can check is a certain element is in a set
console.log(orderSets.has("Pizza"));
console.log(orderSets.has("Breads"));


// Add new element to a set
orderSets.add("Garlic Bread");
orderSets.add("Garlic Bread");

// delete elements in a set
orderSets.delete("Risotto");

// delete all elements
// orderSets.clear();

// Retrieving datas from sets: theres no need to do that. if you want to store sata in a value an then retieve it later, then use an array.

// Looping through a set
for (const order of orderSets) console.log(order);


// the best use case of a set is to remove duplicate values from an array
// Example: store duplicate staff inside a set and turn it into an array
const staff = [
  "Waiter",
  "Chef",
  "Waiter",
  "Manager",
  "Chef",
  "Waiter"
];

const satffUnique = [...new Set(staff)]  //the addition of spread operator converts it to an array
console.log(satffUnique);

console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size);