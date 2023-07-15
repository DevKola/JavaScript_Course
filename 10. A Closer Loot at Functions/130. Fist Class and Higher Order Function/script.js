"use strict";

//one of the property of js is that it has first class function which enable us to write higher order function

// JS treats functions as first class citizens, meaning functions are treated as values. it works this way because functions are juat another type of objects in JS
    // functions can be stored in variables or properties: as a varible is when you attach a function to a variable name, while as a property is when you write a function inside an object declaration.

    //Passing function as arguments to other functions: this is useful in the case of an event listener. a function can be passed as the second argument for an event listener

    //Return a function from another function

    // Calling methods on functions: because functions are objects, it makes it possible for methods to be called on them. e.g .bind() method

// Because JS has first class functions, it makes it possible to write higher order function: A higher order functions are functions that receive another function as argument, returns another function, or both
    // the addEventListener("click", function) is an example of higher order function because it reveives another function as its input. the function that is passed in as argument is called a callback function. So the callback function will be called later by the higher order function

    // function that returns another function 

//The difference between the two is that: First class function is a feature a language has or does not. FCF is are not in practice because they are just feature. HOF on the other hand is in practice because a language has FOF