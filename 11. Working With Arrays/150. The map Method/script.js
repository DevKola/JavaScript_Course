"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// These methods are used for data ttransformation. Basically we use them to create new arrays based on data transformation from new arrays: Map, Filter, Reduce

// Map: is used to loop over array. this method creates a brand new array based on the original array. Basically, the method loops through an array, take the callback function and apply the code inside the function on each of the element in the array and store them in a new array. This method returns a new array containing the results of applying an operation on all original array elements
// unlike forEach, the map method will give a brand new array, this array will contain the result of the callback function on each of the original array element. this method does not mutate the original array

// convert euro to dollar
const eurToUsd = 1.1;

// Using the map
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movementsUSD);

// Using the old for Of loop
const movementsUSDFor = [];
for (const mov of movements) movementsUSDFor.push(mov * eurToUsd);
console.log(movementsUSDFor);

// Using arrow function
const movementsUSDArr = movements.map((el) => el * eurToUsd);
console.log(movementsUSDArr);

// the map methods also has access to the current index and the whole array

const movementsDescription = movements.map((el, i) => {
  return `Movement ${i + 1}: You ${el > 0 ? "deposited" : "withdew"} ${Math.abs(el)}`;
});

console.log(movementsDescription);
