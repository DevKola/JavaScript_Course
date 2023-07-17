"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// The flat() returns a grouped verson of and element. a good usecase is if you have a sub array inside another array. It will remove the nested array and flattened them together. It however only goes one level deep when flatening the array. If you have an array inside an array and inside an array and again inside another array, it will not return the flatten array of all of them
console.log(arr.flat());

// the easiest way to solve this is to go one level deep. By default, the parameter for the flat() is one level depp (1), so we can go 2 level deep
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Without chaining
const accMovements = accounts.map((acc) => acc.movements);
console.log(accMovements);

const allMovements = accMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// With Methods Chaining
const totalMovBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalMovBalance);

// The flatMap(): combines the function of map and flat together. This however only goes one level deep.
const totalMovBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalMovBalance2);