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


// these are more modern than nullish which was released in 2020. the logical assignment operators are released in 2021


const rest1 = {
  name: "capri",
  // numGuests: 23
  numGuests: 0
}

const rest2 = {
  name: "Govanni Rossi",
  owner: "la Pizza"
}

// using the short circuiting or (||) opertor without logical assignemnt operators. this operator assigns a value to a variable if that variable is currrently falsy
rest1.numGuests = rest1.numGuests || 20;
rest2.numGuests = rest2.numGuests || 20;


//using the new (||) logical assinment operator
rest1.numGuests ||= 20
rest2.numGuests ||= 20

// Logical Nullish assignment operator
rest1.numGuests ??= 20;
rest2.numGuests ??= 20;


// logical (&&) operator
rest1.owner = rest1.owner && "<ANONYMOUS>" //because owner does not exits, the value is falsy so the and operator bothers not to check the second value and just immediatly return the undefined
rest2.owner = rest2.owner && "<ANONYMOUS>" //because the first value is truthy, the second value the gets evaluated and returns it

// using the new shorhand
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
