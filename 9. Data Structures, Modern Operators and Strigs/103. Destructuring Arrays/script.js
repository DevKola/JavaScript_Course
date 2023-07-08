"use strict"; 

// Destructuring is an ES^ features and it's a way of unpacking arrays or objects to seperate variables. In other words, destructuring is to break a complex data strucute down into a smaller sata structures like a variable.
//For Arrays, we use destructuring from  the array,then store them into variables in a very easy way

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzera", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Carprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rositto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

// Normal selection
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Array destructuring syntax/assignment. when we do this, the original array is not affected in any way.
const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);


// taking the first two elements.
const [first, second] = resturant.categories;
// console.log(first, second);

// taking the first and the third element. Leave a comma as a space
let [main, , secondary] = resturant.categories;
// console.log(main, secondary);

// switching datas
// without DS
const tmp = main;
main = secondary;
secondary = tmp;
// console.log(main, secondary);

// with DS
[main, secondary] = [secondary, main];
// console.log(main, secondary);

// Also with DS, we can have a function return an array and immediately destruct the result into different variables. This allows us to return multiple values from a function.
// Recieving 2 return values from a function
const [starter, mainCourse] = resturant.order(2, 0);
// console.log(starter, mainCourse);


// Dealing with nested arrays
// We basicaly need to do a destructuring inside a destructuring.
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
// console.log(i, j, k);


// default values
// We can also set default values for the variables when we are extracting them
const [p=1, q=1, r=1] = [8, 9]
console.log(p, q, r);









