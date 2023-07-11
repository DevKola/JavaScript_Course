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

// A map is a DS used to map values to keys, just like an object, datas are stored in key values pairs. the big difference between objects and map is that in maps, the keys can have any type, unlike in objects whose keys are always strings

// the best way to create a map is to declare an empty one and then fill it up later

const rest = new Map();

// we can then use the .set() method to fill the content in the map. this method returns an updated version of the set.
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon portugal");
console.log(rest);

//  we can also have chains of set on a map variable name
rest
  .set("categories", ["Italian", "Pizzera", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "We are closed :(");

// to read data from the map, we use the .get() method and all we need to do is to pass in the name of the key
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));


// checking is a set has a certain key. this returns either true or false
console.log(rest.has("categories"));

// We can also delete from the map and this can be done based on the key. this can be done using the .delete() method and then pass in the key name 
rest.delete(2); //this will delete the element with the key 2
console.log(rest);

// map also has the size propety
console.log(rest.size);

// and we can also remove all the elements from the map
// rest.clear();
// console.log(rest);
// console.log(rest.size);


// using arrays or objects as map keys 
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest);


// Using the DOM to as key for a map value
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
