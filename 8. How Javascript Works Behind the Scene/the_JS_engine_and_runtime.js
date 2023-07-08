/*
  What is a JS Engine?
    This is a program that executes JS code. Executing a JS code is what an engine does. Every browser has it's own engine, the most known engine is the google's V8 which powers Chrome browser, and Nodejs.
    Every JS engines always contain a call stack and a heap. 
      1. Call Stack: 
        This is where our code is executed using what is called execution context

      2. The Heap:
        Is an un-structured memory pool whicjh stores all the objects that our application needs
  
  How is the code compiled to machine code, so it can be execited afterwards? Before we dive deep into that, we need to touch briefly on Compilation and interpretation.
    The process of converting human readable code to machine language is done using compilation or interpretation.

    Compilation: is when the entire code is converted into machine code at once, and written to binary file that can be executed by a computer. 
        First: Compilation of sorce code to machine code
        Second: Execution of code which can happen way after the compilation.

    Interpretation: This is when interpreter runs through the source code and execute it line by line
      Here: the code is read and executed at the same time

  Modern JS now use the mix of copilation and intepretation which makes the program faster. this is done with the use of (JIT)

  Just-in-time (JIT) compilation: This when the entire code is converted into machine code at once, then executed immediately

              View JIT Picture

  The JS Runtime in the Browser:
    A runtime is like a box that contains all JS related stuffs that we need.
    A JS runtime contains a JS engine, in order to works properly, we need access to WEB API. APIs are functionalities provided to the engine, accessible on window object, but not part of JS language, but JS has access to API through window global object
    The runtime also include what is called a callback queue:
      This is a DS that contains all the call back funtions thatare ready to be executed
*/