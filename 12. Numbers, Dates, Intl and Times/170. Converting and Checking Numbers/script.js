'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-07-12T17:01:17.194Z',
    '2023-07-18T18:49:59.371Z',
    '2023-07-19T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2023-07-13T14:43:26.374Z',
    '2023-07-18T18:49:59.371Z',
    '2023-07-19T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

// Date format
const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDay()}`.padStart(2, 0);
    // const month = `${date.getMonth()}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and log user out
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    // Decrease time
    time--;
  };
  // set time to 5 minutes
  let time = 120;

  // call the time every seconds
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const today = new Date();

    // Experimenting Internationalization
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short',
    };

    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(today);

    // const day = `${today.getDay()}`.padStart(2, 0);
    // const month = `${today.getMonth()}`.padStart(2, 0);
    // const year = today.getFullYear();
    // const hour = today.getHours();
    // const minutes = `${today.getMinutes()}`.padStart(2, 0);
    // const seconds = `${today.getSeconds()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
Numbers
// All numbers are represented internally as floating
console.log(23 === 23.0);

// converting strings to numbers
console.log(Number('23'));
console.log(+'23');


// Pasrsing : using parseint() method on the Number Object to convert a string to a number. In order for this to work, the string has to start with a number. this method almos accepts the sencond argument which is the redox, a base 10 format which will tell us the number base we are parsing into the argument, If we are working with binary, we would pass in two as the argument. If you use the parseInt on a floating number, it will not read the numbers behind the (.)
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e14", 10));

// ParseFoat: this reads the decimal from our float numbers
console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

// isNAN: used to check if any value is mot a number
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20px"));
console.log(Number.isNaN(23 / 0));

// isFinite(): the best way to check if a  value is a number as oppose to the isNaN
console.log(Number.isFinite(23));
console.log(Number.isFinite("23"));
*/

/*
// MAth Operations and Rounding Numbers
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(1, 2, 23, 40, 59));
console.log(Math.min(1, 2, 23, 40, 59));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Generating Random Numbers
console.log(Math.floor(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max, min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding Integers : All these methods do type coercion
console.log(Math.trunc(23.6)); //Removes any decimals part

console.log(Math.round(23.3)); //Rounds to the nearest integer
console.log(Math.round(23.9)); //Rounds to the nearest integer

console.log(Math.ceil(23.3)); //Rounds up no matter the integer behind them
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3)); //Rounds down to the number before the decimal
console.log(Math.floor('23.9'));

// .trun() and .floor() cuts off the decimals when we are dealing with positive numbers. However, for negative number they work differently
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals:
console.log((2.7).toFixed(0)); //toFixed() always return a string even if the operation is done on a number
console.log((2.7).toFixed(3));
console.log((2.789).toFixed(2));
// to convert to a number use the + sign
console.log(+(2.789).toFixed(2));
*/

/*
// The remainder Operator: returns a remainder from a division
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3  + 2

// Checking if a number is even or odd
console.log(6 % 2);
console.log(6 / 2); //the result is an even number

console.log(7 % 2);
console.log(7 / 2); //the result is decimal

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'lightgreen';
    if (i % 3 === 0) row.style.backgroundColor = 'red';

    // i % 2 === 0
    //   ? (row.style.backgroundColor = 'lightgreen')
    //   : (row.style.backgroundColor = 'lightred');
  });
});
*/

/*
// Numeric Seperator: starting from ES2020. we can use an operator to format numbers in a way for other developers to read and understand. These numeric seperators are just underscores
const diameter = 287_465_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee = 15_00;
const transferFee1 = 1_500;

const PI = 3.1415;
console.log(PI);

// when we try to convert a string that has a string to a number, it will not work
console.log(Number("230_000"));
console.log(parseInt("230_000"));
*/

/*
// BigInt : a primitive data type and a type of number that was introduced in 2020. the way to transform a big or a regular number into a bigInt is to use the n 
console.log(94389041001437360913165470768794719017435638947);
console.log(94389041001437360913165470768794719017435638947n);
console.log(BigInt(389041001437360913165470768794719017435638947));

// Operations:
console.log(100000 + 1000000n);
console.log(100895371290825000n * 100000000n);

const huge = 489758760493701235939n;
const num = 20;
console.log(huge * BigInt(num));
// Math operations does not work
console.log(Math.sqrt(huge));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20n');

// String concatenation: does convert it
console.log(huge + 'is really huge!!!');

// Divisions : if you use bigInt, it retun the closest bigint
console.log(10n / 3n);
console.log(10 / 3);
*/

/*
// Creating Dates:
// Create a date : has four ways of creating them
const now = new Date();
console.log(now);

console.log(new Date("July 18, 2023"));
console.log(new Date(account1.movements[0]));

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

const today = new Date();
console.log(today);
*/

/*
// Operations with Dates:
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

/*
//Internationalizing dates:
const today = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'short',
};
const locale = navigator.language;
console.log(locale);
labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(today);*/

/*
// Internationalization Numbers
const nums = 3884764.23;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR"
}

console.log("US:   ", new Intl.NumberFormat("en-US", options).format(nums));
console.log("Germany:   ", new Intl.NumberFormat("de-DE", options).format(nums));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(nums));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(nums));
*/

/*
// Timers: setTimeout and setInterval:
// setTimeout: schedules a function after a certain number of time, but the function only runs once
const ingredients = ['olive', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your Pizza with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval: this callback function does not stop, it keeps running
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();
  // console.log(now);
  // console.log(`${hour}:${minute}:${seconds}`);
}, 1000);
*/