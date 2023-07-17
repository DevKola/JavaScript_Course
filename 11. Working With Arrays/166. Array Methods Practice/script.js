"use strict";

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 1.
// Get the sum of all the deposits into the bank
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((el) => el > 0)
  .reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);

// 2.
// Deposits at least 1000
// const numDeposits1000 = accounts.flatMap(el => el.movements).filter(el => el >= 1000).length;

// Using the reduce
const numDeposits1000 = accounts
  .flatMap((el) => el.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(a++);
console.log(++a);
console.log(a);

// 3.
// Using reduce to create an object or even an array of all the deposits and the withdrawals
const { deposits, withdrawals } = accounts
  .flatMap((el) => el.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

const [depositsArr, withdrawalsArr] = accounts
  .flatMap((el) => el.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums[0] += cur) : (sums[1] += cur);
      return sums;
    },
    [0, 1]
  );
console.log(deposits, withdrawals);

// 4.
// Create a function that takes astring and convert the letters into title case
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

  const exceptions = [
    "with",
    "between",
    "From",
    "a",
    "and",
    "as",
    "but",
    "in",
    "if",
    "nor",
    "so",
    "yet",
  ];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((el) => (exceptions.includes(el) ? el : capitalize(el)))
    .join(" ");

  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
