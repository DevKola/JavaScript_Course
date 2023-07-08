const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution 1
    // // A way to preserve the this keyword, so we can use it inside a functionand then call the function as a method.
    // const self = this;
    // const isMellenial = function () {
    //   // probelem
    //   //  console.log(this.year >= 1981 && this.year <= 1996);

    //   // Solution
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

  

    // Solution 2
    const isMellenial =  () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMellenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// Never use an arrow function as a method.

// A function inside a method will produce undefined.



// Arguments keyword -> this word is also available in the regular functions

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}
addExpr(2, 5)