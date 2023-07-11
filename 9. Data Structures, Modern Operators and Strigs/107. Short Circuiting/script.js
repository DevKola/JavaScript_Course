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
  },
};


// Short Circuiting (&& and ||) operators
// the logical operator can use any data, return any data type and do short-circuiting


console.log("----OR---");
// what is  short circuiting?
// with the or (||) operator: This means that is the first value is a truthy value, it will automatically return a true. if you have multiple cahin of operations, the first truthy value will be returned and the rest will be skipped.
console.log(3 || "jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);

// Using (||) to set a default value

// without short circuiting
resturant.numGuest = 23;
const guest1 = resturant.numGuest ? resturant.numGuest : 10;
console.log(guest1);

const guest2 = resturant.numGuest || 20
console.log(guest2);


// in case we have zero as our present value, JS will treat it as a falsy value and reassign it when using the || operator. How do we solve this? USE the Nullish Coalescing operator
resturant.numGuest = 0;

const guest3 = resturant.numGuest ?? 20;
console.log(guest3);

// This works because the nullish operator only deals with Null and Undefined. It treats 0 and "" as if they are not falsy values


console.log("----AND---");
// If the first value is falsy, the operation will return false even if the second value is truthy, the && operator will not bother to check it. If the first value is truthy, it will check the second one and return it. We can use the && operator to execute code in the second operand if the first one is true

console.log(0 && "jonas");
console.log(7 && "jonas");

console.log("Hello" && 23 && null && "jonas");

// practical example
// without the && operator
if (resturant.orderPizza) {
  resturant.orderPizza("mushrooms", "spinach")
}

resturant.orderPizza && resturant.orderPizza("Akara", "Dundun");

