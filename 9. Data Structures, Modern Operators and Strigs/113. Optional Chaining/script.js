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

// Optional Chaining: this is a new feature of Objects and Arrays
// without optional chaining
if (resturant.openingHours && resturant.openingHours.mon)
  console.log(resturant.openingHours.mon.open);

// with optional chaining: only if the property before the ? exists will the ones after it be read, but if not the immediately undefined will be returned
console.log(resturant.openingHours.mon?.open);

// we can also have multiple optional cahining
console.log(resturant.openingHours?.mon?.open);

// Example
const days = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];

for (const day of days) {
  const open = resturant.openingHours[day]?.open ?? "close";
  console.log(`On ${day}, we are open at ${open}`);
}

//Optional chaining on methods: we can check if a method exist before we call it
console.log(resturant.order?.(0, 1) ?? "The method does not exist");
console.log(resturant.orderRositto?.(0, 1) ?? "The method does not exist");

// Using it to check if an array is empty
const user = [
  {
    name: "jonas",
    email: "hello@jonas.io",
  },
  
];

console.log(user[0]?.name ?? "User array empty");
