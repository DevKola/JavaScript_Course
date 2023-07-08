/*
  What is JS? 
    It's a high level object-oriented, multi-paradigm programming language.
    It's also a high level, prototype based object oriented multi paradigm, interpreted or just in time compiled, dynamic, single threaded, garbage collected programming laguage with first class function and a non blocking event loop concurrency model.
  
  1. High Level:
    Any computer program needs resources like hardware, CPU to do it's work. when working with js, you don't have to worry about memory allocation for variable unlike languages like C. This makes the laguage less fast like the C language. One of the tools that take memory management away from us is Garbage collection
  
  2. Garbage-Collection/collected:
    This is an algorithm inside JS engine that automatically removes old or unused object from the computer memory. 

  3. Interpreted or Just-in-time compiled Language:
    A computer processor only understands 0 and 1. Sice it's impossible to write this language, we write human readable code. This code then needs to be compiled or interpreted. So the process of compilling a human readable code to a machine code is done inside the JS engine.
  
  4. Multi-paradigm language:
    A paradigm is an approach and mindset of structuring code, which will direct your coding style and technique. Paradigm can either be: Imperative or Declarative
     The three popular paradigm are: Procedural, Object-oriented and Functional programming.
      1. Procedural Programming: This is just organizing the code in a very linear way and with some functions in between
    Some languages are only precedural or object-oriented or functional, but JS does all. This makes the language, flexible and powerful
  
  5. Prototype-based object-oriented Language:
    Almost everthing in JS is an object, except primitive values such as strings, numbers etc. Arrays is an example of object. the reason why we can create an array and use the  .push method on it is bevause of prototype inheritance. We can build an array from a prototype blueprint which contains many methods, then the array created can inherit the methods from the blueprint, so we can use them on the arrays

  6. First-class functions:
    In this language, functions are simpy treated as variables. We can pass them into other functions, and return them from functions. This process allows for functional programming. Passing a function into another function as an argument: First-class functions!

  7. Dynamic Language:
    this is simply when you are able to re-assing the value given to a variable to another value. let x = 24; x = "jonas",. when you want to use types with JS then you canuse TypeScript with JS

  8. Single-threaded/Non-blocking event loop concurrency mdel:
    Concurrency model - is how JS engine handles miltiple tasks happening at the same time. this is needed because JS runs in one single thread, so it can only do one thing at the same time. So we need a way to handle things happening at the same time. when a long running task happens in JS run time, this blocks the single thread. However, we want non-blocking behavour. We can achieve this by using an event loop. This takes long running tasks, execute them in the background and puts them back in the main thread once they are finished.
*/