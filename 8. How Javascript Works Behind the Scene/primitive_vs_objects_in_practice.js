
// Primitive Types
let lastName = "Williams";
let olaLastName = lastName;
lastName = "Davies";
console.log(lastName, olaLastName);


// Reference Types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age:  27
}

const marriedJessica = jessica;
marriedJessica.lastName = "Davies";
// console.log("Before marriage", jessica);
// console.log("After marriage", marriedJessica);


// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["alice", "Bob"]
};

// merges two objects and return a new one
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davies";
// this means a new memory is created in the hean and jessica 2 points/reference that address. the .assign creates a shallow copy

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
// Because the family object is a deeply need object, the .assign method will not copy it to the new object. So what we need is a deep clone.
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);


