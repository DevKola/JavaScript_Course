let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);

const me = {
  name: "jonas",
  age:  30
}

const friend = me;
friend.age = 27;
console.log(friend);
console.log(me);

// Primitive values are called: Primitive types, while Objects are called: Reference types. this is due to how they are stored in the memory.
// the objects are stored in the Heap, while primitive values are stored in the call stack

//In the primitive values that gets stored in the call stack, when we first create a variable, in the JS engine in the call stack, an identifier is created for the age variable with an address and a value. The address holds an address (e.g 001) and the value (30).
// when we then created a new variable oldAge and set it's value == to age, the new variable points to the address of the age. When we later set the value of age to noew value (31), a new address(002) is created and age now points to that address