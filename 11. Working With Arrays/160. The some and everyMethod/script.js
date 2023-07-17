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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Some() method: this method returns a boolean. It is useful to check if something to is present in an array of element or even a string. Very similar to the .includes(), the only difference is that with this one, we can specify a condition, while in the .includes() we cannot

console.log(movements);

// No condition: checks for equality
console.log(movements.includes(-130));

// Condition
const anyDesposits = movements.some((mov) => mov > 1500);
console.log(anyDesposits);

// Every() method: very similar to the some. the onnly real difference is that the every() will only return true if every condition in the array satisfies the condition. If every test passes the consdition in our callback function is true will we get a true
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


// Seperate callback
const deposit = mov => mov > 0;
console.log(account4.movements.every(deposit));
console.log(account4.movements.some(deposit));
console.log(account4.movements.filter(deposit));