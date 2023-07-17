"use strict";

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const depositsUSD = function (movements) {
  const deposits = movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov);
  return deposits;
}

console.log(depositsUSD([200, 450, -400, 3000, -650, -130, 70, 1300]));
