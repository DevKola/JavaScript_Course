'use strict';

/*
  //Protypes: all Objects in JS are linked to a prototype object, each Object has a prototype. The prototype has a innate methods which all objects linked to that prototype can access and use. This behavior is is usually called Prototypal Inheritance

  // Prototypal Inheritance: simply means all objects linked to the prototype can make use of all of the methods linked to that prototype. this is the reason this mechanism is called Prototypal Inheritance

  //Objects also delegate behaviours to the linked prototype objects. This mechanism can also be called delegation


  // 3 ways of implementing prototypal inheritance in JS:
    // How can we actually crete prototype? How can we link objects to prorotypes? How can we create new objects, without having classes? How do we Implement OOP in JS in practice
      1. Constructor Functions
        * A technique to create Objects Programatically using/from a function, which will also set the new Object Prototype
        * this is how built-in objects like Arrays, Maps or Sets are actually implemented
      
      2. ES6 Classes
        *This is the more mordern way of doing OOP in JS
        * this is just an alternative and they are called "Syntetic Sugar": behind the scenes, ES6 classes work exactly like constructor functions. They also use prototypal inheritance
        * ES6 classes do not behave like classes in "classical OOP"(last lecture)
        
      3. Object.creta()
        * the easiest and most striaghtfoward way of linking an object to a prototype object
        

*/
