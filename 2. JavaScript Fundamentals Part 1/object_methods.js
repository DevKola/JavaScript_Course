const jonas = {
  firstName: "Jonas",
  lastName: "Schemdtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["micheal", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   return 2037 - this.birthYear
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  messageFromFirstName: function () {
    this.message = `This is a message from ${this.firstName} to you new developer`;
    return this.message;
  },

  jonasSummary: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    return this.summary;
  }
};

console.log(jonas.calcAge());
console.log(jonas.messageFromFirstName());
console.log(jonas.jonasSummary());



