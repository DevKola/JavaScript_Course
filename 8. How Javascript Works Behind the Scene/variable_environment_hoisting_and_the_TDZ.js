/*
  //How variables are created in Js:
    In JS we have a mechanism called hoisting. Hoisting makes some type of variables accessible/usable in the code before they are actually declared. These are variables lifted to the top of the scope.
    Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object. Function declaration is a good example of hoisting, meaning you can call/run them before they are created and this is possible because of hoisting.

  //What is temporal Dead Zone, Let and Const:
    Its the rgion of the scope, in which the variable is defined and can be used in anyway. A dead zone is when you try to access a variable before declaration in the same block. You'll get a reference error of initialization

  //Why TD?
    Makes it easier to avoid and catch errors: accessing variables before declaration is a bad practice and should be avoided. This limits the level of bug we can encounter.
    Also makes te const variable actually work.

  //Why Hoisting?
    To be able to use function declaration before declaring them
*/