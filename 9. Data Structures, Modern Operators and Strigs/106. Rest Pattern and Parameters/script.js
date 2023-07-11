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
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
};


// 1) Destructuring

// the rest pattern has the same sytax witht the spread operator, but actually does the opposite. the spread pattern collects multiple data and condesed them into an array. the spread operator is to unpack an array, while the rest is to pack into an array. while the spread opertor is on the right side of the operator, the rest pattern is on the right hand side of the operator.

// SPREAD, because on the right side of =
const arr = [1, 2, ...[4, 5]];


// REST,  because on the left side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

// the rest pattern does not select the skipped element, so the rest pattern must always be the last in the assignment and there can only be one rest in any destructuring assingment
const [pizza, risotto, ...others] = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(pizza, risotto, others);



// Objects: in this case, everything will be collected inside an object
const { sat, ...weekdays } = resturant.openingHours;
console.log(weekdays);


// 2.) Functions : this is a use case of providing multiple arguments for a function and generating an array from them using the rest pattern.

const add = function (...nums) {
  console.log(nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  console.log(sum);
}

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7, 8);
add(2, 3, 4, 5, 6, 7, 8, 9, 0, 1);

const x = [23, 15, 7];
add(...x);

resturant.orderPizza("mushrooms", "onions", "olives", "spinach");

// The spread works where we would write values sepereated by commas, while, rest is used when we want to write variable names sepereated by commas
