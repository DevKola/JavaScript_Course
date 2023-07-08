/*
  //How the this keyword works:
  this keyword/varaible =: is a special variable that is created for every execution context(every function). It takes the value of the owner of the function in which the this keyword is used. It also points to the owner of the function.
  It's important to know that the value of the this keyword is not static. It all depends on how the function is called and it's value is only assinged when the function is actually called.

    1. calling a function as a method: the this keyword helps the functin to point to the object the function is called on or in other words, points to the object calling the method.

    2. Calling a function as a normal function: this is when a function is not attached to an object. in this scenerio, the this keyword is undefined and this is valid for stict mode.

    3. Arrow function: not typically a way to call a function, but it is still important to consider. the arrow function do not get the this keyword. it uses the this keyword of its parent which is the global scope.

    4. calling a function as an event listener: the this keyword will point to the DOM that the event handler function is attached to
*/