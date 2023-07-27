"use strict";

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods

class Account {
  // 1.  Public fields(instances)
  locale = navigator.language;

  //2. Private fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // protected property
    //this._movements = []; //encapsulating the movements(Protected property)
    //this.locale = navigator.language;
  }

  // 3. Public methods
  // Public interface

  getMovements() {
    return this.#movements;
  }

  deposits(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposits(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approvedLoan) {
      this.deposits(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  // 4. Private methods
  _approvedLoan(val) {
    return true;
  }
}

const acct1 = new Account("Jonas", "EUR", 111);
acct1.deposits(800);
acct1.withdraw(300);
acct1.requestLoan(10000);

console.log(acct1);
// console.log(acct1.#movements);

// Chaining Methods : You need to return the this for this to work in the methods
acct1.deposits(233).deposits(500).withdraw(32).requestLoan(2500).withdraw(1000);
console.log(acct1.getMovements())
