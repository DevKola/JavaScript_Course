/*
// How is JS code Executed? 
  We know the codes are executed in the call stack in the engine.
  After the code is done compiling, the creating of global context takes place for the top-level code. A top level code is a code that is not inside any function. In the begining, only the codes outside the function will be executed first. the codes inside a function will only get executed when they are called.

  //what is an execution context?
    this is an abstract concept. it is simply an environment in which a piece of JS code is executed. Stored all the necessary information for some code to be ezecuted. there's only one global execution context for Js code no matter how long the code is and this is the default context, created for code that is not inside any function(top-level) 
    Once the top level code is done executing, functions also start to execute as well. So for each every function called, a new execution comtext will be created. containing all the necessary information to run the function and the same goes for methods as well because they are simply a function attached to an object.

    All these execution context together make up the call stack.
    when all is done executin, the engine will wait for call back function to arrive.

  //what is an execution context made of?
  The first thing inside an execution context is the variable environment: In this environment, all the variable names and functions declaration are stored, also th argumentd objects. the arguments objects contis all the arguments that will be passed into a function

  The scope chain:


  The this keyword:

  The vaariable environment, the scope and the this keyword is generated during the creation phase, right before execution. 
  Execution context taking place in an arrow function does not have their own arguments objects mor the this keyword. they can only make use of them from their closest function parent
  These are the necessary things to run a function and the code in the top level


  //What is a call Stack?
    This is the place where execution context gets stack on top of each other in order to keep track of where we are in the excution phase
*/